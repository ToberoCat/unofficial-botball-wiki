---
id: git-for-robotics
title: Guide to using Git for robotics Projects
tags:
  - code
  - WombatOS
---

# Guide to Using Git for Robotics Projects

This guide will introduce you to Git, a tool for tracking changes in your code, and show you how to use it offline
without needing SSH or complex commands. You’ll also learn how to go back to a previous version if something goes wrong.

### Why Should I Use Version Control?

Version control with Git helps you manage changes in your code over time. Here’s why it’s useful:

1. **Easily Revert Changes**: If something breaks, you can go back to an earlier version that worked without losing all
   your progress.
2. **Track Progress**: Git records each version you save, allowing you to see what was changed and why. This is helpful
   for debugging or understanding what’s been done.

Using Git will make managing code for robotics projects easier and less stressful!

### What’s the Difference Between Online and Offline Git?

Git works both **offline** and **online**, and understanding this difference will help you see what’s possible.

- **Offline Git**: Git can be used entirely on your computer or robot without connecting to the internet. Every Git
  command, such as saving versions and going back to a previous version, works offline. This is ideal if you’re using
  Git in a local network or without internet access.

- **Online Git**: When connected to the internet, Git can also connect to **remote repositories** on services like
  **GitHub**. These services store your code on their servers, making it accessible from any device with
  internet. This ensures that even if your device for whatever reason, goes up in flames, you'll still have your code.

For this guide, we focus on **offline Git**, where you save all versions directly on your robot without using the
internet or a remote server.

### How to Use Git Without Internet or SSH

This guide covers two simple ways to use Git offline: **GitHub Desktop** (a graphical interface) and **command-line Git
commands**.

### Option 1: Using GitHub Desktop (Easiest for Beginners)

GitHub Desktop provides a visual interface to manage Git repositories. This app must be installed on the robot’s
Raspberry Pi itself, and you’ll need to switch tabs between the KIPR UI and GitHub Desktop to manage your code.

#### How to Install GitHub Desktop on the Raspberry Pi (Wombat)

1. **Open the Raspberry Pi Desktop**:
    - Connect a mouse, and keyboard to the Wombat.

2. **Download and Install GitHub Desktop**:
    - Since GitHub Desktop doesn’t have an official Raspberry Pi version and it hasn't been installed by default on the
      kipr os, you have to run these commands in the wombat's terminal:

```bash
   wget -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/shiftkey-packages.gpg > /dev/null
   sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.list'
   sudo apt update && sudo apt install github-desktop
   ```

#### Using GitHub Desktop on the Raspberry Pi

1. **Create a New Repository**:
    - Open GitHub Desktop on the Raspberry Pi.
    - Select **Create a New Repository** and name your project. Save it in the folder for your project. The project is
      located in `/home/kipr/KISS/projects/[projectName]`

2. **Saving Changes (Committing)**:
    - After editing your code, open GitHub Desktop.
    - You’ll see any code changes listed. Write a brief description (e.g., "Added obstacle detection") and click *
      *Commit to main**.

3. **Reverting to a Previous Version**:
    - Go to the **History** tab in GitHub Desktop.
    - Find the version you want to go back to. Right-click on it and choose **Revert Changes** or **Restore Version**.

### Option 2: Using Git Commands (For Console-Friendly Projects)

For those comfortable typing commands in the console, this option works well using the KIPR UI on the Wombat.

1. **Navigate to your project**:
    - Navigate the console to your project by running the command below. This will change your directory:
   ```bash
    cd /home/kipr/KISS/projects/[projectName]
   ```

2. **Initialize Git in the Project**:
    - Open the console and type:
      ```bash
      git init
      ```
    - This starts Git in your project folder.

3. **Saving Changes (Committing)**:
    - After making changes, type the following to save them:
      ```bash
      git add .
      git commit -m "Added obstacle detection"
      ```
    - Replace `"Added obstacle detection"` with a brief description of your changes.

4. **Viewing Past Versions**:
    - To see a list of previous commits (versions), type:
      ```bash
      git log
      ```
    - You’ll see a list of commits with unique IDs and descriptions.

5. **Reverting to a Previous Version**:
    - To go back to a previous version, use the **checkout** command with the commit ID (found in `git log`):
      ```bash
      git checkout [commit_id]
      ```
    - Replace `[commit_id]` with the actual ID of the commit you want.

   **To return to the latest version**, type:
   ```bash
   git checkout main
   ```

---

### Essential Git Commands Summary

- **git init**: Sets up Git in your project folder.
- **git add .**: Adds all changes to be saved.
- **git commit -m "message"**: Saves a version with a description.
- **git log**: Lists all past versions (commits).
- **git checkout [commit_id]**: Reverts to a previous version.
- **git checkout main**: Returns to the latest version.

---

### Tips for Using Git Offline

- **Stay on the Main Branch**: This keeps things simple by avoiding multiple versions of code.
- **No Internet Needed**: This workflow is completely offline, so it works without a remote server or internet access.
- **Safe Backup**: By saving each version, you can always go back if you run into problems.

Using Git offline with these steps will give your team a reliable way to manage and track changes to their code without
needing complex setups or an internet connection.

<AuthorGrid authors={["tobero"]}/>
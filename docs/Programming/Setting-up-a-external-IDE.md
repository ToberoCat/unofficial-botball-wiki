---
id: external-ide
title: Setting up an External IDE (C)
tags:
  - code
  - WombatOS
---

# Setting up an External IDE

This guide will help you understand why switching to a modern programming environment (or IDE) can make things
easier—and show you a simple way to get started.

> **IDE**: An IDE, or Integrated Development Environment, is a program where you can write, test, and organize code.  
> Think of it as a workspace where all the tools you need are in one place!

> **Note**: This is a really hard and complex topic - It might not be suited for everyone, as it will require you to be
> a little bit tech-savvy, else you'll get lost pretty quick (Especially during the cross compilation part)

## Why Use a Modern IDE for Robotics?

In robot competitions like Botball, we use a tool called the KISS IDE. It’s good for beginners, but it’s basic. When
your projects grow, you’ll find that more advanced IDEs can save time, prevent errors, and even help you make your robot
perform better. For instance, Visual Studio Code (or VS Code) is one modern IDE that’s flexible, free, and easy to
learn.

Modern IDEs like VS Code offer:

- **Code Checking**: They can help spot mistakes before you run the code, which saves time and frustration.
- **File Organization**: You can organize different parts of your project, making it easy to find things.
- **Debugging**: They have tools to help you figure out why your robot isn’t working as expected.

## Steps to Get Started: A Simple Path to Success

Let’s break down a clear, straightforward way to set up your modern IDE and get it working with your Botball robot.

### Step 1: Pick and Install Your IDE

1. **Choose VS Code**: Visual Studio Code (VS Code) is free and very popular. It’s available on Windows, Mac, and
   Linux.  
   You can download it [here](https://code.visualstudio.com/).
2. **Install the C/C++ Extension**: To work with the language Botball robots use, you’ll need this extension. In VS
   Code:
    - Go to the Extensions tab on the left (it looks like a square icon).
    - Search for “C/C++” and click “Install.”

### Step 2: Connect to Your Robot’s Controller (the Wombat)

Your Botball robot’s “brain,” the Wombat, has a controller that runs your programs. To send code to the Wombat, you need
to connect to it over a network.

1. **Find the Wombat’s Network Info**:
    - The Wombat creates its own Wi-Fi network. Look at the Wombat’s settings for the network name (SSID) and password.
2. **Connect Using SSH**:
    - SSH (Secure Shell) is a way to access the Wombat from your computer.
    - Once you connect to the Wombat’s network, open a terminal or command prompt on your computer and type:
      ```bash
      ssh kipr@192.168.125.1
      ```
      Replace “192.168.125.1” with the Wombat’s actual IP address, if different. Enter the password when prompted. This
      connects you to the Wombat’s command line, where you can send files and run commands.
      The default password for the kipr user is `botball`

### Step 3: Cross-Compile Your Code on Your Computer

Cross-compiling allows you to compile your code on your powerful computer, generating executables that run on the
Wombat’s ARM-based processor. This process is faster and more efficient than compiling directly on the Wombat.

#### What is Cross-Compiling?

> **Cross-compiling**: Creating code on your computer that can run on another device, like the Wombat’s Raspberry Pi.
> It’s faster than compiling directly on the Wombat.

#### Why Use Cross-Compilation?

- **Speed**: Compiling on your computer is significantly faster.
- **Efficiency**: Leverage your computer’s resources for better performance.
- **Convenience**: Integrate seamlessly with modern IDEs and development workflows.

#### Overview of what's happening

![CrossCompilationFlowchart](/img/cross-compiler-flowchart.png)

*Figure: Overview of the cross-compilation process using Docker.*

The required files will eb transferred from your wombat onto your computer. This has already been done by Clemens Koza
in
the [wombat-cross](https://github.com/PRIArobotics/wombat-cross) GitHub repo. This repo makes it easier to set up this
complex process.

Once the files are on your device, they get combined with your program to create the executable the wombat can
understand. This is then put back on the wombat and gets executed.

#### Running Cross-Compilation

As already mentioned, using [wombat-cross](https://github.com/PRIArobotics/wombat-cross) is the approach used in this
guide to set up cross compilation. It already preconfigures many things, making it easier to get started with cross
compiling for the wombat.

Follow the instructions on [](https://github.com/PRIArobotics/wombat-cross) to setup your own cross compilation

#### Additional Resources

- **wombat-cross GitHub Repository**: [](https://github.com/PRIArobotics/wombat-cross)
- **Docker Documentation**: [](https://docs.docker.com/get-started/)

### Step 4: Copying Your Compiled Code to the Wombat

After compiling your code on your computer, the next step is to transfer it to the Wombat so it can be executed on the
robot. Here’s a simple way to do this using **SCP** (Secure Copy Protocol), which allows you to securely send files over
the network.

#### What You’ll Need

1. **Wombat Network Information**: The Wombat creates its own Wi-Fi network, and you’ll need to connect to it first.
2. **SCP Tool**: Most systems have SCP built-in (available in Mac, Linux, and Windows through PowerShell or with an SSH
   client installed).

#### Step-by-Step Guide for Transferring Files

1. **Connect to the Wombat’s Network**

    - Open the Wi-Fi settings on your computer.
    - Find and connect to the Wombat’s network. The network name (SSID) and password can typically be found in the
      Wombat’s settings or user guide.

2. **Open a Terminal or Command Prompt**

    - You’ll be using the `scp` command to transfer files. Open your terminal (on Linux or Mac) or command prompt (on
      Windows with SSH support).

3. **Get the Wombat’s IP Address**

    - In most cases, the Wombat’s IP address on its network is `192.168.125.1`. If it’s different, you can find it on
      the Wombat’s network settings page or by checking the connection details on your computer.

4. **Determine the Target Path on the Wombat**

    - To run your program on the Wombat, you’ll need to upload it to a specific folder. Typically, this is the Wombat’s
      **project directory**. The general path for a new project created in the KISS IDE on the Wombat is:
      ```bash
      /home/kipr/KISS/projects/[projectName]/build
      ```
    - Replace `[projectName]` with the name of the project you created in the KISS IDE. If you don’t have a project yet,
      open the KISS IDE on the Wombat, create a new project, and note the project name.

5. **Transfer the File Using SCP**

   Now that you have the IP address and project path, you’re ready to send the file.

    - Assuming your compiled file is named `robot_program`, use this command to transfer it:
      ```bash
      scp robot_program kipr@192.168.125.1:/home/kipr/KISS/projects/[projectName]/build
      ```
    - Replace `robot_program` with your actual file name and `[projectName]` with your project’s name.

    - **Enter the Password**: When prompted, enter the password for the Wombat (default is often `botball` unless it was
      changed).

6. **Verify the Transfer**

   To check if the file transferred successfully, you can SSH into the Wombat (as described earlier) and navigate to the
   target directory:

   ```bash
   ssh kipr@192.168.125.1
   cd /home/kipr/KISS/projects/[projectName]/build
   ls
   ```

   You should see your `robot_program` file listed in the directory.

### Step 5: Run and Test Your Code

Now that your program is on the Wombat, you can test it directly on the robot. Go to the Wombat’s project folder and run
it. This is the fun part—watching your robot follow your commands!

1. **Start the Program via the Wombat’s UI**

   Once the file is in the correct folder, you can start the program directly from the Wombat’s user interface:
    - On the Wombat, open the KISS IDE, navigate to your project, and you should see the program ready to run.

2. **Alternatively, Run the Program via SSH**

   If you prefer running it directly from the command line:
    - SSH into the Wombat, navigate to the project folder, and run it:
      ```bash
      ./robot_program
      ```
   This command will execute your program on the Wombat, allowing you to see how it performs on the robot.

By following these steps, you’ll successfully transfer, locate, and run your compiled code on the Wombat, making it
easier to test and adjust your robot’s performance. This setup helps create a smooth workflow for programming and
iterating on your robot!

---

### Further Technical Details

For more details, check out the full
paper [here](https://www.kipr.org/wp-content/uploads/2024/08/Usage_of_Modern_IDEs_for_Developing_Robotics_Applications.pdf),
which explains this method and other helpful tips for working with robotics! It includes different cross compiling
strategies with their performances compared.

## Paper

- [Usage of Modern IDEs for Developing Robotics Applications](https://www.kipr.org/wp-content/uploads/2024/08/Usage_of_Modern_IDEs_for_Developing_Robotics_Applications.pdf)

<AuthorGrid authors={["tobero"]}/>
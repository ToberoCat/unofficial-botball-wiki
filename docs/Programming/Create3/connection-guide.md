# Create3

## Connecting to the Create3

To connect the Create3 to the Wombat, ensure it is connected via a LAN connection. The Create3 uses a static IP address
of 192.168.186.2.

Once connected, you can control the Create3 using the Wombat. Follow these steps:

1. Navigate to the iRobot Create hardware section on the Wombat's web UI.
2. Check the Create3 status on this page. It must be reachable. If it is unreachable, the Create3 is likely not properly
   connected to the Wombat over LAN. Check the LAN cable to ensure it is securely connected.
3. If the connection is successful, click `Quick Restart`. This process takes about 10 seconds, after which you should
   receive feedback indicating whether the Create3 received the command.
4. If the Create3 received the command, it will start spinning white. Ensure the Create3 is disconnected from the
   docking station; otherwise, it won't restart properly.
5. The Create3 will emit a happy sound once it finishes restarting. Upon hearing this, reboot the Wombat.
6. After the Wombat reboots, the Create3 should start blinking green, typically when the UI has fully loaded.

## Fixes for Common Issues

- **Create3 Not Reachable**: Verify the LAN connection.
- **Restart Issues**: Ensure the Create3 is disconnected from the docking station before attempting a restart.
- **Create3 Not Blinking Green After Wombat Reboot**: Recheck the connection.
- **Persistent Connection Issues**: Try restarting the Create3 again.
- **Create3 Solid Red**: The Create3 encountered an internal error. Place iut on the dock and wait for the happy sound.

### Fixing the create3_server Container

If the above steps do not resolve the issue, you may need to fix the create3_server container. This is often necessary
if the Wombat was not shut down properly. Always shut down the Wombat using the UI or the shutdown button. Avoid pulling
the plug, as this can prevent the create3_server container from starting correctly.

1. Connect to the Wombat via SSH.
2. Check the status of the podman container by running `sudo podman logs create3_server`. If no logs are displayed,
   verify if the container exists and has started properly using `sudo podman ps -a`.
3. If the create3_server container is not listed or only shows that it has been created, execute the following commands:

   ```
   sudo systemctl stop create3_server.service
   sudo podman rm create3_server
   sudo reboot
   ```

This sequence will restart the Wombat and should fix the create3_server podman container.

<AuthorGrid authors={["tobero"]}/>
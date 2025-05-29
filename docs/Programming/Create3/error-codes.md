# Create3 Error Codes and How to Fix Them

## Remote Exceptions

### Action Failed with Code 5

**Description:** This error indicates that the create is not ready yet.

**Possible Causes:**

- To fast sending commands

**Solutions:**

1. **Wait some time:**

- Use the CreateSetup Module rovided by libstp_helpers
- Use create3 lightring actions before sending commands
-

### Action Failed with Code 6

**Description:** This error occurs when the Create3 is unable to fulfill its goal. For example, it may attempt to drive
straight for 10 cm but only manage to move 5 cm.

**Possible Causes:**

- The robot is stuck or encountering an obstacle that prevents it from moving as expected.

**Solutions:**

1. **Ensure Clear Path:**

- Check the area around the Create3 to ensure it is not stuck or obstructed.
- Remove any obstacles that may be in the robot's path.

2. **Manual Adjustment:**

- If this error occurs frequently, consider using the `set_speed` commands to manually back up the robot. These commands
  do not require the robot to detect movement, allowing you to reposition it as needed.

<AuthorGrid authors={["tobero"]}/>
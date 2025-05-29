# IMU Calibration

To make the raw imu values useful, the imu has to be calibrated. The following calibrations have tobe applied for it to
work the best:

- Align axis to prevent axis misalign and scale them
    - Rotate the gyro in a known, continuous motion on a single axis. This should be done for each axis. Record all
      three axis when doing a test.
    - With the data, you should be able to compute how much the axis misalign with each other - In an ideal world, when
      the gyro gets rotated on a single axis only, only a single axis triggers values.
    - After computing the axis misalignments, you can determine how much the gyroscope records a wrong rotational
      velocity. When for example the gyroscope detects an avg deg/s of 15, but we know we rotated it with 17 deg/s, the
      gyro needs to be adjusted
    - Now, that the gyro has been aligned, the same has to be done for the accelerometer and magnetometer

- Magneto hard and soft iron calibration
    - Rotate the magnetometer away from any metal objects or magnets in all directions. Try to cover the whole 3D
      rotational space, with a continous motion. Make sure to also record points at static locations, to not only
      include points that have been in motion
    - Now after these values have been collected (5 minutes or so) the magneto values can be plotted
    - First, remove obvious outliners via outliner detection, as outliners will make calibrated values worse
    - At next step, ellipsoid fitting can be applied to compute the hard iron and soft iron calibration values
    - Hard Iron is to center the values, soft iron is to deform the "ellipsoid" into a circle
    - This is to remove any skews due to permanently mounted metal near the robot
    - Now, to make sure the values are correct, computing the avg magnitude of the sphere is important: This value
      should be close to the magnetic field strength at your location

- Noise analysis for sensor fusion. Looking at the noise of the sensor helps apply the correct filters and give an good
  initial guess about the initial state

- Use cases
  - Compass (Heading)
  - Tilt (Detect if the robot has tilted from the table by driving over a pom)
  - Tilt compensated compass (Heading aligned with the accelerometer)
  - Madgwick Filter
  - EKF Filter

- Autotune filter via genetic evolution

- Temperature drift & compensation
- Collision detection + Collision angle

## 1. Core Sensor Calibration

### 1.1 Axis Alignment & Scaling

1. **Single-Axis Rotation Tests**

    * Rotate the gyro about each principal axis at a known, steady rate. Record all three axes concurrently.
    * Compute an **axis-misalignment matrix**: ideally only the driven axis measures rotation; cross-coupling terms indicate misalignment.
2. **Scale Factor Adjustment**

    * Compare measured vs. known rates (e.g., 15 deg/s measured vs. 17 deg/s actual) to derive per-axis scale factors.
3. **Repeat for Accelerometer & Magnetometer**

    * Apply identical misalignment/scale calibration to accelerometer data (static gravity tests) and magnetometer data (with only Earth’s field).

### 1.2 Magnetometer Hard- and Soft-Iron Calibration

1. **Data Collection**

    * Rotate through full 3D space away from magnets/metal for \~5 minutes, including static holds.
2. **Outlier Removal**

    * Detect and discard spikes (Mahalanobis distance or simple thresholding).
3. **Ellipsoid Fitting**

    * Fit raw points to an ellipsoid:

        * **Hard-iron** → compute offset (center of ellipsoid).
        * **Soft-iron** → compute deformation matrix to “sphere-ify” data.
4. **Validation**

    * Check that the mean magnitude ≈ local Earth field (\~48 µT for many regions).

### 1.3 Noise Analysis

* **Allan Variance** to decompose:

    * **Angle Random Walk (ARW)** for gyro.
    * **Bias Instability** for long-term drift.
* Use these parameters to tune filter covariances and understand expected drift rates.

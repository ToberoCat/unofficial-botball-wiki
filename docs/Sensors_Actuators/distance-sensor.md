---
id: distance-sensor
title: Distance Sensor (GP2Y0A21 Sharp)
tags:
  - kit
  - sensor
---

# Distance Sensor

## Technical Details

### Overview

The distance sensor used in the Botball kit (2024) is
the [GP2Y0A21 Sharp distance sensor](https://www.pololu.com/product/136), a popular sensor for robotics projects.
This sensor is ideal for detecting objects in front of the robot and can be used to avoid obstacles.

![GP2Y0A21 Sharp distance sensor](/img/GP2Y0A21.png)

### Specifications

- **Range**: 10 cm to 80 cm
- **Output**: Analog voltage proportional to the distance of the object
- **Update Frequency**: Approximately 25 Hz (every ~38 ms)
- **Operating Principle**: Emits infrared light and measures the amount of light reflected back

### Sensor Characteristics

- **Range Sensitivity**: The sensor's output is an analog voltage that varies with the distance of the detected object.
- **Color Sensitivity**: The sensor is not sensitive to the color of the object.
- **Placement Sensitivity**: The sensor’s performance is affected by the angle at which the emitted light hits the
  object.

### Voltage-Distance Relationship

The output voltage of the sensor decreases as the distance increases.
However, this relationship is non-linear, and the sensor becomes less accurate as the distance increases.

![Output Voltage vs Distance](/img/distance-sensor-volt-to-cm.png)

- **Close Range (10 cm)**: Approximately 2.25V
- **Far Range (80 cm)**: Approximately 0.4V
- **Non-Detectable Range**: Objects closer than 10 cm result in a high output (~2900 analog value on the Wombat)

### Conversion Formulas

To convert the analog values read by the Wombat controller to distances, we need to derive the appropriate formulas.
Here’s how you can perform similar experiments to understand and verify these constants.

#### Collecting the Data

1. Connect the distance sensor to the Wombat.
2. Set up the multimeter to measure the voltage output from the sensor.
3. Place the sensor at a fixed position and measure various distances (10 cm to 80 cm) using a ruler or measuring tape.
4. Record the analog value read by the Wombat for each distance.
5. Measure the corresponding voltage output using the multimeter.
6. Repeat measurements for accuracy and record the data.

#### Deriving the Formula

Using the collected data:

1. Plot the analog values against the voltages and fit a linear regression to find the conversion constant.
2. Plot the voltages against the distances and fit a curve to find the best-fit equation.

#### Formulas

- **Analog to Voltage Conversion**: $\text{volt}=\frac{\text{analog}}{1251.215}$
- **Voltage to Distance Conversion**: $\text{distance}=\frac{36.6-7*\text{volt}}{0.2+\text{volt}}$

#### Alternative: Lookup Table with Interpolation

Alternatively, instead of using a formula, you can use a lookup table of measured analog values and their corresponding
distances. When reading a value, find the two closest entries in the table and interpolate between them to estimate the
distance. This method can sometimes yield more accurate results, especially in the non-linear regions of the sensor's
response. Create a lookup table from measured values and interpolate linearly in the inverse distance domain (1/cm) for
best accuracy:

*This approach was suggested by Marc Prantl.*

Example pseudocode:

```python
def lookupDistance(analogValue, table):
    for i in range(len(table) - 1):
        if table[i].analog <= analogValue <= table[i+1].analog:
            a0, inv_d0 = table[i].analog, 1/table[i].distance
            a1, inv_d1 = table[i+1].analog, 1/table[i+1].distance
            inv_d = inv_d0 + (analogValue - a0) * (inv_d1 - inv_d0) / (a1 - a0)
            return 1 / inv_d
    return table[0].distance if analogValue < table[0].analog else table[-1].distance
```

### Sensor Sensitivity and Calibration

The distance sensor operates in the infrared (IR) range, making it sensitive to the warmth of the room and environmental
conditions. This means that hardcoded threshold values for object detection may not work reliably in different
environments or at different times.

**Best Practice:**  
Always calibrate the sensor before each run. Place the robot so the sensor can "see" what it should detect, and use the
measured value(s) as reference for detection. This ensures your detection logic adapts to current conditions.

#### Example Calibration Procedure (Pseudocode)

```python
function calibrateSensor():
    print("Place the robot so the sensor can detect the target object.")
    waitForUserInput()
    detected_value = measureSensorValueOverTime()

    print("Now place the robot so the sensor does NOT detect the object.")
    waitForUserInput()
    not_detected_value = measureSensorValueOverTime()

    // Set thresholds based on measured values
    detection_threshold = detected_value - (detected_value - not_detected_value) * 0.2
    no_detection_threshold = not_detected_value + (detected_value - not_detected_value) * 0.2

    return detection_threshold, no_detection_threshold

function isObjectDetected(current_value, detection_threshold):
    return current_value > detection_threshold
```

This approach dynamically sets thresholds based on actual sensor readings in the current environment, making detection
more robust and reliable.

## Mounting Advice

### Importance of Placement

Proper placement of the sensor is crucial to ensure accurate detection. The sensor must be aligned perpendicular to the
object to avoid detection errors due to angular reflections.

![Distance Sensor Placement Diagram](/img/distance-sensor-placement-diagram.png)

### Placement Guidelines

1. **Perpendicular Alignment**: Ensure the sensor is perpendicular to the surface of the object.
2. **Height Consideration**: The sensor should be at a height where it can effectively detect objects, especially
   cylindrical objects like PVC pipes.
3. **Avoid Angled Reflections**: If the emitted light hits the object at an angle, the sensor may fail to detect it.

In the provided diagram:

- The upper drawing shows the correct placement where the sensor is aligned to detect the PVC pipe.
- The lower drawing shows an incorrect placement where the sensor is too low and cannot properly detect the object.

## Programming the Sensor

### Reading Sensor Values

One must know, it's not necessary to use the formulas to convert the sensor values to distances.
You can directly use the analog values to detect objects within a certain range, but from experience, it's better to
convert the values to distances for easier interpretation.

Other makers recommend that the sensor is best used when collecting 10 - 25 samples per measurement, then discarding the
highest and lowest values.
The others should be averaged. This helps alot against noise

### Maintenance

- Regularly clean lens with microfiber cloth.
- Avoid fingerprints and dust for consistent accuracy.

### Environment Considerations

The sensor seems very sensitive to environmental noise - Make sure to never use hardcoded thresholds, always calibrate
them before your run

Shielding helps a lot when it comes to this sensor, as it blocks ambient IR from above or the sides. Consider adding
some foamboard above the sensor or on its sides to prevent ambient light from disrupting it too much

### Practical Use cases

Here is an example of how you might read and convert the sensor values in pseudocode:

```Javascript
function readDistanceSensor():
    analogValue

= analog(sensorPin)
voltage = analogValue / 1251.215
distance = 29.988 * pow(voltage, -1.173);
return distance
```

### Using the Sensor in Robot Programs

#### Obstacle Avoidance Example

To use the sensor for obstacle avoidance, you can program your robot to change direction if an object is detected within
a certain distance.

```Javascript
function driveToObstacle():

while True:
distance = readDistanceSensor()
if distance < 12:
stopRobot()
else:
moveForward()
```

## Extra Resources

* [GP2Y0A21 Official Datasheet (PDF)](/distance-sensor-datasheet.pdf)
* [Pololu Product Brief](https://www.pololu.com/product/136)
* [MakerGuides SharpIR Tutorial](https://www.makerguides.com/sharp-ir-distance-sensor-arduino-tutorial/)
* [Acroname Sensor Tips](https://acroname.com/blog/sharp-ir-sensor-overview)
* [EE StackExchange – Decoupling Capacitor Discussion](https://electronics.stackexchange.com/questions/why-is-a-capacitor-required-between-power-and-ground)

<AuthorGrid authors={["tobero"]}/>

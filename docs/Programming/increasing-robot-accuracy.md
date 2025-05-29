---
id: accuracy
title: Increasing robot accuracy
tags:
  - accuracy
---

# Increasing Robot Accuracy

For precise movement on a game table, there's a key principle to remember: **The robot must always know its position**.
This
means the robot needs to be aware of its current location on the table and where it needs to go next. This is crucial
when the robot must reach a specific spot, such as to pick up an astronaut or drop off a pom.

This is easier said than done, especially since external reference points like GPS aren't allowed.

## X-Y Approach

The X-Y approach offers a straightforward method to ensure the robot consistently knows its x and y coordinates when
needed. This is achieved through various squaring-up techniques.

![X-Y Approach](/img/x-y-approach.png)

This graphic illustrates the X-Y approach, showing how the robot can square up with the table's edges to determine its
position. This image is from jonathan Harrison's video, mentioned below.

### Back-EMF

<tldr>
    <p><b>Summary</b>:Back-EMF is a method that measures motor ticks to determine the robot's position.</p>
    <p><b>Pros</b>: Can be done anywhere on the gametable.</p>
    <p><b>Cons</b>: Not reliable for long distances.</p>
</tldr>

[Back-EMF](https://en.wikipedia.org/wiki/Counter-electromotive_force) measures the ticks of the robot’s motors to
estimate its position. However, this method can be inaccurate, as
the measured ticks may deviate from the actual ticks, especially over longer distances. It works best for short
movements.

![back-emf-deviation.png](/img/back-emf-deviation.png)

The graph above illustrates the deviation when using the Back-EMF method, showing significant inaccuracy over longer
distances. This data is from the
paperr [Enhancement of Accuracy in Botball Navigation](https://www.kipr.org/wp-content/uploads/2024/08/Enhancement_of_Accuracy_in_Botball_Navigation.pdf),
presented at GCER 2024.

### Aligning with the Walls

<tldr>
    <p><b>Summary</b>: Aligning the robot with the game table walls by driving against PVC pipes.</p>
    <p><b>Pros</b>: Simple to implement.</p>
    <p><b>Cons</b>: The robot must be at the table's edge.</p>
</tldr>

This method involves aligning the robot by gently driving it against the PVC pipes along the game table's edges. This
ensures that the robot's x or y position is accurate and can also correct its rotation.

### Line Up

<tldr>
    <p><b>Summary</b>: Aligning the robot with the black lines on the game table.</p>
    <p><b>Pros</b>: Can be done at black lines.</p>
    <p><b>Cons</b>: Slightly more complex algorithm.</p>
</tldr>

Similar to the wall alignment method, this approach uses line-follow sensors to align the robot with black lines on the
table. This method ensures the robot knows its x or y position.

![Line Up gif](/img/line-up.gif)

> This gif has been extracted from Jonathan Harrison's Video about Botball Analysis, see below and shows how the robot
> can align itself with the black lines.

For more details, check out this video by Jonathan Harrison on writing a line-up
method: [Square Ups](https://www.youtube.com/watch?v=jBVklWdPp7g)

## Line Following

<tldr>
    <p><b>Summary</b>:Following a line on the game table to determine the robot's position.</p>
    <p><b>Pros</b>: Simple way to navigate the robot on the game table.</p>
    <p><b>Cons</b>: Slightly more complex algorithm.</p>
</tldr>

Line following is another straightforward way to navigate the game table. The robot follows a black line to track its
position, which is especially useful when it needs to reach a specific spot.

Jonathan Harrison explains how to implement a line-following method in this
video: [Line Following](https://www.youtube.com/watch?v=i_qSt3hAxzc)

## Driving Straight

<tldr> <p><b>Summary</b>: To ensure the robot drives in a straight line without veering off course.</p> <p><b>Pros</b>: Essential for long-distance precision.</p> <p><b>Cons</b>: Challenging to achieve due to external factors like motor inconsistency or surface variations.</p> </tldr>

Driving perfectly straight is critical for ensuring the robot can travel long distances accurately without deviation.
Small inaccuracies can lead to significant errors when covering a large area, especially if the robot is relying solely
on dead reckoning (estimating its position by measuring motor ticks as example).
Here are a few strategies to help the robot maintain a straight path:

- Back-EMF: The most common method for straight driving is to use Back-EMF.
  The ticks allow the robot to adjust its speed by comparing the ticks of the left and right motors.
  If one motor is slightly ahead, the robot can slow it down until the other catches up.

- Gyroscope: A gyroscope sensor can detect angular deviations and correct them.
  If the robot starts to veer off-course, the gyroscope will sense this,
  and the control algorithm can adjust the motor speeds to bring the robot back in line.
  Read [IMU Sensor](../Sensors_Actuators/imu.md) for more information about gyroscope sensors.

- Calibrating Motors: If the motors themselves have different strengths or frictions, it can cause the robot to veer.
  Regular calibration can help ensure both motors are equally powered, minimizing the chance of drifting.

## Rotating Angles

<tldr> <p><b>Summary</b>: To ensure the robot can turn precisely to a specific angle.</p> <p><b>Pros</b>: Allows rotating a specific angle when no external reference points are present</p> <p><b>Cons</b>: Can be affected by external forces and require careful sensor calibration.</p> </tldr>

Precise rotation is key to reorienting the robot when it needs to turn and drive toward a new direction.
Here are common techniques for achieving accurate rotation:

- Back-EMF: Similar to straight driving, Back-EMF can also be used for turning by counting the number of motor ticks.
  To rotate the robot, the motors on each side move in opposite directions,
  and by monitoring the encoder ticks, the robot can calculate when it has reached the desired angle.
  However, this method is less reliable over time, as slippage and friction can introduce errors.

- Gyroscope: The most reliable way to achieve precise turns is by using a gyroscope sensor.
  The gyroscope tracks the robot’s rotation in real-time,
  and the control algorithm can stop the motors as soon as the robot has turned the correct number of degrees.
  Read [IMU Sensor](../Sensors_Actuators/imu.md) for more information about gyroscope sensors.

## Botball Analysis

To see the X-Y approach in action, I recommend watching [Botball Analysis](https://www.youtube.com/watch?v=OVaKQVpcXsI)
by Jonathan Harrison. In this video series,
Harrison analyzes various Botball runs, highlighting what was done well and what could be improved. It's a great
resource for anyone looking to enhance their Botball strategies, and I've learned a lot from it.

<AuthorGrid authors={["tobero"]}/>
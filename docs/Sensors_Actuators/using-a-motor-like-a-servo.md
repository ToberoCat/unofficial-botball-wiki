---
id: motor-like-servo
title: Motor like Servo
tags:
  - kit
  - actuator
---

# Using a Motor Like a Servo

> Important Note: Using a motor to mimic a servo is not recommended, as it can potentially damage the motor. Motors are
> not designed to
> hold a single position like servos. While we didn’t encounter any issues during our experiments, this does not
> guarantee
> it will work for everyone without problems.

## Why Use a Motor as a Servo?

At a Botball competition, we ran out of servos but still needed a way to move a part to a specific position and hold it
there (e.g., holding something up in the air). Normally, a servo would be the perfect tool for this job, but we didn’t
have any more servos available.

To solve this problem, we experimented with ways to make a motor behave like a servo.

## What We Had to Work With

Our goal was to use the motor to:

1. Hold an object in a fixed position.
2. Move to a specific position as accurately as possible.

![motor-like-a-servo-diagram](/img/motor-like-a-servo-diagram.png)

As one can see, in this diagram, we placed a rod on a motor and wanted it to hold in the air.

## How We Made the Motor Hold a Position

We discovered that using the `set_motor_velocity()` function with a value of zero activates the motor but prevents
it from moving.

### What Happens:

- The motor "locks" into place, resisting any force applied to it.
- For example, if you try to push the motor's rod, it will resist but might still give slightly under heavy pressure.

This method allowed us to hold an attached object in a stable position.

## Moving the Motor to a Specific Position

For more precise control, we used tick-based movement combined with a reset position. Here's how we did it:

1. Resetting the Motor’s Position: We defined a “reset position” by moving the motor run into an anchor point. This
   position acts as a starting point for all movements.

2. Moving to a Desired Position: By tracking motor ticks (rotational steps), we could approximate the motor’s new
   position relative to the reset
   point.

### Limitations:

- Error Margin:
  Motors are not designed for precise positioning, so there will always be some error.

- Moving slower improves accuracy but doesn’t eliminate errors entirely.

- Approximation Only:
  This method is suitable for rough positioning but not tasks requiring exact precision.

## Pros & Cons

- Pros:
    - Allows motors to mimic some servo functionality.
    - Useful in situations where servos are unavailable.
- Cons:
    - Risk of damaging the motor.
    - Positioning is approximate, not precise.

## Further Improvements

For better accuracy, you could implement a PID controller to move the motor to the desired position more precisely.
However, we found that our simple approach was enough for our needs.

## Final Thoughts

While this method worked for us during the competition, it is not ideal for long-term use or high-precision tasks. If
possible, always use a proper servo for such applications to avoid potential damage or performance issues.

<AuthorGrid authors={["tobero"]}/>
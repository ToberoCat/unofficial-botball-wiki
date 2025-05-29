---
id: two-part-rotating-arm
title: Two-Part Rotating Arm
sidebar_label: Two-Part Arm
---

![Two-Part Rotating Arm](/hardware/two-part-rotating-arm.jpg)

## Resources

- [Paper](/documents/Converting_Rotational_Motion_to_Vertical_Motion.pdf)

## Core Idea

The two-part rotating arm employs two beams connected via an articulated "elbow" joint, each controlled independently.
The second joint rotates counter to the base joint to produce a "virtual linear" path, extending reach and enhancing
positional accuracy.

## Advantages

* **Extended Reach:** Capable of reaching farther than single-segment arms, ideal for picking objects from difficult or
  irregular angles.
* **Compact Storage:** Folds neatly for compact stowage, optimizing the robot's profile within starting constraints.
* **Orientation Control:** Provides the flexibility to maintain or deliberately adjust end-effector orientation,
  improving task versatility.

## Disadvantages

* **Complexity and Weight:** Requires an additional motor or servo, increasing complexity, weight, and power
  consumption.
* **Increased Structural Demands:** The intermediate elbow joint requires careful design to maintain stability and
  mechanical integrity under load.
* **Computational Complexity:** Optimal use requires inverse kinematics calculations, potentially increasing the
  programming complexity.

## Optimal Usage Scenarios

* Handling irregularly shaped items or precisely grabbing objects like Botguy, especially from unusual angles.
* Tasks demanding an extended reach combined with the need for compact robot footprint.
* Situations requiring accurate and controlled manipulation at variable orientations.

## Quick Build Notes

* **Elbow Balance:** Use elastic cords or springs to counterbalance the elbow joint, significantly reducing the torque
  demand on motors and increasing efficiency.
* **Inverse Kinematics Precomputation:** Calculate arm positions beforehand and store them in a lookup table for fast,
  real-time referencing, enhancing operational speed and accuracy.
* **Joint Reinforcement:** Strengthen joint connections with additional supports or braces to handle torsional stresses
  and maintain precision.

## Enhancements and Variations

* **Sensors Integration:** Implement encoders or positional sensors to enable precise position tracking and
  feedback-driven motion control.
* **Materials Optimization:** Use lightweight, high-strength materials to minimize added weight while maintaining
  structural rigidity.
* **Flexible Joints:** Incorporate adjustable joints to dynamically modify arm geometry and operational capabilities as
  required by different tasks.

## Botball Applications

Effectively utilized during Botball's 2022 competitions to successfully manipulate Botguy and other objects from
challenging positions. Its ability to both extend reach and fold compactly was crucial for completing complex tasks
within spatial constraints.
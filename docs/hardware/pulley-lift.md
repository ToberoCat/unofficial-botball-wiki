---
id: pulley-lift
title: Pulley Lift
sidebar_label: Pulley Lift
---

![Pulley Lift](/hardware/pulley-lift.jpg)

## Core Idea

A pulley lift consists of a rail-mounted cart that moves linearly, controlled by a string wound around a winch.
Rotational motion from a motor or servo converts directly into precise vertical motion.

## Advantages

* **Precision and Consistency:** Capable of delivering highly accurate vertical positioning with minimal lateral or
  angular deviation, ideal for tasks requiring exact placement or height adjustments.
* **Compact Footprint:** Due to its linear vertical design, it occupies minimal horizontal space, making it suitable for
  constrained environments and corner tasks.
* **Constant Load Management:** The gravitational force acting on the motor or servo remains consistent irrespective of
  the position, which helps reduce wear and tear.

## Disadvantages

* **Limited Vertical Range:** Vertical motion is strictly limited by the physical length of the rail. Thus, it cannot
  reach beyond the robot’s structural height constraints.
* **Gravity-Dependent Descent:** Typically relies on gravity for downward motion, which may result in less controlled
  descents unless additional complexity is introduced.
* **Complex Build Requirements:** Requires careful attention to ensure smooth rail movement with minimal friction. Poor
  design or materials can severely impact performance.
* **Potential String Stretching:** Certain strings, especially elastic types, may introduce inaccuracies due to
  stretching under load.

## Optimal Usage Scenarios

* Precision lifting and dropping of items in tasks requiring meticulous vertical alignment.
* Operations in tight vertical slots or corner areas where horizontal space is at a premium.
* Tasks involving consistent vertical height adjustments, such as placing rings or small objects on poles.

## Quick Build Notes

* **Material Choice:** Opt for low-stretch Dyneema line to minimize inaccuracies due to line stretching.
* **Capstan Radius:** Select the winch radius based on performance requirements:

    * **Smaller Radius:** Enhances lifting precision and increases load capacity but reduces speed.
    * **Larger Radius:** Enhances lifting speed but decreases precision and load capability.
* **Rail and Cart Design:** Ensure the rail and cart interface is smooth and friction-minimized. Use lubricants or
  specialized low-friction materials as needed.

## Enhancements and Variations

* **Powered Descent:** Integrate an additional pulley at the bottom of the rail to enable powered downward movement,
  improving control at the cost of complexity.
* **Rail Variants:** Consider custom track shapes (e.g., curved or multi-directional tracks) for specialized tasks.

## Botball Applications

Used effectively in Botball's GCER tournament (2023) to navigate rings along complex paths with sharp turns and vertical
sections, demonstrating its suitability for precise, vertically-oriented tasks.

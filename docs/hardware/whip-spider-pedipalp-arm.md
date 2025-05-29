---
id: whip-spider-pedipalp-arm
title: Whip-Spider Pedipalp Arm
sidebar\_label: Spider Pedipalp
---

![Whip-Spider Pedipalp Arm Practical](/hardware/whip_spider_pedipalp_arm/practical-usecase.jpg)
![Whip-Spider Pedipalp Arm Sketch](/hardware/whip_spider_pedipalp_arm/sketch.png)

## Core Idea

The whip-spider pedipalp arm mimics the hunting arms of the whip spider (order Amblypygi). Its main feature includes barbed inner joints, ideal for combing, trapping, and holding objects securely.

## Advantages and Use Cases

The whip-spider arm excels in situations requiring secure grip and precise handling of small or irregular objects. Specifically:

* **Pom Collection**: Effectively scoops multiple small objects like pom-poms, minimizing the risk of dropping items.
* **Secure Grasp**: Single-motor drive system locks prey tightly, similar to whip spiders in nature.

## When to Use

This manipulator is ideal when:

* Grabbing a large number of small, soft items securely.
* Firmly locking and handling irregularly shaped objects.
* Minimal motor-driven joints are desired for efficient and cost-effective operation.

## Limitations and Considerations

Be cautious if:

* You haven’t thoroughly simulated the arm’s geometry in CAD. Incorrect geometry can severely reduce functionality.
* Weight management is critical; the design can become unexpectedly heavy, impacting motor selection and mobility.

## Build Recommendations

### Materials

* Use **Technic thin beams** for optimal strength-to-weight ratio.
* Select appropriately sized gears to accurately achieve the desired movement trajectory and joint functionality.

### Design Process

1. **CAD Simulation**: Precisely mock-up the geometry and joint spacing in CAD software to ensure optimal design.
2. **Motor Placement**: Strategically place motors to simplify arm control. A single-motor design controlling multiple joints via gear systems can greatly enhance simplicity and reliability.

### Recommended Mechanisms

* Utilize a **crank and linkage mechanism** to synchronize multiple joint movements from a single motor.
* Ensure gears and arms are sized to create the ideal arm-tip trajectory for maximal efficiency and grip strength.

## Practical Operation

In practical testing (as demonstrated in the Botball competition scenario):

* The manipulator effectively picked up multiple poms, securing them without dropping a single one.
* Barbs and spikes inspired by whip spiders provided additional grip security.

## Detailed Analysis

A comprehensive analysis of the whip spider-inspired manipulator structure and functionality is available in the full paper:

[Download Detailed Paper](/hardware/whip_spider_pedipalp_arm/whip-spider-pedipalp-arm.pdf)

## Future Enhancements

* Experiment with additional motor configurations for even greater adaptability and precision.
* Test different barb and spike designs to further enhance grip capabilities for various tasks.
* Explore weight optimization through advanced materials or design refinements.

By following nature's tested designs, the whip-spider pedipalp arm represents an innovative approach to robotics, blending mechanical simplicity with robust functional capabilities.

<AuthorGrid authors={["tobero"]}/>
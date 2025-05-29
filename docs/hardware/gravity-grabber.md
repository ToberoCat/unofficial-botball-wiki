---
id: gravity-grabber
title: Gravity Grabber
sidebar_label: Gravity Grabber
---

![Gravity Grabber 3D Model](/hardware/gravity_grabber/0.png)

### Resources
- <a href="/hardware/gravity_grabber/designer/">Lego Blueprint</a> for detailed virtual assembly instructions.
- [Paper](/documents/grabbers_and_software_for_botball.pdf) for the original content

## Core Idea

The Gravity Grabber utilizes spring-loaded jaws that snap shut automatically when an object is pressed down into them
from above. This grabber design eliminates the need for servos, making it an efficient, mechanical alternative to
traditional servo-based grabbers.

## Ideal Use Cases

* **Rapid pickups:** Perfect for quickly securing objects like Botguy, especially useful in fast-paced tournament
  environments.
* **Reliability:** Offers a high level of reliability since it doesn't depend on complex control logic or power from
  servos.
* **Servo-less Operation:** Ideal for setups with limited servo availability, as it requires no PWM budget.

## Limitations

Avoid using the Gravity Grabber if:

* **Delicate Releases Required:** The grabber has no active open/close mechanism, so objects requiring gentle placement
  or release are not ideal.
* **Variable Object Sizes:** Limited flexibility in handling objects significantly different in size than intended;
  precise jaw geometry is critical.

## Build Recommendations

To ensure optimal performance:

* **Rubber Band Strength:** Use double rubber bands or stronger variants to increase jaw grip strength. This ensures
  reliable object retention even under motion.
* **Jaw Geometry:** Bevel the tips of the jaws inward slightly. This will help objects such as cubes self-center,
  improving pickup reliability and accuracy.
* **Testing and Adjustment:** Initial CAD simulations are recommended to refine jaw spacing and tension settings. A
  digital preview in tools like LEGO Digital Designer can significantly streamline the development process.

## Dimensions

* **Size:** Approximately 3.1 by 5 inches.
* **Span Length:** Around 4 inches.

## Example Implementations

Below are examples demonstrating the Gravity Grabber in action:

* **Botguy:** Secure and rapid grasp from above, ensuring stable transport without active control.

  ![Gravity Grabber gripping Botguy](/hardware/gravity_grabber/1.jpg)

* **Small Cubes:** Effective at quickly securing cubes, particularly when jaw tips are beveled to assist centering.

  ![Gravity Grabber gripping Cube](/hardware/gravity_grabber/2.jpg)

## Further Development and Customization

This grabber design is highly adaptable:

* **Material Adjustments:** Experimenting with different strengths or lengths of rubber bands can tune gripping force.
* **Jaw Design:** Modifying jaw shape for specialized game elements can optimize performance in specific competitive
  scenarios.

By following these guidelines, you can effectively build and utilize a Gravity Grabber to improve your competitive edge
in Botball tournaments.

<AuthorGrid authors={["tobero"]}/>
---
id: robot-prep-for-regional
title: Preparing for a competition
tags:
  - personal-experience
---

# Robot Preparations for a Regional Competition

Preparing your robot for a regional competition requires more than just ensuring it works well on your game table. The
regional game tables will likely have differences that can affect your robot's performance. Below is a structured guide
to help you understand the challenges and prepare effectively.

## Challenges

Table Dimension Variations: Regional game tables are unlikely to have identical dimensions to your practice table.
This means movements based on hardcoded distances might fail.

## Adapting to Regional Tables

- Use Sensors for Accuracy: Instead of hardcoding distances, incorporate sensors.
  These can adapt to variations and provide more reliable results.
  Refer to the [](../Programming/increasing-robot-accuracy.md)guide for detailed strategies.

- Table-Specific Setup Step: If using sensors isn't possible, consider adding a setup process to measure the table's
  key dimensions.
  Use these measurements to adjust your robot's settings before the run.

### Calculate the table-specific values from a measurement

- Measuring Table Dimensions:
  During setup, identify critical measurements for your robot, such as the distance between two black
  lines or specific landmarks on the table.

- Predicting Servo Positions:
    - Collect data points by measuring distances and the corresponding correct values for servos or sensors.
    - Use this data to estimate a function that predicts servo positions based on the measured lengths.
      Predicting a function is the hardest part, as it requires some math knowledge.
    - This ensures accurate adjustments for different table dimensions.

## Additional Setup Tips

1. Light Sensor Calibration: Ensure light sensors are calibrated to the lighting conditions of the venue.
   You can for example write a automated calibration step for this.
2. Separate Programs for Setup and Run: Create a dedicated setup program to automate tasks in the setup stage of your
   run and calibration.
   This reduces human error and saves time.
3. Consistent Placement: Use templates made from LEGO or wood to position your robot or game pieces consistently on
   the table.
4. Sensor Connection Check: Include a program to verify that all sensors are properly connected.
   This avoids failed runs caused by disconnected cables. Ideally, use lego and cable management zip ties / twist ties
   to lock them in place.
5. Have a checklist with you. Make the checklist as fool prove as possible because under pressure, you'll forget
   something for sure. Make sure you train yourself to use the checklist, else it's useless.
6. Have the game review and build document with you. This can help when you have to argue (politely) with a judge about
   certain placements

## Preparation Specific

When it comes to preparing for a regional competition, it's best to run your robots on teh same game table side, always.
This is a good practice, as you can see where your robots fail and develop adequate counter measurements. For example,
if a robot gets stuck somewhere, make sure to use kill timers, that just disable the robot if it doesnt pass a certain
checkpoint by some time.

Also try to replicate competition like settings - Start a timer and check if you can complete your setup in the given
time limit. Make sure you have enough time after setup, to cehck the gametable setup.

Dont touch your robots mid run - Watch what they do, think of things you can do to prevent it, even when everything fails

## Conclusion

Proper preparation for a regional competition involves more than just practicing on your home table.
By accounting for table variations,
using sensors, and automating setup processes, you can significantly improve your robot's performance.

<AuthorGrid authors={["tobero"]}/>
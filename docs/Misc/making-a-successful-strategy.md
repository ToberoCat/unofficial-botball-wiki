---
id: making-a-strategy
title: Making a successful strategy
tags:
  - personal-experience
---

# Making a Successful Strategy

> This guide might not be the definitive guide to creating a successful strategy,
> but it helped my team reach fourth place at the 2024 GCER.
> It heavily relies on my personal experience and that of my team.

## Why is Strategy Important?

Strategy is crucial in Botball because it determines how you approach the game and what you aim to achieve. A good
strategy can help you maximize your score, make the most of your resources, and ensure that your robot performs well
during the competition. Without a strategy, you risk wasting time and effort on tasks that don’t contribute to your
overall goal.

## What makes a good strategy?

A good strategy isn’t just about how many points you score at the end of a competition. It’s also about how well you use
the resources you have, how much time you have to prepare, and the team you’re working with, both in terms of experience
and size.

For example, if you have a team of six experienced people and three months to prepare, you can aim for a high-scoring
run. But if your team has only two people who are less experienced, it’s better to aim for a run that’s easier to
execute and has high accuracy. In this case, consistently scoring 50 points is already a success.

## Accuracy Over Points

In my experience, it’s better to aim for a strategy that’s reliable in scoring the points you plan for, rather than
going for a high-scoring strategy that isn’t reliable. A dependable robot is much easier and less stressful to work with
during a competition than one that can score a lot of points but might fail when it counts.

Let me give you an example from GCER 2024. My team had a strategy that could score 2,700 points in theory, but at the
competition, we only managed to score 1,100 points. The issue was that our high-scoring strategy wasn’t reliable. Even a
small mistake cost us a lot of points, and unfortunately, our robot made more than one mistake. The reason we ended up
in fourth place wasn’t because we could achieve a 2,700-point run, but because we were able to consistently score around
1,100 points.

This experience taught me that being able to consistently achieve a lower, but reliable score is often more valuable
than risking everything for a higher, but unpredictable score. As a side note, the reliability of our robot made GCER
much more enjoyable for us, as we didn’t have to worry about our robot failing during the competition.

## Creating the Initial Strategy

### Step 1: Setting Team Goals and Time Commitments

The day before the game review was released, my team and I had a Discord call to discuss our goals for the year and how
much time each of us could commit to the project. To clarify, we were all students, and Botball wasn’t a school
subject—we had to work on it over the weekends.

### Step 2: Reviewing the Game and Scoring Rules

With a general idea of what we wanted to achieve, we started looking at the game review as soon as it was released. We
studied the scoresheet and the game table, trying to identify which areas could score the most points. At this stage, we
weren’t thinking about what our team could realistically do, but rather about what was possible. We asked ourselves
questions like:

- “What can be done?”
- “Which items score well together?”

At this point, we weren’t worrying about risks or how the robot would accomplish specific tasks. This approach is
important because it helps you understand what the game allows and what other teams might also be aiming for. We also
asked questions to the KIPR staff to clarify the scoring rules. This whole process took us about 3-4 hours of
discussions and questions.

### Step 3: Brainstorming Possible Strategies

Once we had a solid understanding of what was possible in the game, we started brainstorming what our robot should be
able to do. We used a whiteboard session (in our case, the free tool [excalidraw.com](https://excalidraw.com/)) to
sketch out possible mechanisms, our robot design, and the tasks we wanted to accomplish. We also discussed the order in
which the tasks should be done and how the robot should be built to handle them. We even took a closer look at the new
Create3 robot to see how we could use it.

![Whiteboard Brainstorm Session](/img/2024-botball-strategy-brainstorm.png)

> Here’s a picture of our whiteboard. I recommend opening it in a new tab to see it in full resolution.

As you can see in the picture, we mapped out the driving paths for the robot on the game table and sketched possible
mechanisms, like a pom sorting system and a creative astronaut pickup mechanism. We also drew some robot designs,
although we didn’t end up using all of them. The image also includes some features of the Create3 robot and screenshots
of our Excel scoring sheet.

### Examples of Other Strategies

To give you a broader perspective, consider how other teams might approach the same challenge:

- **Team A** might focus on fewer, high-point tasks, ensuring they can execute them flawlessly.
- **Team B** might aim for a balanced strategy, completing a wide range of tasks to maximize their overall score.

Both approaches can be successful, depending on the team's strengths and available resources.

## Refining the Strategy

After the brainstorming session, we had an initial idea of what our robot should be able to do. The next steps were a
bit more diverged between the team members. Some of us started to build our concept robot, while others experimented
with the Create3 robot, and others tried to come up with more detailed movement strategies for the robot.

To focus on the refinement part of the strategy, I will talk about the movement strategy. When you want your robot to be
moving accurately on the game table, there's a simple rule you should follow: **The robot should always know where it is
**.
This concept is described in more detail in the [Increasing Robot Accuracy](../Programming/increasing-robot-accuracy.md) guide.
Essentially, this refinement step is about implementing the different methods to ensure the robot knows its x and y
position introduced in the guide.

![Refinement of the Strategy](/img/2024-botball-strategy-refinement.png)

In this picture, you can see how we refined our strategy. We used the whiteboard to sketch out the different methods we
wanted to implement to ensure the robot knew its x and y position. The orange-pink lines represent the robot’s driving
path. The blue solid lines show where we wanted the robot to do line-ups, the blue dotted represents where we use the
distance sensor to drive our robot till it sees a certain distance, and the green dotted lines represent where we
wanted to drive with back-EMF.

By the end of the refinement phase, we had a plan where we marked where we want the robot to do line-ups,
line-following, etc.

### Adapting and Learning from Mistakes

It’s important to understand that even the best-laid plans can go awry. During the competition, we had to change our
plan multiple times because we realized that some parts weren’t working as expected. Don’t worry about having a perfect
plan from the start. It’s more important to have a plan that you can improve on later. Being adaptable and willing to
learn from mistakes is key to success.

## Conclusion and Feedback

This guide is meant to help develop a successful strategy based on my (& my teams) experiences. Remember, strategy is
about balancing your team’s capabilities with the goals you want to achieve. Consistency, adaptability, and a solid
understanding of the game are more valuable than aiming for an impossibly high score that you might not achieve.

<AuthorGrid authors={["tobero"]}/>
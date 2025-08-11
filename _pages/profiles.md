---
layout: profiles
permalink: /people/
title: students
description: members of the research group
nav: true
nav_order: 7


profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: prof_pic.jpg
    content: about_einstein.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>
  - align: left
    image: prof_pic.jpg
    content: about_einstein.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>555 your office number</p>
      <p>123 your address street</p>
      <p>Your City, State 12345</p>

students:
  bachelor:
    - name: Alice Smith
      year: 2023
      thesis: "Multi-armed Bandits in Healthcare"
    - name: Bob Johnson
      year: 2024
      thesis: "Reinforcement Learning Basics"

  master:
    - name: Carol Lee
      year: 2022
      thesis: "Advanced Bandit Algorithms"
    - name: David Kim
      year: 2023
      thesis: "Applications in Finance"

  phd:
    - name: Eva Martinez
      start_year: 2020
      dissertation: "Game-Theoretic Approaches to Bandits"
    - name: Frank Chen
      start_year: 2021
      dissertation: "Bayesian Methods for RL"
      
---

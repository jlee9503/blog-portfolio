---
title: "Fitness Tracker Data Analysis"
date: "February 26, 2025"
slug: "fitness-tracker-dashboard"
imgUrl: "/images/fitness.jpg"
tags: [MS Excel, Condition Formatting, Aggregate Functions, Pivot Table, Data Dashboard]
---

## 1. Project Overview
The purpose of this project is to analyze the correlations among key workout metrics, including workout duration, calories burned, heart rate, and workout intensity. The data dashboard, featuring key performance indicators (KPIs), enables users and stakeholders to easily assess workout performance and track health and fitness trends.

## 2. Dataset Description
- **Dataset:** `workout_fitness_tracker_data.xlsx`
- **Key Features:**
  - `Gender`: Male, Female, or Other
  - `Age`: Age of users
  - `Workout Type`: Type of workout (Cardio, Cycling, Running, HIIT, Strength, Yoga)
  - `Workout Duration`: Total time spent in workout (in mins)
  - `Calories Burned`: Total calories burned during workout
  - `Heart Rate`: Average heart rate during the workout (bpm)
  - `Stpes Taken`: Number of steps recorded (for walking/running)
  - `Workout Intensity`: Low, Medium, High
  - `Sleep Hours`: Hours of sleep before workout
  - `Mood Before Workout`: Mood before the workout (Happy, neutral, tired, stressed)
  - `Mood After Workout`: Mood after the workout (Energized, neutral, fatigued)

## 3. Problem Statement
Tracking workout performance and identifying key factors are essential for predicting workout efficiency and establishing sustainable fitness habits. Additionally, this analysis provides data-driven insights into fitness patterns, helping to optimize training plans and assess health correlations.

## 4. Data Preparation
- Clean the data (remove duplicates, handle missing values)
- Structure the data into tables to enable easier analysis

## 5. Exploratory Data Analysis (EDA)
- Excel formulas (SUM, AVG, COUNTIFS)
- PivotTables
  - Summarize data dynamically
  - Charts to represent KPIs and correlation
    - Workout type vs. Average calories burned (Bar chart)
    - Average steps taken by age group (Line chart)
    - Workout Duration vs. Average heart rate (Scatter plot)
    - Distribution of workout intensity (Pie chart)

## 6. Design the Data Dashboard
#### Dashboard:
  ![fitness tracker dashbaord](https://raw.githubusercontent.com/jlee9503/excel-projects/main/fitness_tracker_analysis/fitness_tracker_dashboard.png)

#### Key Metrics:
  - Average calories burned: **552.1 cals**
  - Average heart rate: **129.5 bpm**
  - Average steps taken: **10,455 steps**
  - Average sleep hours: **6.98 hours**

#### Interactivity:
  - Slicers for dynamic filtering
    - Gender
    - Age group
    - Workout intensity

## 7. Technologies & Tools Used
- **MS Excel**
  - Excel table
  - Aggregate functions (SUM, AVG, COUNT)
  - PivotTables
  - Visualizations (charts and dashboard)
  - Slicers for dynamic filtering

## 8. Code Reference
- [See full dataset & Excel Dashboard](https://github.com/jlee9503/excel-projects/tree/main/fitness_tracker_analysis)
- Clone this repository:
   ```bash
   git clone https://github.com/jlee9503/excel-projects.git
   cd fitness_tracker_analysis
   ```
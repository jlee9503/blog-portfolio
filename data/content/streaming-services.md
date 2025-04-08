---
title: "Streaming Service Analysis"
date: "November 13, 2024"
slug: "streaming-services"
imgUrl: "/images/streaming-services.jpg"
tags: [R, ggplot2, Linear Regression]
---

## 1. Project Overview
This project aims to develop proficiency in R programming and enhance data analysis skills using data from four major streaming services. The analysis involves data cleaning, exploratory data analysis (EDA), and linear regression modeling to uncover trends and patterns in movie and TV show data. Additionally, it examines the correlation between release year and the duration of movies and TV shows.

## 2. Dataset Description
- **Dataset:** `netflix_titles.csv`, `amazon_prime_titles.csv`, `disney_plus_titles.csv`, `hulu_titles.csv`
- **Key Features:**
  - `show_id`: Unique ID for each movie or TV show
  - `type`: Type of show (movie or TV Show)
  - `title`: Title of the movie or TV Show
  - `platform`: Name of streaming service platform
  - `rating`: TV Rating of the movie/show
  - `release_year`: Actual release year of the movie/show
  - `country`: Country where movie/TV Show was produced
  - `director`: Director of the movie
  - `listed_in`: Genre of the movie/TV Show
  - `duration`: Total duration time in minutes or number of seasons

## 3. Data Exploration & Cleaning
- Handle missing values: Replace null values to "Not Available"
- Rename inconsistent naming for better understanding: 
  - Replace column name: "listed_in" → "genre"
  - Replace values in "rating" column:
    - (min, Season, Seasons) -> 'Invalid'
    - (NOT_RATE, NOT RATED, UNRATED, NR) -> 'NOT RATED(NR)'
    - (UR, UNRATED) -> 'UNRATED(NR)'
    - (ALL_AGES) -> 'ALL'
    - (7+) -> 'AGES_7+'
    - (13+) -> 'AGES_13+'
    - (AGES_16_, 16, 16+) -> 'AGES_16+'
    - (AGES_18_, 18, 18+) -> 'AGES_18+'

    - Code:
      ```
      # Replace inconsistent/awkward namings
      data_df$rating <- gsub(".*(min|Season|Seasons).*", "Invalid", data_df$rating)
      data_df$rating <- gsub(".*(NOT_RATE|NOT RATED|NR).*", "NOT RATED(NR)", data_df$rating)
      data_df$rating <- gsub(".*(UR|UNRATED).*", "UNRATED(UR)", data_df$rating)
      data_df$rating <- gsub("ALL_AGES", "ALL", data_df$rating)
      data_df$rating <- gsub(".*(7).*", "AGES 7+", data_df$rating)
      data_df$rating <- gsub(".*(13).*", "AGES 13+", data_df$rating)
      data_df$rating <- gsub(".*(16).*", "AGES 16+", data_df$rating)
      data_df$rating <- gsub(".*(18).*", "AGES 18+", data_df$rating)

      # Check values again
      unique_values <- data_df %>% distinct(rating)
      print(unique_values)
      ```


## 5. Exploratory Data Analysis (EDA)
- Distribution of platform (Netflix, Amazon Prime, Disney Plus, Hulu)
  ![Platform Distribution Pie chart](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/platform-distribution.png)
- Distribution of content type (Movie or TV Show)
  ![Type distribution bar chart](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/content-type-distribution.png)
- Identify rating distribution
  ![Rating distribution bar chart](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/rating-distribution.png)
- Identify release trend over the years
  ![Release year chart](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/show-releases.png)
- Top 10 producing countries
  ![Top 10 producing countries bar chart](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/top10-countries.png)

## 6. Model Development

  - **Null Hypothesis (H_0):** There is no significant relationship between a movie’s release year and its duration, indicating that runtime is not correlated with time.
  - **Alternative Hypothesis (H_1):** There is a significant relationship between a movie’s release year and its duration, suggesting that runtime is correlated with time.

  - Variables:
    - Target: `duration`
    - Predictor: `release_year`

  - Handle Outliers:
    ![Box plot for movie duration](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/outliers.png)

    - Remove the duration over 200 mins
      ```
      movie_durations_filtered_df <- movie_durations_formatted_df %>% filter(duration <= 200)
      ```

  #### Key Metrics:
    ```
    y <- movie_durations_filtered_df$duration      # target
    x <- movie_durations_filtered_df$release_year  # predictor
    cor(x, y, method = "pearson")
    ```
    - Correlation: **0.0128**
      - Since the correlation value very close to 0, it shows that the relationship level between target and predictor is very weak. It indicates that there is no relationship between "duration" and "release_year".

  #### Linear Regression Model:
    - Result:
      ![Linear Regression model result](https://raw.githubusercontent.com/jlee9503/streaming-services-analysis/main/images/model-result.png)

    - **P-value:** 0.106
      - Greater than the significant level of 0.05 (0.106 > 0.05)
      - No significance indicated
    - **Residual Standard Error (RSE):** 30.88
      - The regression model predicts the movie running time with an average error of 30.88 minutes.

## 7. Key Findings
- Regression Equation: **duration = 46.815 + 0.023*(release_year)**
  - 

## 8. Limitations & Recommendations
### Limitations:
- Logistic regression assumes a linear relationship between predictors and the log-odds of churn, which may not capture complex patterns.
- The pseudo R-squared value (0.6126) suggests room for model improvement.

### Recommendations:
- Implement customer retention strategies based on significant predictors.
- Explore advanced machine learning models such as decision trees or Support Vector Machine (SVM).
- Consider additional evaluation metrics beyond pseudo-R-squared.

## 9. Technologies & Tools Used
- **R Programming** (ggplot2)

## 10. Code Reference
- [See full codes & visualizations](https://www.kaggle.com/code/jl0331/streaming-services-analysis)
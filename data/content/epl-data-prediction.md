---
title: "English Premier League (EPL) Prediction"
date: "September 7, 2024"
slug: "epl-data-prediction"
imgUrl: "/images/epl.jpg"
tags: [BeautifulSoup, Pandas, Scikit-learn, Random Forest Classifier]
---

## 1. Project Overview
-	This project aims to predict the outcomes of each football match in the English Premier League (EPL) for the 2023-24 season using data from the 2022-23 season. The predicted results will be compared with actual match outcomes to assess the accuracy and precision of the predictions.

## 2. Web Scraping
- Web scraping is a powerful technique to extract data from websites, which is useful for analyzing trends and performance metrics. In this post, I will show you how to scrape Premier League match statistics from [FBref](https://fbref.com/en/comps/9/2022-2023/2022-2023-Premier-League-Stats) using Python.

- Libraries Used:
  - `requests` --> fetch web pages
  - `BeautifulSoup` --> parse HTML content
  - `pandas` --> handle tabular data
  - `time` --> control request intervals

- Essential Steps:
  1. Define the Season and Number of Seasons to scrape
    - `num_of_seasons`: Number of seasons to scrape
    - `season_begin_year`: The starting season year
      ```
      num_of_seasons = 2
      season_begin_year = 2022
      all_matches = []
      ```
  2. Scraping the Team Standings and Match Data
    - Iterate over the selected seasons and generate the standings URL dynamically
      ```
      standings_url = f"https://fbref.com/en/comps/9/{season_begin_year}-{season_end_year}/{season_begin_year}-{season_end_year}-Premier-League-Stats"
      ```
    - Use `request.get()` to fetch the page and extract the table of teams using `BeautifulSoup`
      ```
      data = requests.get(standings_url)
      soup = BeautifulSoup(data.text, "html.parser")
      standings_table = soup.select('table.stats_table')[0]
      ```
    - Each teams' information page is extracted from the links within the table
      ```
      all_links = [l.get('href') for l in standings_table.find_all('a')]
      team_links = [l for l in all_links if '/squads/' in l]
      team_urls = [f'https://fbref.com{l}' for l in team_links]
      ```
  3. Extract Match Data and Shooting Statistics
    - For each team, we fetch match details using `pandas.read_html()`
      ```
      matches = pd.read_html(StringIO(data.text), match="Scores & Fixtures")[0]
      ```
    - Also extract shooting statistics
      ```
      shooting_links = [l for l in links if l and 'all_comps/shooting/' in l]
      shooting_data = requests.get(f"https://fbref.com{shooting_links[0]}")
      shooting = pd.read_html(StringIO(shooting_data.text), match="Shooting")[0]
      ```
  4. Rate limiting to prevent blocks
    - To avoid getting blocked by the website, we implement a 10-second delay after every request
      ```
      time.sleep(10)
      ```
  5. Save the scraped data
  - After scraping all teams, we combine the data into a Pandas dataframe
    ```
    match_df = pd.concat(all_matches)
    ```
  - Save the dataset as a CSV file for the analysis
    ```
    match_df.to_csv("premier_league_data.csv", index=False)
    ```

- [See full scraping code](https://github.com/jlee9503/epl_data_prediction/blob/main/data_scraping.ipynb)

## 3. Dataset Description
- **Dataset:** `epl_matchData_22_24.csv`
- **Key Features:**
  - `Date`: match date (YYYY-MM-DD)
  - `Day`: match day of week
  - `Time`: match time (HH:MM)
  - `Venue`: Home or Away
  - `xG`: Expected Goals
  - `xGA`: Expected Goals Allowed
  - `Sh`: Total shots
  - `SoT`: Shots on target
  - `Fk`: Shots from free kicks
  - `Pk`: Penalty kicks made
  - `Result`: Win, Lose or Draw
  - `Team`: Name of club

## 4. Data Cleaning & Preprocessing
- Load scraped dataset
  ```
  import os
  import pandas as pd

  curr_dir = os.getcwd()
  file_name = "eql_matchData_22_24.csv"
  file_path = os.path.join(curr_dir, file_name)

  # Load Data file
  epl_df = pd.read_csv(file_path, index_col=0)
  ```
- Drop columns that will not be used in this analysis
  ```
  epl_df.drop(['Formation', 'Opp Formation', 'Match Report', 'Notes'], axis=1, inplace=True)
  ```
- Convert date string (YYYY-MM-DD) to datetime format
  ```
  epl_df['Date'] = pd.to_datetime(epl_df['Date'])
  ```
- Encode categorical data into numeric format
  - Venue (Home = 1, Away = 0)
  - Opponent (Team name) --> Assign unique numeric code for each team
  - Time (Hour only) --> HH:MM format to HH only
  - Day of week --> Add `day_code` column to save numeric code for each day of week
  - Result (Win, Drow or Lose) --> Add `Target` column for match result code (Win = 2, Draw = 1, Lose = 0)
  - season --> Add `season_num` column to save numeric code for seasons (e.g. first season=1, second season=2)
    ```
    epl_df["Venue_code"] = epl_df["Venue"].astype("category").cat.codes
    epl_df["Opp_code"] = epl_df["Opponent"].astype("category").cat.codes
    epl_df["hour"] = epl_df["Time"].str.replace(":.+", "", regex=True).astype("int")
    epl_df["day_code"] = epl_df["Date"].dt.dayofweek
    epl_df["Target"] = epl_df["Result"].apply(lambda x: 2 if x == 'W' else (1 if x == 'D' else 0)).astype("int")
    epl_df["Season_num"] = epl_df["Season"].apply(lambda x: 1 if x == '2022-2023' else 2)
    ```

## 5. Model Development
#### Random Forest Classifier:
  - Variables:
    - Dependent: `Target` (Numeric code of match result)
    - Independent: `Venue_code`, `Opp_code`, `hour`, `day_code`
  - Split dataset:
    - Train data: 2022-23 season (`Season_num`=1)
    - Test data: 2023-24 season (`Season_num`=2)
  - Model Prediction with selected parameters:
    ```
    predictors = ["Venue_code", "Opp_code", "hour", "day_code"]

    train_data = epl_df[epl_df["Season_num"] == 1]
    test_data = epl_df[epl_df["Season_num"] == 2]

    rf = RandomForestClassifier(n_estimators=100, min_samples_split=10, random_state=42)
    rf.fit(train_data[predictors], train_data["Target"])
    ```

#### Performance Metrics:
  - Accuracy: **0.43 ≃ 43%**
    - The model correctly classifies about 43% of the match results
  - Precision: **0.39 ≃ 39%**
    - A precision of 39% means that out of all match results, about 39% actually did win, draw or lose, while the remaining 61% were misclassified.

## 6. Limitations & Recommendations
#### Limitations:
- Insufficent features
  - The model may not have strong predictive features
  - Basic match stats may not capture momentum, injuries, player form or tactical changes
- Feature selection
  - Some features may be highly correlated, reducing model performance
  - Too many irrelevant feature can lead to overfitting
- Model Hyperparameter tuning
  - Random forest parameters used in this analysis may not be optimized
#### Recommendations:
-	Low accuracy (43%) and low precision (39%) suggest the model struggles to capture meaningful insights. To improve the prediction result, we should consider feature engineering, data balancing, hyperparameter tuning, or even trying to use different models.

## 7. Technologies & Tools Used
- Jupyter Notebook
- Python (pandas, requests, BeautifulSoup, scikit-learn)

## 8. Code Reference
- [See full analysis](https://github.com/jlee9503/epl_data_prediction/blob/main/prediction.ipynb)
- Clone this repository:
   ```bash
   git clone https://github.com/jlee9503/epl_data_prediction.git
   ```

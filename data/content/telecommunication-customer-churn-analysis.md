---
title: "Telecommunication Customer Churn Analysis"
date: "November 5, 2024"
slug: "telecommunication-customer-churn-analysis"
imgUrl: "/images/churn.jpg"
tags: [Pandas, NumPy, Scikit-learn, Statsmodels, Matplotlib, Seaborn]
---

## 1. Project Overview
This project aims to analyze customer churn in a telecommunications company to identify key factors influencing churn and provide actionable insights for improving customer retention.

## 2. Dataset Description
- **Dataset:** `churn_clean.csv`
- **Key Features:**
  - `Gender`: Male, Female, or Nonbinary
  - `Tenure`: Number of months the customer has stayed with the provider
  - `Techie`: Whether the customer considers themselves technically inclined
  - `Multiple`: Whether the customer has multiple lines
  - `OnlineBackup`: Whether the customer uses an online backup add-on
  - `TechSupport`: Whether the customer uses a technical support service
  - `StreamingTV`: Whether the customer has a TV streaming add-on
  - `StreamingMovies`: Whether the customer has a movie streaming add-on
  - `InternetService`: Customer's internet service provider
  - `Contract`: Contract term of the customer
  - `PaymentMethod`: Customer's payment method

## 3. Problem Statement
Customer churn significantly impacts revenue. Understanding key factors and identifying high-risk segments allows businesses to proactively address customer needs, improve services, and enhance long-term growth.

## 4. Data Cleaning & Preprocessing
- Handle missing values and duplicates
- Identify outliers
- Encode categorical variables

## 5. Exploratory Data Analysis (EDA)
- Univariate analysis (distribution of each variable)
- Bivariate analysis (relationship between churn and predictors)

## 6. Model Development
### Machine Learning Model: 

  - Final Logistic Regression Model:
  ![Logistic Regression Model](https://raw.githubusercontent.com/jlee9503/telecommunication-churn/main/images/reduced-logistic-model.png)

  - Model Evaluation Metrics:
    - Pseudo R-squared: **0.6126**
    - Log-likelihood: **-1671.6**
    - LLR P-value: **0.000**

### Confusion Matrix:
![Confusion Matrix](https://raw.githubusercontent.com/jlee9503/telecommunication-churn/main/images/confusion_matrix.png)

#### Matrix Interpretation:
  - True Positive (TP): **547**
  - True Negative (TN): **1702**
  - False Postive (FP): **114**
  - False Negative (FN): **137**

#### Performance Metrics:
  - Accuracy: **0.8996 ≃ 90%**
    - The model correctly classifies about 90% of the total cases (both churn and non-churn)
  - Precision: **0.8275 ≃ 83%**
    - A precision of 82.75% means that out of all customers predicted to churn, about 83% actually did churn, while the remaining 17% were misclassified as churn when they actually didn’t.
  - Recall: **0.7997 ≃ 80%**
    - The model correctly identifies about 80% of actual customers churned. However, approximately 20% of actual churners are missed (false negatives), meaning they churned but were not flagged.
  - F1 Score: **0.8133 ≃ 81%**
    - A score of 81.33% suggests that your model has a good trade-off between capturing true churn cases (recall) and minimizing false positives (precision).


## 7. Key Findings
#### Regression Equation:
```
log(P(Churn=Yes) / P(Churn=No)) =
-1.796 + 1.1956(Techie_Yes) + 1.6557(Multiple_Yes) + 0.7888(OnlineBackup_Yes) 
+ 0.1902(TechSupport_Yes) + 3.0377(StreamingTV_Yes) + 3.4977(StreamingMovies_Yes) 
+ 0.2438(Gender_Male) - 3.3676(Contract_One_Year) - 3.4149(Contract_Two_Year) 
- 1.3373(InternetService_Fiber Optic) - 1.3819(Internet_No Service) 
+ 0.4883(PaymentMethod_Electronic Check) - 0.11(Tenure)
```

#### Interpretation of coefficients:
  - **Constant** = -1.796
    - Odds ratio: e^(-1.796) ≈ 0.17
    - The baseline odds of churn is approximately 0.17 when all predictors are constant.
  - **Techie_Yes** = 1.1956
    - Odds ratio: e^1.1956 ≈ 3.30
    - Change in odds ratio: (3.3 – 1) x 100% = 230% increase
    - Techie customers are **3.3 times more** likely to churn than non-techie customers
  - **Multiple_Yes** = 1.6557
    - Odds ratio: e^1.6557 ≈ 5.24
    - Change in odds ratio: (5.24 – 1) x 100% = 424% increase
    - Customers using multiple lines are **5.24 times more** likely to churn than those who do not have multiple lines.
  - **OnlineBackup_Yes** = 0.7888
    - Odds ratio: e^0.7888 ≈ 2.20
    - Change in odds ratio: (2.2 – 1) x 100% = 120% increase
    - Customers using an online backup service are **2.2 times more** likely to churn than those who are not.
  - **TechSupport_Yes** = 0.1902
    - Odds ratio: e^0.1902 ≈ 1.21
    - Change in odds ratio: (1.21 – 1) x 100% = 21% increase
    - Having tech support services **increases the odds of churn by about 21%** compared to those without tech support.
  - **StreamingTV_Yes** = 3.0377
    - Odds ratio: e^3.0377 ≈ 20.85
    - Change in odds ratio: (20.85 – 1) x 100% = 1985% increase
    - Customers using Streaming TV services are **20.85 times more** likely to churn than those who are not.
  - **StreamingMovies_Yes** = 3.4977
    - Odds ratio: e^3.4977 ≈ 32.99
    - Change in odds ratio: (32.99 – 1) x 100% = 3199% increase
    - Customers using Streaming Movie services are **32.99 times more** likely to churn compared to those who are not.
  - **Gender_Male** = 0.2438
    - Odds ratio: e^0.2438 ≈ 1.28
    - Change in odds ratio: (1.28 – 1) x 100% = 28% increase
    - Male customers have **28% higher odds of churn** compared to those who are not male.
  - **Contract_One year** = -3.3676
    - Odds ratio: e^(-3.3676) ≈ 0.034
    - Change in odds ratio: (0.034 – 1) x 100% = 96.6% decrease
    - A one-year contract causes **a reduction of 96.6% in the odds of churning** compared to having a month-to-month contract.
  - **Contract_Two year** = -3.4149
    - Odds ratio: e^(-3.4149) ≈ 0.033
    - Change in odds ratio: (0.033 – 1) x 100% = 96.7% decrease
    - A two-year contract causes **a reduction of 96.7% in the odds of churning** compared to a month-to-month contract.
  - **InternetService_Fiber Optic** = -1.3373
    - Odds ratio: e^(-1.3373) ≈ 0.26
    - Change in odds ratio: (0.26 – 1) x 100% = 74% decrease
    - Using Fiber optic internet causes **a reduction of 74% in the odds of churning** compared to using DSL.
  - **InternetService_No service** = -1.3819
    - Odds ratio: e^(-1.3819) ≈ 0.25
    - Change in odds ratio: (0.25 – 1) x 100% = 75% decrease
    - The odds of churning **decrease by approximately 75%** for customers who do not use internet service, compared to those who do.
  - **PaymentMethod_Electronic Check** = 0.4883
    - Odds ratio: e^0.4883 ≈ 1.63
    - Change in odds ratio: (1.63 – 1) x 100% = 63% increase
    - Customers who pay by electronic check are **1.63 times more** likely to churn than those using other payment methods.
  - **Tenure** = -0.11
    - Odds ratio: e^(-0.11) ≈ 0.90
    - Change in odds ratio: (0.9 – 1) x 100% = 10% decrease
    - For each additional month, **the odds of churn decrease by about 10%**.

## 8. Limitations & Recommendations
#### Limitations:
- Logistic regression assumes a linear relationship between predictors and the log-odds of churn, which may not capture complex patterns.
- The pseudo R-squared value (0.6126) suggests room for model improvement.

#### Recommendations:
- Implement customer retention strategies based on significant predictors.
- Explore advanced machine learning models such as decision trees or Support Vector Machine (SVM).
- Consider additional evaluation metrics beyond pseudo-R-squared.

## 9. Technologies & Tools Used
- **Python** (Pandas, NumPy, Scikit-learn, Statsmodels, Matplotlib, Seaborn)
- **Jupyter Notebook**

## 10. Code Reference
- [See full codes & visualizations](https://github.com/jlee9503/telecommunication-churn/blob/main/notebooks/churn_analysis.ipynb)
- Clone this repository:
   ```bash
   git clone https://github.com/jlee9503/telecommunication-churn.git
   cd telecommunication-churn
   ```
---
title: "Medical Admission Analysis"
date: "January 29, 2025"
slug: "medical-admission-analytics"
imgUrl: "/images/medical-admission.jpg"
tags: [Pandas, Scikit-learn, Random Forest, Tableau Dashboard]
---

## 1. Project Overview
-	The goal of this analysis is to predict the new patient’s average daily charges and the total base hospital charges by identifying attributes strongly correlated with the ‘TotalCharge’ variable, which represents the amount charged to patients daily in the dataset. In the real world, these insights can benefit both hospitals and patients. Hospitals can improve cost management by finding key factors (e.g. demographic information, medical conditions, services received while hospitalized) driving patient charges and implementing transparent billing policies with information from the analysis. Additionally, patients can benefit from receiving more accurate estimated charges before admission, enabling better financial planning.

## 2. Dataset Description
- **Dataset:** `medical_clean.csv`
- **Key Features:**
  - Demographic Info: *Area, Age, Income, Gender*
  - Medical Conditions: *HighBlood, Stroke, Complication_risk, Overweight, Arthritis, Diabetes, Hyperlipidemia, BackPain, Anxiety, Allergic_rhinitis, Reflux_esophagitis, Asthma*
  - Others: *Doc_visits, VitD_supp, Initial_admin, Services, Initial_days*

## 3. Problem Statement
In the medical industry, readmission of patients is such a problem that an external organization penalizes hospitals for excessive readmissions. 

## 4. Data Cleaning & Preprocessing
- Identify data types, null values, and inconsistent naming
- Descriptive Statistics
	- Identify outliers for numerical variables (boxplot)
	- Summary statistics (mean, standard deviation, Min/Max)
	- Data distribution (histogram, bar chart)

  #### Feature Engineering
  - One-Hot Encoding
    - Encode categorical features into numeric format
  - SelectKBest
    - Identify feature scores
    - Select relevant features to the target variable (TotalCharge)
      - Features with score > 0 were selected for the model training:

        Age = 0.004

        Doc_visits = 0.007

        Initial_days = 1.535

        HighBlood_Yes = 0.011

        Arthritis_Yes = 0.002

        Diabetes_Yes = 0.008

        Hyperlipidemia_Yes = 0.009

        Anxiety_Yes = 0.013

        Complication_risk_High = 0.045

        Complication_risk_Low = 0.005

        Complication_risk_Medium = 0.021

        Initial_admin_Elective Admission = 0.031

        Initial_admin_Emergency Admission = 0.105

        Initial_admin_Observation Admission = 0.039

        Services_MRI = 0.001

## 6. Model Development
#### Random Forest Regression:
  - Hyperparameter tuning using `GridSearchCV`
    - Best Parameters: **{'max_depth': 30, 'max_features': None, 'min_samples_leaf': 2, 'min_samples_split': 2, 'n_estimators': 400}**
    - Best Estimator: **RandomForestRegressor(max_depth=30, max_features=None, min_samples_leaf=2, n_estimators=400)**
    - Best score: **-6957.758**

    - Mean Squared Error (MSE) vs. Parameter Combinations
      ![Parameter distribution](https://raw.githubusercontent.com/jlee9503/medical-readmission/main/images/parameter-distribution.png)

  - Model Prediction with Optimal parameters:
    ```
    # Initiate the model
    rf_improved = RandomForestRegressor(max_depth=30, max_features=None, min_samples_leaf=2, n_estimators=400, random_state=42)

    # Train the regressor
    rf_improved.fit(X_train, y_train)

    # Make predictions on test set
    y_pred = rf_improved.predict(X_test)

    # Calculate metrics
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)

    print(f'Mean Squared Error (MSE): {np.round(mse, 4)}')
    print(f'Root Mean Squared Error (RMSE): {np.round(rmse, 4)}')
    print(f'R-Squared: {np.round(r2, 4)}')
    ```

#### Key Metrics:
  - Mean Squared Error (MSE) = **6871.9916**
    - Squared dollars ($^2) of the original measurement (dollars $).
    - Average squared difference between the predicted and actual values. 
  - Root Mean Squared Error (RMSE) = **82.8975**
    - The model prediction has the average error of around $82.90 from the actual daily total charge.
  - R-Squared: **0.9985**
    - The model covers pproximately 99.85% of the variance in the target variable, indicating an excellent fit.

#### Feature Importance:
![feature importance bar chart](https://raw.githubusercontent.com/jlee9503/medical-readmission/main/images/feature-importance.png)
- Identify features which have a significant contribution to the model predictions.
- The outcomes indicate that **initial_days** has the highest importance score of **0.9774**, making it the most influential variable for predicting the target. This is followed by **initial_admin_emergency_admission** with an importance score of **0.0134** and **complication_risk_high** with a score of **0.0074**.

## 7. Limitations & Recommendations
#### Limitations:
- One limitation of the Random Forest model is its inability to extrapolate. Since Random Forest predicts by averaging outputs of decision trees, it cannot extrapolate beyond the range of training data (Mwiti, 2023). For example, if the target variable, TotalCharge, ranges between $1,000 and $9,000, the model may fail in predicting values outside this range, such as charges less than $1,000 or greater than $9,000. This limitation can impact the model’s usefulness when dealing with data outside the training set's scope.

#### Recommendations:
-	The outcomes of this analysis suggest that the hospital can predict the patients’ average daily charges and identify significant features influencing these charges. However, this model’s predictions are limited to the range of the training dataset. Consequently, it is recommended that the hospital consider using a linear model (e.g. linear regression or Support Vector Machine (SVM) regression) to improve prediction accuracy and extrapolate beyond the range (Mwiti, 2023). 

## 8. Data Dashboard
![Medical Readmission Dashboard](https://raw.githubusercontent.com/jlee9503/medical-readmission/main/images/medical-dashboard.png)
- Analyze various factors that influences the readmission rates.
- Combined with supplementary dataset:
  - [Social Determinants of Health (SDOH) data set](https://www.ahrq.gov/sdoh/data-analytics/sdoh-data.html#download)
- Filters:
  - Age
  - Gender
  - Location (State, City)
  - Income Level
- [See full Tableau dashboard](https://public.tableau.com/app/profile/jung.lee3129/viz/MedicalReadmission_17394817546240/Dashboard1)

## 9. Technologies & Tools Used
- **Python** (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)
- **Jupyter Notebook**
- **Tableau**

## 10. Code Reference
- [See full analysis](https://github.com/jlee9503/medical-readmission/blob/main/medical-readmission-analysis.ipynb)
- Clone this repository:
   ```bash
   git clone https://github.com/jlee9503/medical-readmission.git
   cd medical-readmission
   ```

## 11. Sources
- Mwiti, D. (2023, September 1). Random forest regression: When does it fail and why? neptune.ai. [https://neptune.ai/blog/random-forest-regression-when-does-it-fail-and-why](https://neptune.ai/blog/random-forest-regression-when-does-it-fail-and-why)

# Building a Credit Risk Scorecard with XGBoost and SHAP Explainability

*By Mezemir Neway Guchale*

In financial services, the ability to accurately assess credit risk while providing transparent explanations for lending decisions is not merely a technical challenge it is a regulatory and ethical imperative. Having spent over 12 years in finance, audit, and risk management, I have witnessed firsthand how the evolution from traditional scorecards to machine learning models has transformed credit decisioning. This project bridges that gap: a modern XGBoost-based credit scoring model paired with SHAP explainability that satisfies both predictive accuracy and regulatory transparency requirements.

## The Business Problem

Every lending institution faces the same fundamental question: given an applicant's profile, what is the probability they will default on their obligation? The answer drives billions of dollars in lending decisions daily. Traditional approaches relied on logistic regression with manually binned features. While interpretable, they often left predictive performance on the table. Modern gradient boosting methods capture non-linear interactions that linear models miss, but at the cost of interpretability.

This project resolves that tension by combining the predictive power of XGBoost with the explanatory power of SHAP (SHapley Additive exPlanations).

## Technical Approach

### Data Generation and Feature Engineering

The project uses 80,000 synthetic credit applications with 15+ features that mirror real-world lending data: income, employment history, credit utilization, delinquency patterns, and loan characteristics. The correlations between features are intentionally realistic income depends on age and employment tenure, debt-to-income ratios drive default probability, and collateral reduces risk.

Feature engineering follows industry-standard practices:

- **Weight of Evidence (WoE) Binning**: Each numeric feature is binned and evaluated using Information Value (IV) to quantify its predictive power. IV above 0.3 indicates strong predictors; below 0.02 suggests the feature can be dropped. This technique has been a staple in credit risk modeling since the 1960s and remains relevant even in the machine learning era.

- **Interaction Features**: The model captures compound risk indicators like debt burden ratio (outstanding debt relative to income), payment capacity (monthly income minus expenses minus debt service), and delinquency recency risk (combining late payment count with time since last delinquency).

- **Risk Bucketing**: Post-prediction, applicants are assigned to low, medium, or high risk tiers based on their predicted default probability.

### Model Training and Tuning

The XGBoost classifier is trained with stratified 5-fold cross-validation. Hyperparameter tuning covers tree depth, learning rate, and regularization parameters that directly control the bias-variance tradeoff. Early stopping on a validation set prevents overfitting, a concern that grows with the number of features.

### Model Evaluation

Credit risk models demand specialized metrics beyond simple accuracy:

- **KS Statistic**: The Kolmogorov-Smirnov statistic measures the maximum separation between the cumulative distributions of defaulters and non-defaulters. A KS above 0.40 is considered strong in industry practice.

- **Gini Coefficient**: Derived from ROC-AUC (Gini = 2*AUC - 1), this is the standard discrimination metric reported to regulators. Values above 0.50 indicate a well-performing model.

- **Population Stability Index (PSI)**: This is where model monitoring begins. PSI measures how much the score distribution has shifted between training and production. A PSI below 0.10 suggests stability; above 0.25 signals the need for model retraining. In my experience, PSI monitoring is often the first line of defense against model degradation.

### SHAP Explainability

Regulatory frameworks like SR 11-7 (Federal Reserve) and the EU AI Act increasingly require that lenders explain individual credit decisions. SHAP values decompose each prediction into per-feature contributions, answering: "Why was this applicant scored as high risk?"

The explainer provides both global insights (which features matter most across all applicants) and local explanations (what drove the decision for a specific applicant). This dual view satisfies both model governance teams reviewing overall model behavior and front-line officers explaining decisions to applicants.

## Lessons from Practice

Working in audit and risk for over a decade has taught me that the best model is the one that stakeholders trust. Technical accuracy is necessary but insufficient. Credit risk models must be:

1. **Transparent**: Every decision should be traceable to specific applicant attributes.
2. **Stable**: Performance should not degrade silently. PSI monitoring is not optional.
3. **Compliant**: Model documentation must satisfy regulatory examination.
4. **Fair**: Feature selection should be reviewed for discriminatory proxies.

This project implements the first three principles directly. The fourth requires ongoing human oversight that no model can fully automate.

## Conclusion

Credit risk scoring sits at the intersection of statistical modeling, financial domain expertise, and regulatory compliance. This project demonstrates that modern machine learning methods can achieve all three when implemented thoughtfully. The combination of XGBoost for prediction, WoE for feature assessment, SHAP for explainability, and PSI for monitoring creates a framework that is production-ready in spirit, even when built on synthetic data.

The code is structured for extensibility swap in real data, retrain, and the entire evaluation and explanation pipeline follows automatically.

---

*Mezemir Neway Guchale brings 12+ years of experience in finance, audit, and risk management. Connect on [LinkedIn](https://linkedin.com/in/mezemir-guchale) or reach out at gumezemir@gmail.com.*

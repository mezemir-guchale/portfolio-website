# Predicting Loan Defaults: Where Credit Risk Meets Machine Learning

*By Mezemir Neway Guchale*

---

## The Stakes of Getting It Wrong

In lending, every decision carries two risks: approve a borrower who defaults, and you lose money; reject a creditworthy borrower, and you lose revenue. Having spent years auditing financial institutions, I've seen both sides portfolios damaged by lax underwriting and growth stunted by overly conservative risk models.

Machine learning offers a middle path: data-driven risk assessment that learns from patterns humans might miss.

## What I Built

A complete loan default prediction pipeline that compares three models Logistic Regression, Random Forest, and XGBoost on a synthetic dataset of 50,000 loans with realistic credit risk characteristics.

### Why Logistic Regression as the Primary Model?

In credit risk, there's a strong industry preference for logistic regression, and for good reason:

1. **Regulatory compliance** — regulators (Basel III, IFRS 9) require that credit models be explainable. Logistic regression coefficients directly show how each factor affects default probability
2. **Probability calibration** — logistic regression naturally produces well-calibrated probabilities, which matter when those probabilities drive interest rate pricing
3. **Stability** — in production credit scoring, model stability month over month is often more important than marginal accuracy gains

That said, I compare against tree-based models to quantify the accuracy vs. interpretability tradeoff.

## Feature Engineering: Thinking Like an Auditor

The most impactful part of this project was feature engineering. Every feature I created maps to a concept I encountered during financial audits:

### Risk Ratios
- **Loan-to-income ratio**: How large is the loan relative to the borrower's income? In auditing, we flag any ratio above 0.4 as a red flag
- **Payment-to-income ratio**: What percentage of monthly income goes to loan payments?

### Credit Behavior Signals
- **Credit score banding**: Lenders don't treat credit scores linearly there are meaningful thresholds (sub-prime below 580, prime above 740)
- **Recent delinquency flag**: A delinquency in the last 12 months is weighted far more heavily than one from 5 years ago
- **Inquiry rate**: Multiple credit inquiries in a short period suggest financial distress

### Composite Risk Score
I built a weighted composite score combining credit score, DTI, utilization, inquiries, and employment stability similar to internal scorecards used by lending institutions. This single feature captures multi-dimensional risk in a way that's both powerful for the model and intuitive for stakeholders.

## Why Calibration Matters

Most fraud or classification projects focus on accuracy, precision, and recall. Credit risk is different. The **calibrated probability** of default directly feeds into:

- Interest rate pricing (higher risk = higher rate)
- Loan loss provisioning (IFRS 9 expected credit loss calculations)
- Capital adequacy requirements (Basel III risk-weighted assets)

If a model says a borrower has a 15% default probability, that number needs to actually mean 15%. I included a calibration curve in the evaluation specifically because this is a concept most data science portfolios overlook but every credit risk professional understands.

## Results and What They Mean

The model comparison revealed expected patterns XGBoost achieved the highest AUC, but logistic regression provided the best calibration. In practice, the choice depends on the use case: if you're building an automated decision engine, XGBoost wins; if you're supporting human underwriters who need to explain decisions, logistic regression is the right call.

## The Bigger Picture

Credit risk modeling isn't just a technical exercise it determines who gets access to capital. A well-built model doesn't just protect the lender; it also ensures creditworthy borrowers aren't unfairly rejected. That's a responsibility I take seriously, both as a data scientist and as someone who spent years in financial oversight.

---

*Mezemir Neway Guchale is a finance professional with 12+ years of experience in auditing and risk management, currently transitioning into data science. Connect with him on [LinkedIn](https://www.linkedin.com/in/mezemir-guchale).*

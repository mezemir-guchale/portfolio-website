export const personalInfo = {
  name: "Mezemir Neway Guchale",
  title: "Data Scientist & Financial Risk Analyst",
  email: "gumezemir@gmail.com",
  linkedin: "https://www.linkedin.com/in/mezemir-guchale",
  github: "https://github.com/mezemir-guchale",
  location: "Hamburg, Germany",
  phone: "+49 152 12581536",
  summary:
    "Finance professional with 12+ years of expertise in auditing, risk management, and compliance now building data-driven solutions at the intersection of finance and machine learning. I translate complex financial data into actionable insights using Python, SQL, and modern ML frameworks.",
};

export const skills = [
  { category: "Data Science & ML", items: ["Python", "scikit-learn", "XGBoost", "SHAP", "pandas", "NumPy"] },
  { category: "Visualization", items: ["Tableau", "Plotly", "Dash", "Streamlit", "Matplotlib"] },
  { category: "Data & SQL", items: ["SQL", "SQLite", "PostgreSQL", "Data Cleaning", "ETL Pipelines"] },
  { category: "Finance & Risk", items: ["IFRS", "COSO ERM", "Risk Modeling", "Credit Risk", "AML", "Audit"] },
  { category: "Tools & Frameworks", items: ["Git", "Jupyter", "Advanced Excel", "QuickBooks", "FIMS"] },
];

export const experience = [
  {
    role: "Risk and Compliance Specialist",
    company: "Open Door International / ARK",
    location: "Ethiopia",
    period: "Nov 2022 - Nov 2024",
    highlights: [
      "Spearheaded implementation of a comprehensive risk and compliance framework across 15 project teams",
      "Conceptualized and managed a dynamic risk dashboard and compliance program, instrumental in advising clients",
      "Delivered strategic guidance to senior leadership on critical risk issues, refining complex financial concerns",
      "Directed compliance training for 100+ staff and partners, fostering a culture of continuous improvement",
    ],
  },
  {
    role: "Senior Auditor",
    company: "Tibebe Mengistu Chartered & Certified Co.",
    location: "Ethiopia",
    period: "Mar 2019 - Oct 2022",
    highlights: [
      "Conducted audits of operations, financial statements, and internal controls",
      "Developed audit programs and managed audit teams",
      "Prepared audit reports as per IFRS standards",
      "Presented findings to clients and advised on regulatory compliance",
    ],
  },
  {
    role: "Audit Supervisor",
    company: "TAY Chartered and Certified Audit Firm",
    location: "Ethiopia",
    period: "Mar 2018 - Feb 2019",
    highlights: [
      "Supervised audit assignments, ensuring compliance with audit standards",
      "Reviewed financial reports and control assessments",
    ],
  },
  {
    role: "Senior Auditor",
    company: "TAY Chartered and Certified Audit Firm",
    location: "Ethiopia",
    period: "Oct 2012 - Feb 2018",
    highlights: [
      "Conducted audits, maintained permanent files, and trained junior staff",
      "Ensured adherence to accounting policies and local legislation",
      "Drafted financial reports and control assessments",
    ],
  },
];

export const education = [
  {
    degree: "Data Analysis Certification",
    school: "Correlation One",
    period: "Apr 2025 - Sep 2025",
  },
  {
    degree: "BA in Accounting",
    school: "Addis Ababa University School of Commerce",
    period: "2008 - 2012",
  },
];

export const projects: Array<{
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  metrics: Record<string, string>;
  github: string;
  slug: string;
  demo?: string;
}> = [
  {
    id: "fraud-detection",
    number: "01",
    title: "Financial Fraud Detection",
    description: "ML system for detecting fraudulent transactions using XGBoost with 95.3% ROC-AUC. Features cyclical time encoding, z-score anomaly detection, and behavioral pattern analysis.",
    tech: ["Python", "XGBoost", "scikit-learn", "pandas"],
    metrics: { "ROC-AUC": "0.953", "Recall": "70.5%", "Transactions": "100K" },
    github: "https://github.com/mezemir-guchale/fraud-detection",
    slug: "01-fraud-detection",
    demo: "https://fraud-detection-ml.streamlit.app",
  },
  {
    id: "loan-default",
    number: "02",
    title: "Loan Default Risk Prediction",
    description: "Credit risk modeling comparing Logistic Regression, Random Forest, and XGBoost. Features probability calibration curves and 28 engineered credit risk features.",
    tech: ["Python", "scikit-learn", "XGBoost", "Logistic Regression"],
    metrics: { "AUC": "0.756", "Models": "3", "Features": "28" },
    github: "https://github.com/mezemir-guchale/loan-default-prediction",
    slug: "02-loan-default-prediction",
    demo: "https://loan-default-prediction.streamlit.app",
  },
  {
    id: "stock-dashboard",
    number: "03",
    title: "Stock Market Analytics Dashboard",
    description: "Interactive Plotly Dash dashboard with candlestick charts, RSI, MACD, Bollinger Bands, portfolio correlation analysis, and Sharpe ratio calculations.",
    tech: ["Python", "Plotly", "Dash", "yfinance"],
    metrics: { "Tickers": "10", "Indicators": "15+", "Tabs": "4" },
    github: "https://github.com/mezemir-guchale/stock-market-dashboard",
    slug: "03-stock-market-dashboard",
  },
  {
    id: "budget-tracker",
    number: "04",
    title: "Expense & Budget Tracker Analysis",
    description: "Personal finance analysis with SQL integration, anomaly detection, variance analysis, and spending pattern identification across 12 categories.",
    tech: ["Python", "pandas", "SQL", "Matplotlib"],
    metrics: { "Records": "5K", "Charts": "6", "SQL": "Yes" },
    github: "https://github.com/mezemir-guchale/budget-tracker-analysis",
    slug: "04-budget-tracker-analysis",
  },
  {
    id: "ngo-scorecard",
    number: "05",
    title: "NGO Financial Health Scorecard",
    description: "KPI-based financial health assessment for 20 NGOs across 5 years. Computes program expense ratio, fundraising efficiency, and assigns Red/Yellow/Green ratings.",
    tech: ["Python", "pandas", "Matplotlib", "KPI Frameworks"],
    metrics: { "NGOs": "20", "KPIs": "7", "Years": "5" },
    github: "https://github.com/mezemir-guchale/ngo-financial-scorecard",
    slug: "05-ngo-financial-scorecard",
    demo: "https://ngo-financial-scorecard.streamlit.app",
  },
  {
    id: "ifrs-analyzer",
    number: "06",
    title: "IFRS Compliance Audit Analyzer",
    description: "NLP-powered audit finding analysis using TF-IDF for keyword extraction, automated risk scoring, and compliance categorization across 8 IFRS standards.",
    tech: ["Python", "scikit-learn", "NLP", "TF-IDF"],
    metrics: { "Findings": "200", "Categories": "8", "Standards": "IFRS" },
    github: "https://github.com/mezemir-guchale/ifrs-audit-analyzer",
    slug: "06-ifrs-audit-analyzer",
  },
  {
    id: "currency-forecast",
    number: "07",
    title: "Currency Exchange Rate Forecasting",
    description: "Time series forecasting on 5 forex pairs using ARIMA, Exponential Smoothing, SMA, and EMA models with comprehensive evaluation metrics.",
    tech: ["Python", "statsmodels", "ARIMA", "Time Series"],
    metrics: { "Pairs": "5", "Models": "4", "Best": "EMA" },
    github: "https://github.com/mezemir-guchale/currency-forecasting",
    slug: "07-currency-forecasting",
    demo: "https://currency-forecasting.streamlit.app",
  },
  {
    id: "credit-risk",
    number: "08",
    title: "Credit Risk Scoring with SHAP",
    description: "Production-grade credit scorecard using XGBoost with SHAP explainability. Features WoE binning, KS statistic, Gini coefficient, and Population Stability Index.",
    tech: ["Python", "XGBoost", "SHAP", "Credit Risk"],
    metrics: { "AUC": "0.601", "KS": "0.157", "SHAP": "Yes" },
    github: "https://github.com/mezemir-guchale/credit-risk-scoring",
    slug: "08-credit-risk-scoring",
    demo: "https://credit-risk-scoring1.streamlit.app",
  },
  {
    id: "aml-monitoring",
    number: "09",
    title: "AML Transaction Monitoring",
    description: "Anti-money laundering system using Isolation Forest, LOF, and rule-based detection to identify structuring, layering, and round-tripping patterns.",
    tech: ["Python", "Isolation Forest", "DBSCAN", "Anomaly Detection"],
    metrics: { "Transactions": "200K", "Patterns": "4", "Methods": "3" },
    github: "https://github.com/mezemir-guchale/aml-monitoring",
    slug: "09-aml-monitoring",
    demo: "https://aml-monitoring.streamlit.app",
  },
  {
    id: "risk-dashboard",
    number: "10",
    title: "Enterprise Risk Dashboard",
    description: "Capstone project: Interactive Streamlit dashboard with Monte Carlo simulation, risk heatmaps, VaR/ES calculations, and department-level drill-down for enterprise risk management.",
    tech: ["Python", "Streamlit", "Plotly", "Monte Carlo"],
    metrics: { "VaR(95%)": "$63M", "Events": "500", "Simulations": "10K" },
    github: "https://github.com/mezemir-guchale/risk-dashboard-capstone",
    slug: "10-risk-dashboard-capstone",
    demo: "https://risk-dashboard-capstone.streamlit.app",
  },
];

export const blogPosts = [
  {
    slug: "01-fraud-detection",
    title: "Building a Financial Fraud Detection System with Machine Learning",
    excerpt: "How 12 years of auditing experience informed the feature engineering behind a fraud detection pipeline.",
    date: "2025-10-15",
    readTime: "8 min",
    tags: ["Machine Learning", "Fraud Detection", "XGBoost"],
  },
  {
    slug: "02-loan-default-prediction",
    title: "Predicting Loan Defaults: Where Credit Risk Meets Machine Learning",
    excerpt: "Why logistic regression still wins in credit risk, and how calibration matters more than accuracy.",
    date: "2025-10-22",
    readTime: "10 min",
    tags: ["Credit Risk", "Logistic Regression", "IFRS 9"],
  },
  {
    slug: "03-stock-market-dashboard",
    title: "Building a Real-Time Stock Market Dashboard: From Auditor to Analyst",
    excerpt: "Bridging the gap between raw financial data and actionable insight with interactive visualizations.",
    date: "2025-11-01",
    readTime: "7 min",
    tags: ["Dashboard", "Plotly", "Technical Analysis"],
  },
  {
    slug: "04-budget-tracker-analysis",
    title: "Analyzing Personal Finances Like a Financial Auditor",
    excerpt: "Applying audit-grade variance analysis, materiality thresholds, and anomaly detection to personal budgets.",
    date: "2025-11-10",
    readTime: "6 min",
    tags: ["SQL", "Budget Analysis", "Anomaly Detection"],
  },
  {
    slug: "05-ngo-financial-scorecard",
    title: "Building an NGO Financial Health Scorecard",
    excerpt: "Using KPI frameworks from risk management to assess and rank NGO financial health.",
    date: "2025-11-20",
    readTime: "7 min",
    tags: ["NGO", "KPIs", "Financial Health"],
  },
  {
    slug: "06-ifrs-audit-analyzer",
    title: "Using NLP to Analyze IFRS Audit Findings",
    excerpt: "Applying text analysis and TF-IDF to automate compliance categorization of audit reports.",
    date: "2025-12-01",
    readTime: "9 min",
    tags: ["NLP", "IFRS", "Compliance"],
  },
  {
    slug: "07-currency-forecasting",
    title: "Forecasting Currency Exchange Rates with Time Series Models",
    excerpt: "Comparing ARIMA, Exponential Smoothing, and moving averages on forex data from an auditor's perspective.",
    date: "2025-12-10",
    readTime: "8 min",
    tags: ["Time Series", "ARIMA", "Forex"],
  },
  {
    slug: "08-credit-risk-scoring",
    title: "Building an Explainable Credit Scorecard with SHAP",
    excerpt: "Why explainability matters in credit risk and how SHAP values bridge the gap between ML and regulation.",
    date: "2025-12-20",
    readTime: "10 min",
    tags: ["SHAP", "Credit Risk", "Explainability"],
  },
  {
    slug: "09-aml-monitoring",
    title: "Detecting Money Laundering Patterns with Anomaly Detection",
    excerpt: "How compliance experience shapes the design of an AML transaction monitoring system.",
    date: "2026-01-05",
    readTime: "9 min",
    tags: ["AML", "Anomaly Detection", "Compliance"],
  },
  {
    slug: "10-risk-dashboard-capstone",
    title: "Enterprise Risk Management: From Framework to Dashboard",
    excerpt: "Bringing together Monte Carlo simulation, risk heatmaps, and VaR into an interactive risk dashboard.",
    date: "2026-01-15",
    readTime: "11 min",
    tags: ["Risk Management", "Monte Carlo", "Streamlit"],
  },
];

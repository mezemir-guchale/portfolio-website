# Building a Real-Time Stock Market Dashboard: From Auditor to Analyst

*By Mezemir Neway Guchale*

---

## Why I Built This

When I worked in financial auditing, one of the most frustrating things was the disconnect between raw financial data and actionable insight. Spreadsheets full of numbers, but no intuitive way to see patterns, trends, or anomalies at a glance.

This project bridges that gap a fully interactive stock market dashboard that pulls live data, computes technical indicators, and visualizes portfolio-level risk metrics in real time.

## What the Dashboard Does

### Four Analytical Views

**Price Analysis** — Interactive candlestick charts with moving average overlays. This is how traders read the market: the body of the candle shows opening and closing prices, the wicks show the day's range, and moving averages smooth out the noise to reveal trends.

**Technical Indicators** — Bollinger Bands show when a stock is trading at unusual levels. RSI (Relative Strength Index) indicates overbought or oversold conditions. MACD signals momentum shifts before they appear in price alone.

**Portfolio Comparison** — Normalized price charts let you compare stocks fairly regardless of price level (a $3,000 stock and a $150 stock can be compared on the same scale). The correlation heatmap reveals which stocks move together crucial for diversification.

**Returns Analysis** — The distribution of daily returns tells you about a stock's risk profile more precisely than any single number.

## The Technical Implementation

### Data Pipeline

The dashboard fetches data from Yahoo Finance using `yfinance`, caches it locally for offline analysis, and computes 15+ technical indicators on each ticker. The architecture separates data fetching, feature computation, and visualization into independent modules.

### Technical Indicator Engineering

Every indicator I implemented serves a specific analytical purpose:

- **SMA (20, 50, 200)**: The 200-day moving average is considered the dividing line between bull and bear trends by institutional investors
- **RSI**: Values above 70 suggest overbought conditions; below 30, oversold. In auditing terms, think of it as a materiality threshold for price momentum
- **MACD**: The "crossover" between MACD and its signal line is one of the most widely used trading signals in the industry
- **Bollinger Bands**: When price touches the upper band, volatility is expanding; this is analogous to variance analysis in financial auditing

### Portfolio Risk Metrics

The portfolio analyzer computes metrics that any institutional investor would expect:

- **Sharpe Ratio**: Risk-adjusted return how much return per unit of risk?
- **Maximum Drawdown**: The worst peak-to-trough decline this is the number that keeps portfolio managers up at night
- **Annualized Volatility**: Standard deviation of returns, scaled to annual terms

## Connecting Finance and Data Science

What I find most rewarding about this project is how it brings together two worlds I've inhabited:

In **auditing**, we analyze financial data retrospectively looking for patterns, anomalies, and compliance issues in historical records. In **market analytics**, we're doing the same thing but in real time, with the added dimension of predicting what happens next.

The skills transfer directly: identifying trends in data, understanding what "normal" looks like so you can spot what isn't, and presenting complex information in a way that supports decision-making.

## What's Next

- Adding sentiment analysis from financial news
- Implementing a portfolio optimization module (Modern Portfolio Theory)
- Deploying as a cloud-hosted application on Streamlit Cloud

---

*Mezemir Neway Guchale is a finance professional with 12+ years of experience in auditing and risk management, currently transitioning into data science. Connect with him on [LinkedIn](https://www.linkedin.com/in/mezemir-guchale).*

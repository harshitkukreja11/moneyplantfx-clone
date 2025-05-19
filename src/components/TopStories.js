import React from 'react';

const topStories = [
  {
    title: 'Global Markets React to US Inflation Data',
    date: 'May 16, 2025',
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com/markets',
    logo: 'https://s3-symbol-logo.tradingview.com/meta-platforms--big.svg',
  },
  {
    title: 'Crude Oil Slides Amid Demand Concerns',
    date: 'May 15, 2025',
    source: 'Reuters',
    url: 'https://www.reuters.com/business/energy/',
    logo: 'https://s3-symbol-logo.tradingview.com/metal/gold.svg',
  },
  {
    title: 'Gold Hits 3-Month High as Dollar Weakens',
    date: 'May 14, 2025',
    source: 'CNBC',
    url: 'https://www.cnbc.com/gold/',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg',
  },
  {
    title: 'Federal Reserve Hints at Rate Cut in June',
    date: 'May 13, 2025',
    source: 'Investing.com',
    url: 'https://www.investing.com/news/',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/s-and-p-500.svg',
  },
  {
    title: 'Bitcoin Surges Past $72K After ETF Approval',
    date: 'May 12, 2025',
    source: 'CoinDesk',
    url: 'https://www.coindesk.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg',
  },
  {
    title: 'India’s Forex Reserves Reach Record High',
    date: 'May 11, 2025',
    source: 'Economic Times',
    url: 'https://economictimes.indiatimes.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/dow-30.svg',
  },
  {
    title: 'ECB Signals Pause on Rate Hikes',
    date: 'May 10, 2025',
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com/europe',
    logo: 'https://s3-symbol-logo.tradingview.com/country/GB.svg',
  },
  {
    title: 'Tech Stocks Rally on Wall Street',
    date: 'May 9, 2025',
    source: 'CNBC',
    url: 'https://www.cnbc.com/technology/',
    logo: 'https://s3-symbol-logo.tradingview.com/metal/gold.svg',
  },
  {
    title: 'Oil Prices Jump as OPEC+ Cuts Output',
    date: 'May 8, 2025',
    source: 'Reuters',
    url: 'https://www.reuters.com/markets/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg',
  },
  {
    title: 'Japan’s GDP Contracts in Q1',
    date: 'May 7, 2025',
    source: 'Nikkei Asia',
    url: 'https://asia.nikkei.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg',
  },
  {
    title: 'US Unemployment Falls to 3.4%',
    date: 'May 6, 2025',
    source: 'Yahoo Finance',
    url: 'https://finance.yahoo.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/country/US.svg',
  },
  {
    title: 'Forex Traders Eye Upcoming BoE Decision',
    date: 'May 5, 2025',
    source: 'Investing.com',
    url: 'https://www.investing.com/central-banks/boe-interest-rate-decision',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg',
  },
  {
    title: 'EUR/USD Rises on Weak US Data',
    date: 'May 4, 2025',
    source: 'FXStreet',
    url: 'https://www.fxstreet.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg',
  },
  {
    title: 'US Dollar Weakens Against Euro & Yen',
    date: 'May 3, 2025',
    source: 'Reuters',
    url: 'https://www.reuters.com/markets/currencies/',
    logo: 'https://s3-symbol-logo.tradingview.com/country/US.svg',
  },
  {
    title: 'Sensex, Nifty Close Higher for 5th Day',
    date: 'May 2, 2025',
    source: 'Economic Times',
    url: 'https://economictimes.indiatimes.com/markets',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'Crypto Market Volatility Surges',
    date: 'May 1, 2025',
    source: 'CoinDesk',
    url: 'https://www.coindesk.com/markets/',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg',
  },
  {
    title: 'UK Inflation Cools to 3.2%',
    date: 'April 30, 2025',
    source: 'BBC News',
    url: 'https://www.bbc.com/news/business',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'IMF Upgrades India’s Growth Forecast',
    date: 'April 29, 2025',
    source: 'Times of India',
    url: 'https://timesofindia.indiatimes.com/business',
    logo: 'https://s3-symbol-logo.tradingview.com/indices/s-and-p-500.svg',
  },
  {
    title: 'BoE Keeps Rates Unchanged at 5.25%',
    date: 'April 28, 2025',
    source: 'Bloomberg',
    url: 'https://www.bloomberg.com/uk',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'Gold Remains Steady Ahead of Fed Speech',
    date: 'April 27, 2025',
    source: 'FXStreet',
    url: 'https://www.fxstreet.com/news',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg',
  },
  {
    title: 'Nifty Hovers Around 23,000 Mark',
    date: 'April 26, 2025',
    source: 'MoneyControl',
    url: 'https://www.moneycontrol.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'Crypto Bill Clears Senate Panel',
    date: 'April 25, 2025',
    source: 'CoinTelegraph',
    url: 'https://cointelegraph.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'Indian Rupee Strengthens to 81.5/$',
    date: 'April 24, 2025',
    source: 'Economic Times',
    url: 'https://economictimes.indiatimes.com/markets/forex',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/The_Economic_Times_logo.svg',
  },
  {
    title: 'Goldman Sachs Revises GDP Growth Projections',
    date: 'April 23, 2025',
    source: 'Yahoo Finance',
    url: 'https://finance.yahoo.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg',

  },
  {
    title: 'Forex Volatility Expected Ahead of Jobs Data',
    date: 'April 22, 2025',
    source: 'FXStreet',
    url: 'https://www.fxstreet.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/country/EU.svg',
  },
  {
    title: 'S&P 500 Hits Record High',
    date: 'April 21, 2025',
    source: 'CNBC',
    url: 'https://www.cnbc.com/markets/',
    logo: 'https://s3-symbol-logo.tradingview.com/meta-platforms--big.svg',
  },
  {
    title: 'Oil Slides as Inventories Build',
    date: 'April 20, 2025',
    source: 'Reuters',
    url: 'https://www.reuters.com/markets/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg',
  },
  {
    title: 'Bitcoin Dominance Crosses 50%',
    date: 'April 19, 2025',
    source: 'CoinDesk',
    url: 'https://www.coindesk.com/',
    logo: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg',
  },
  // Add more if needed...
];

const TopStories = () => {
  return (
    <div className="mb-4 p-3  border rounded">
      <h5 className="fw-bold pb-2 mb-3">Top Stories</h5>
      <div style={{ maxHeight: '420px', overflowY: 'auto' }}>
        {topStories.map((story, index) => (
          <div key={index} className="mb-3 pb-2 border-bottom small d-flex">
        <img
  src={story.logo}
  alt={story.source}
  style={{ width: '24px', height: '24px', marginRight: '10px', objectFit: 'contain' }}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = '/placeholder-logo.png';
  }}
/>

  

            <div>
              <div className="text-muted mb-1">
                <i className="fa fa-calendar text-warning me-2"></i>
                {story.date} • {story.source}
              </div>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-dark text-decoration-none"
              >
                {story.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStories;

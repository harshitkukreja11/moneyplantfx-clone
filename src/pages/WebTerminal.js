import React from 'react';
import './WebTerminal.css';

const WebTerminal = () => {
  return (
    <div className="terminal-page">
      <div className="terminal-container">
        <div className="terminal-right">
          <iframe
            title="MetaTrader Web Terminal"
            src="https://trade.mql5.com/trade?servers=MoneyPlantFX-Live"
            frameBorder="0"
            
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default WebTerminal;

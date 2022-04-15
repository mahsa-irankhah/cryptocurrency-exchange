import React from 'react';
import "./Coin.css";

const Coin = ({name, symbol, image, price, marketcap, priceChange}) => {
    return (
      <div className="coin-container">
        
        <img src={image} alt={name} />

        <span className="name">{name}</span>
        
        <span>{symbol.toUpperCase()}</span>

        <span>${price.toLocaleString()}</span>

        <span
          className={priceChange > 0 ? "positive-change" : "negative-change"}
        >
          {priceChange}%
        </span>

        <span>${marketcap.toLocaleString()}</span>
      </div>
    );
};

export default Coin;
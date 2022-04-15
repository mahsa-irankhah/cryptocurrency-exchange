import React from 'react';

const Coin = ({name, symbol, image, price, marketcap, priceChange}) => {
    return (
      <div>
        <img src={image} />

        <span>{name}</span>

        <span>{symbol.toUpperCase()}</span>

        <span>{price.toLocaleString()}</span>

        <span>{marketcap.toLocaleString()}</span>

        <span>{priceChange}</span>
        
      </div>
    );
};

export default Coin;
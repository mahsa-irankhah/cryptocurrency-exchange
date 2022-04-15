import React, { useState, useEffect } from 'react';
import "./Landing.css";

//components
import Coin from './Coin';

// functions
import { getCoins } from '../services/api';

//gif 
import loader from '../gif/loader.gif';

const Landing = () => {
    let [coins, setCoins] = useState([]);
    let [value, setValue] = useState("");
    
    useEffect(() => {
        const fetchAPI = async() => {
            const data = await getCoins();
            setCoins(data);
        }

        fetchAPI();
    }, [])

    const searchHandler = event => {
        setValue(event.target.value)
    }

    const searchedCoins = coins.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));

    return (
      <div>
        <input
          type="search"
          placeholder="Search..."
          value={value}
          onChange={searchHandler}
          className="input"
        />
        {coins.length ? (
          <div>
            {searchedCoins.map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                price={coin.current_price}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            ))}
          </div>
        ) : (
          <div className='loader'>
            <img src={loader} alt="loader" />
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
};

export default Landing;
import React, { useState, useEffect } from 'react';

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

    return (
        <div>
            {coins.length ? 
            <div>
            <input type="search" placeholder='Search...' value={value} onChange={searchHandler}/>
            {coins.map(coin => <Coin key={coin.id} 
               name={coin.name}
               symbol={coin.symbol}
               image={coin.image}
               price={coin.current_price}
               marketcap={coin.market_cap}
               priceChange={coin.price_change_percentage_24h}
            />)}
            </div> : 
            <div>
                <img src={loader} alt="loader" />
                <h1>Loading...</h1>
            </div>
            }
        </div>
    );
};

export default Landing;
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './Routes/Coin'
import './index.css'


function App() {

  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      // console.log(coins)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

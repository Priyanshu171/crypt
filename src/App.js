import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import News from './Pages/News';
import Exchange from './Pages/Exchange';
function App() {
  return (
    // <h1>hello world</h1>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/news" exact element={<News/>}/>
          <Route path="/exchange" exact element={<Exchange/>}/>
          <Route path="/coins/:id" exact element={<CoinPage/>}/>
        </Routes>
        <div className="footer">&copy; Priyanshu Nikam | Made With &#10084; By Priyanshu</div>
      </div>
    </BrowserRouter>
  );
}

export default App;

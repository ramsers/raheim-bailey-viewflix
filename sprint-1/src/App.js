import React from 'react';
import './App.scss';
import './partials/_reset.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainVideoData from './Components/Main/MainData/MainVideoData';

function App() {
  return (
    <div className="App">
     <Header />
     <Main/>
    </div>
  );
}

export default App;

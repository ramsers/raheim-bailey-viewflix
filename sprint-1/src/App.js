import React from 'react';
import './App.scss';
import './partials/_reset.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainVideoData from './Components/Main/MainData/MainVideoData';
import {v4 as uuidv4} from 'uuid';

function App() {
  return (
    <div className="App">
     <Header />
     <Main/>
    </div>
  );
}

export default App;

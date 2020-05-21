import React from 'react';
import './App.scss';
import './partials/_reset.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter, Route, Link, NavLink,Redirect, Switch} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import UploadPage from './Components/UploadPage/UploadPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;

import React from 'react';
import Form from '../HeaderForm/Form';
import './Header.scss';
import logo from './HeaderAssets/Logo-brainflix.png';
import UploadPage from '../UploadPage/UploadPage';
import Main from '../Main/Main';
import {BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
               <Link to="/"> <img className="header__logo" src={logo} alt=""/> </Link>
                <Form />
            </header>
        )
    }
}

class Nav extends React.Component {
    render(){
        return(
            <>
            
                
            </>    
        )
    }
}
export default Header;
export {Nav};
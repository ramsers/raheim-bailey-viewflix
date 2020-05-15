import React from 'react';
import Form from '../HeaderForm/Form';
import './Header.scss';
import logo from './HeaderAssets/Logo-brainflix.png';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                    <img className="header__logo" src={logo} alt=""/>
                <Form />
            </header>
        )
    }
}

export default Header;
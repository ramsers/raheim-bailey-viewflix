import React from 'react';
import search from './FormAssets/Icon-search.png';
import upload from './FormAssets/Icon-upload.png';
import userImg from './FormAssets/Mohan-muruge.jpg';
import {Link} from 'react-router-dom';

function Form (props){
    let match = props.match;
        return(
            <div className="header__form-ctn">
                <form className="header__form" action="Post">
                    <img className="header__search" src={search} alt="Brainflix Logo"/>
                    <input className="header__input" type="text" name="Search" placeholder="Search"/>
                       <Link to="/upload">
                        <button className="header__button">
                            <img className="header__upload" src={upload} alt="Upload Icon"/>
                                Upload
                        </button>
                        {/* Take away button html and put classname in Link */}
                        </Link>
                    
                    <span><img className="header__user-img"  src={userImg} alt="User Image"/></span>
                </form>
            </div>
        )
}

export default Form;


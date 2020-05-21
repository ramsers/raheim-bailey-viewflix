import React from 'react';
import search from './FormAssets/Icon-search.png';
import upload from './FormAssets/Icon-upload.png';
import userImg from './FormAssets/Mohan-muruge.jpg';

function Form (){
        return(
            <div className="header__form-ctn">
                <form className="header__form" action="Post">
                    <img className="header__search" src={search} alt="Brainflix Logo"/>
                    <input className="header__input" type="text" name="Search" placeholder="Search"/>
                    <button className="header__button">
                        <img className="header__upload" src={upload} alt="Upload Icon"/>
                        Upload
                    </button>
                    <span><img className="header__user-img"  src={userImg} alt="User Image"/></span>
                </form>
            </div>
        )
}

export default Form;


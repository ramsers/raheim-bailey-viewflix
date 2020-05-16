import React from 'react';
import './MainVidContent.scss'; 
import view from './MainVidAssests/Icon-views.png';
import likes from './MainVidAssests/Icon-likes.png';


function MainVidContent(props) {
    return (
        <div className="main-vid">
            <section className="main-vid__hero">
                <div className="main-vid__hero-ctn">
                    <img src={props.mainContent.image} alt="" className="main-vid__hero-img"/>
                </div>
            </section>
            <div className="main-vid__info">
                <h1 className="main-vid__header">{props.mainContent.title}</h1>
                <aside className="main-vid__poster-info">
                    <span className="main-vid__author">{props.mainContent.channel}</span>
                    <span className="main-vid__date">{props.mainContent.timestamp}</span>
                </aside>
                <aside className="main-vid__viewer-info">
                    <img src={view} alt="" className="main-vid__viewer-icon"/>
                    <span className="main-vid__views">{props.mainContent.views}</span>
                    <img src={likes} alt="" className="main-vid__likes-icon"/>
                    <span className="main-vid__likes">{props.mainContent.likes}</span>
                </aside>
                <hr className="main-vid__split"/>
                <p className="main-vid__desc">{props.mainContent.description}</p>
            </div>
        </div>
    )
}

export default MainVidContent;
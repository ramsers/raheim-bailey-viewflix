import React from 'react';
import './MainVidContent.scss'; 


function MainVidContent(props) {
    return (
        <div className="main-vid">
            <section className="main-vid__hero">
                <div className="main-vid__hero-ctn">
                    <img src={props.mainContent.image} alt="" className="main-vid__hero-img"/>
                </div>
            </section>
            <div className="main-vid__info">
                <h1 className="main-vid__header"></h1>
                <aside className="main-vid__poster-info">
                    <p className="main-vid__author"></p>
                    <span className="main-vid__date"></span>
                </aside>
                <aside className="main-vid__viewer-info">
                    
                </aside>
            </div>
        </div>
    )
}

export default MainVidContent;
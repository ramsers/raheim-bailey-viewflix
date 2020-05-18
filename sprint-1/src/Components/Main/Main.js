import React from 'react';
import './Main.scss'
import Hero from '../Hero/Hero';
import MainVidContent from '../MainVidContent/MainVidContent';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoData from './MainData/MainVideoData';

class Main extends React.Component {
    state = {
        mainContent: MainVideoData,
    }

    render() {
        return(
            <main className="main-content">
                <Hero mainContent={this.state.mainContent}/>
                <div className="main-content__wrapper">
                    <div className="main-content__main-vid-ctn">
                        <MainVidContent  mainContent={this.state.mainContent}/>
                        <Comments mainContent={this.state.mainContent}/>
                    </div>
                    <div className="main-content__aside-ctn">
                        <NextVideo/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
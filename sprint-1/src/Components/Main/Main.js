import React from 'react';
import './Main.scss'
import MainVidContent from '../MainVidContent/MainVidContent';
import Comments from '../Comments/Comments';
import GenerateComments from '../GeneratedComments/GeneratedComments';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoData from './MainData/MainVideoData';
import {v4 as uuidv4} from 'uuid';

class Main extends React.Component {
    state = {
        mainContent: MainVideoData,
    }

    render() {
        return(
            <main className="main-content">
                <MainVidContent  mainContent={this.state.mainContent}/>
                <Comments mainContent={this.state.mainContent}/>
                <GenerateComments />
                <NextVideo/>
            </main>
        )
    }
}

export default Main;
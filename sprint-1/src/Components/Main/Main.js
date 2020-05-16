import React from 'react';
import './Main.scss'
import MainVidContent from '../MainVidContent/MainVidContent';
import MainVideoData from './MainData/MainVideoData';

class Main extends React.Component {
    state = {
        mainContent: MainVideoData
    }

    render() {
        return(
            <main className="main-content">
                < MainVidContent mainContent={this.state.mainContent}/>
            </main>
        )
    }
}

export default Main;
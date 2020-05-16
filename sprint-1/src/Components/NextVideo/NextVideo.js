import React from 'react';
import sideVideos from './NextVideoData';

class NextVideo extends React.Component {
    state= {
        sideVideos
    }
    render() {
        let sideVid = this.state.sideVideos;
        let noFirst = sideVid.filter( vid => vid.title !== "BMX Rampage: 2018 Highlights");
        
        return(
        <div className="next-video__ctn">
            {
                noFirst.map(nextVids => {
                return (
                        <div key={nextVids.id} className="next-video">
                            <img className="next-video__img" src={nextVids.image} alt=""/>
                            <h4 className="next-video__header">{nextVids.title}</h4>
                            <p className="next-video__channel">{nextVids.channel}</p>
                        </div>
                    )
            })}
        </div>
        )
    }
}

export default NextVideo;
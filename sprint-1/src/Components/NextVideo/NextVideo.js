import React from 'react';
import './NextVideo.scss'
import sideVideos from './NextVideoData';

class NextVideo extends React.Component {
    state= {
        sideVideos
    }
    render() {
        let sideVid = this.state.sideVideos;
        let noFirst = sideVid.filter( vid => vid.title !== "BMX Rampage: 2018 Highlights");
        
        return(
        <aside className="next-vid">
            <h4 className="next-vid__head">Next Video</h4>
            {
                noFirst.map(nextVids => {
                return (
                        <div key={nextVids.id} className="next-vid__ctn">
                            <img className="next-vid__img" src={nextVids.image} alt="Thumbnail for Suggested Video"/>
                            <div className="next-vid__channel-info">
                                <h4 className="next-vid__header">{nextVids.title}</h4>
                                <p className="next-vid__channel">{nextVids.channel}</p>
                            </div>
                        </div>
                    )
                })}
        </aside>
        )
    }
}

export default NextVideo;
import React from 'react';
import Main from '../Main/Main';
import {v4 as uuidv4} from 'uuid';
import MainVideoData from '../Main/MainData/MainVideoData';

class GenerateComments extends React.Component {
    state = {
        mainComments: MainVideoData.comments
    }
    render() {
        return (
            this.state.mainComments.map(comment =>{
                return(
                        <div key={comment.id} className="comments__user-comment-ctn">
                            <div   className="comments__gen">
                                <div  className="comments__gen-ctn">
                                    <h4 className="comments__name">{comment.name}</h4>
                                    <p className="comments__time">{comment.timestamp}</p>
                                    <p className="comments__comment">{comment.comment}</p>
                                </div>
                                <div   className="comments__img-ctn">
                                    <img   src="img placeholder" className="comments__user-img"/>
                                </div>
                            </div>
                        </div>
                    )
            })
        )
       
        
    }
}

export default GenerateComments;
import React from 'react';
import Main from '../Main/Main';
import {v4 as uuidv4} from 'uuid';
import './Comments.scss';
import MainVideoData from '../Main/MainData/MainVideoData';

function Comments() {
    return (
        <section className="comments">
            <h3 className="comments__head">3 Comments</h3>
            <div className="comments__ctn">
                <div className="comments__form-ctn">
                    <form action="" method="POST" encType="" className="comments__form">
                        <div className="comments__img-ctn">
                            <img className="comments__user-img" src="img placeholder"/>
                        </div>
                        <div className="comments__form-info-ctn">
                            <h5 className="comments__title-2">Join the Conversation</h5>
                            <input className="comments__field" type="text" name="userVoice" placeholder="" required=""/>
                            <p className="comments__placeholder">That was easily the most spectacular BMX moment ever.</p>
                            <button className="comments__btn" type="submit">Comment</button>
                        </div>
                    </form>
                </div>
                    <GenerateComments key={MainVideoData.id} />
            </div>
        </section>
    )
}

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





export default Comments;
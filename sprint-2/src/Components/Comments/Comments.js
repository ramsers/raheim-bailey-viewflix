import React from 'react';
import './Comments.scss';
import UserImg from './CommentsAssets/Mohan-muruge.jpg';

class Comments extends React.Component {
    render() {
        return (
            <section className="comments">
                <h3 className="comments__head">3 Comments</h3>
                <div className="comments__ctn">
                    <div className="comments__form-ctn">
                        <form action="" method="POST" encType="" className="comments__form">
                            <div className="comments__img-ctn">
                                <img className="comments__user-img" src={UserImg} alt="comment poster picture"/>
                            </div>
                            <div className="comments__form-info-ctn">
                                <label htmlFor="comments" className="comments__title-2">Join the Conversation</label>
                                    <input className="comments__field" type="text" name="userVoice" placeholder="That was easily the most spectacular BMX moment ever." required=""/>
                                    {/* <p className="comments__placeholder">That was easily the most spectacular BMX moment ever.</p> */}
                                    <button className="comments__btn" type="submit">Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
 
}


export default Comments;
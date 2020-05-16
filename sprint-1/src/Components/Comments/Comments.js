import React from 'react';
import Main from '../Main/Main';
import {v4 as uuidv4} from 'uuid';
import MainVideoData from '../Main/MainData/MainVideoData';

function Comments() {
    return (
        <section className="comments">
            <h2></h2>
            <div className="comments__ctn">
                <div className="comments__form-ctn">
                    <form action="" method="POST" encType="" className="comments__form">
                        <div className="comments__img-ctn">
                            <img className="comments__user-img" src="img placeholder"/>
                        </div>
                        <div className="comments__form-info-ctn">
                            <h5 className="comments__title">Name</h5>
                            <input className="comments__name" type="text" name="userName" label="Join the Conversation" placeholder="Enter Your Name" required=""/>
                            <h5 className="comments__title-2">Comment</h5>
                            <input className="comments__field" type="text" name="userVoice" placeholder="Add a new comment" required=""/>
                            <button className="comments__btn" type="submit">Comment</button>
                        </div>
                    </form>
                </div>
                    {/* <GenerateComments key={MainVideoData.id} /> */}

                {/* <div className="comments__user-comment-ctn">
                    <div className="comments__gen">
                        <div className="comments__gen-ctn">
                            <h4 className="comments__name"></h4>
                            <p className="comments__time"></p>
                            <p className="comments__comment"></p>
                        </div>
                        <div className="comments__img-ctn">
                            <img src="img placeholder" className="comments__user-img"/>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}





export default Comments;
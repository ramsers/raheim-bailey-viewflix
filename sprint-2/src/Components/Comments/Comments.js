import React from 'react';
import './Comments.scss';
import MainVideoData from '../Main/MainData/MainVideoData';
import Main from '../Main/Main';
import UserImg from './CommentsAssets/Mohan-muruge.jpg';
import GenerateComments from '../GenComments/GenComments';

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
                                    <input className="comments__field" type="text" name="userVoice" placeholder="" required=""/>
                                    <p className="comments__placeholder">That was easily the most spectacular BMX moment ever.</p>
                                    <button className="comments__btn" type="submit">Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
 
}

// class GenerateComment extends React.Component {
//     state = {
//         mainComments: MainVideoData.comments
//     }
//     render() {
//         return (
//             this.state.mainComments.map(comment =>{
//                 return(
//                         <div key={comment.id} className="comments__user-comment-ctn">
//                             <div   className="comments__gen">
//                                 <div  className="comments__gen-ctn">
//                                     <h4 className="comments__name">{comment.name}</h4>
//                                     <p className="comments__time">{comment.timestamp}</p>
//                                     <p className="comments__comment">{comment.comment}</p>
//                                 </div>
//                                 <div   className="comments__img-ctn">
//                                     <img   src={comment.image} className="comments__user-img" alt="comment profile image"/>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//             })
//         )  
//     }
// }





export default Comments;
import React from 'react';
import axios from 'axios';
const API_KEY = `659d0d96-1273-4761-9613-1b3c1823a38b`;
const API_URL = 'https://project-2-api.herokuapp.com'

class GenerateComments extends React.Component {


    render() {
        let userComments= this.props.currVidData.comments;
        if(!userComments) {
            return (<div><h1>Loadng...</h1></div>)
        }
        return (
            
            userComments.map(comment =>{
                let timestamp = comment.timestamp;
                let dateObj = new Date(timestamp);
                let year = dateObj.getFullYear();
                let month = (dateObj.getMonth() + 1);
                let date = dateObj.getDate();
                let commentDate = `${month}/${date}/${year}`;
                console.log(commentDate);
                return(
                    <div key={comment.id} className="comments__ctn">
                        <div  className="comments__user-comment-ctn">
                            <div   className="comments__gen">
                                <div  className="comments__gen-ctn">
                                    <h4 className="comments__name">{comment.name}</h4>
                                    <p className="comments__time">{commentDate}</p>
                                    <p className="comments__comment">{comment.comment}</p>
                                </div>
                                <div   className="comments__img-ctn">
                                    <img   src={comment.image} className="comments__user-img" alt="comment profile image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            })
        )  
    }
}

export default GenerateComments;
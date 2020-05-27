import React from 'react';
import './UploadPage.scss';
import thumbnail from './assets/Upload-video-preview.jpg';

function UploadPage() {
        return(
            <>
           <div className="upload__ctn">
               <hr className="upload__split"/>
               <div className="upload">
                   <h2 className="upload__header">Upload Video</h2>
                   <h4 className="upload__thumbnail-head">Video Thumbnail</h4>
                   
                   
                   <div className="upload__form-ctn">
                   <img className="upload__thumbnail-img" width="100px"src={thumbnail} alt=""/>
                   <form className="upload__form" action="">
                       <label className="upload__label" htmlFor="Video">Title Your Video</label>
                       <input className="upload__title" name="video" type="text" placeholder="Add a title to your video"/>
                       <label className="upload__label" htmlFor="Video">Add a Video Description</label>
                       <textarea className="upload__desc" name="video-desc" id="" cols="30" rows="10" placeholder="Add a description of your video">
                       </textarea>
                       <hr className="upload__split-form"/>
                       <div className="upload__btn-ctn">
                            <button className="upload__publish-btn" type="submit">Publish</button> 
                            <button className="upload__cancel-btn" type="submit">Cancel</button>
                       </div>
                   </form>
                   </div>
               </div>
           </div>
           </>
        )
}

export default UploadPage;
import React from 'react';
import './UploadPage.scss';
import thumbnail from './assets/Upload-video-preview.jpg';
import axios from 'axios';
import { uuid } from 'uuidv4'

const API_URL = 'http://localhost:8080';

class UploadPage extends React.Component {

    state = {
        videosData: []
        
    }

    // componentDidMount() {
    //     axios.get('http://localhost:8080/videos')
    //       .then(response => {
    //         console.log(response.data);
    //         this.setState({
    //           videosData: response.data
    //         })
    //       })
    //   }

    addVideo = (e) => {
        e.preventDefault()
        let id = uuid()
        let image = thumbnail;
        let newVid = this.state.videosData.slice()
        let title = e.target.title.value;
        let description = e.target.description.value;
        let duration = "4:32";
        newVid.push({title, description})
        console.log(newVid)
        axios.post(`${API_URL}/videos`, {id:id, title:title, 
            description:description, 
            // duration:duration,
            image:image
        })
        .then(()=> {
            this.setState({
                videosData: newVid
            })
        })
    }

    render() {
        return(
            <>
                <div className="upload__ctn">
                    <hr className="upload__split"/>
                    <div className="upload">
                        <h2 className="upload__header">Upload Video</h2>
                        <h4 className="upload__thumbnail-head">Video Thumbnail</h4>
                        
                        
                        <div className="upload__form-ctn">
                        <img className="upload__thumbnail-img" width="100px"src={thumbnail} alt=""/>
                        <form className="upload__form" onSubmit={this.addVideo}>
                            <label className="upload__label" htmlFor="Video">Title Your Video</label>
                            <input className="upload__title" id="title" type="text" placeholder="Add a title to your video"/>
                            <label className="upload__label" htmlFor="Video">Add a Video Description</label>
                            <textarea className="upload__desc" id="description" cols="30" rows="10" placeholder="Add a description of your video">
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
        
}

export default UploadPage;
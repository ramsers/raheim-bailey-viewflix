import React from 'react';
import './Main.scss'
import Hero from '../Hero/Hero';
import MainVidContent from '../MainVidContent/MainVidContent';
import GenerateComments from '../GenComments/GenComments';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import MainVideoData from './MainData/MainVideoData';
import axios from 'axios';

const API_KEY = `659d0d96-1273-4761-9613-1b3c1823a38b`;
const API_URL = 'https://project-2-api.herokuapp.com'

class Main extends React.Component {
    state = {
        currVidData: [],
        sideVidData: [],
    }

    componentDidMount() {
        console.log("is mounting")
        // const { vidId } = this.props.match.params
        // console.log(this.props.match.params)
        axios.get(`${API_URL}/videos/1af0jruup5gu?api_key=${API_KEY}`)
        .then((res1) => {
            console.log(res1.data)
            this.setState({
                currVidData: res1.data
            })
        })
        .catch(error=>{
            console.log("error bro", error)
        })
        axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
        .then(res2 =>{
            console.log(res2.data);
            this.setState({
              sideVidData: res2.data  
            })
        })
        .catch(error=>{
            console.log("error bro", error)
        })
        
    }

    fetchData =() => {

    }
   
 
    componentDidUpdate(prevProps) {
        let { vidId } = this.props.match.params;
        let previousVidId = prevProps.match.params.vidId;

        if(vidId !== previousVidId && !vidId) {
            axios.get(`${API_URL}/videos/1af0jruup5gu?api_key=${API_KEY}`)
        .then(response => {
            console.log(response.data);
            this.setState({
                currVidData: response.data
            },
            )
        })
        } else if(vidId !== previousVidId) {
            axios.get(`${API_URL}/videos/${vidId}?api_key=${API_KEY}`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    currVidData: response.data
                }
                )
            })
        }
        
    }

    

    render() {
        return(
            <main className="main-content">
                <Hero currVidData={this.state.currVidData}/>
                <div className="main-content__wrapper">
                    <div className="main-content__main-vid-ctn">
                        <MainVidContent  currVidData={this.state.currVidData}/>
                        <Comments currVidData={this.state.currVidData}/>
                        <GenerateComments currVidData={this.state.currVidData} />
                    </div>
                    <div className="main-content__aside-ctn">
                        <NextVideo sideVidData={this.state.sideVidData} currVidData={this.state.currVidData}/>
                    </div>
                </div>
            </main>
            
        )
    }
}

export default Main;
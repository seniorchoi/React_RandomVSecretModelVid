import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoButton from "./components/video_button";
import YTSearch from "youtube-api-search";
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDfqHbdWdMzB_UOH9XJLN1db9qboWEw3us\t';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Barbara Palvin')
    };

    videoSearch(term) {
        let randomNum;
        let max =4;
        let min =0;
        randomNum = Math.floor(Math.random()*(max-min+1)+ min);
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[randomNum]
            });
        });
    }



    render(){

        const videoSearch = (term) =>{ this.videoSearch(term)};
            return (
                <div>
                    <h1>&nbsp;&nbsp;Random Victoria's Secret model</h1>
                    <VideoButton
                        onSearchTermChange={videoSearch}/>
                    <br/>
                    <VideoDetail video = {this.state.selectedVideo}/>
                </div>
            );
        }

}



//Take this components HTML and put in page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

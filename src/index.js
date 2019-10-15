import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YtSearch from 'youtube-api-search';
const apiKey = 'AIzaSyBvFHWit5XzLWMWABcpodIwCBNgWgeEHQ8';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }; //state it will track record;
        this.videoSearch('Raw')

    }
    videoSearch(term) {
        YtSearch({ key: apiKey, term: term }, (videos) =>
        //Response of API passing param key for APi key term for bydefault Search and Calling Function and passing Response of API JSON in Data Varbile.
        {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });//State will be set and videos/data=Response of Api and pass in videos of state
        });


    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
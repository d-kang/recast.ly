class App extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    this.props.searchYouTube({
      query: 'numberphile',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY
    }, this.parseSearchResults.bind(this));

    this.searchYouTube = _.debounce(this.props.searchYouTube, 350);
  }

  changeVideo(video) {
    this.setState({currentVideo: video});
  }

  parseSearchResults(results) {
    this.setState({videos: results.items});
    console.log({results: results});
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.searchYouTube} searchCallback={this.parseSearchResults.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} changeVideo={this.changeVideo.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

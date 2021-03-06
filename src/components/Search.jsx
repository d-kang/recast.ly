var Search = (props) => {
  var inputText = '';
  var search = function(event) {
    console.log(event);
    // prepare search data
    var data = {
      key: window.YOUTUBE_API_KEY,
      query: inputText.value,
      max: 10
    };
    // call this.props.youTubeSearch with callback and prepared data
    props.searchYouTube(data, props.searchCallback);
  };
  // console.log(this.inputText.value)
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyPress={search} ref={(input) => inputText = input} />
      <button className="btn hidden-sm-down" onClick={search}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

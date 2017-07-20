var searchYouTube = (options, callback) => {
  // build data from options
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet'
  };
  // jQuery fetch
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    contentType: 'application/json',
    data: data,
    type: 'GET',
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: console.error
  });
};

window.searchYouTube = searchYouTube;

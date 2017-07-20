var searchYouTube = (options, callback) => {
  // build data from options
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: true,
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
    error: function(data) {
      console.error(data.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;

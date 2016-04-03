  module.exports = function VideoFactory ($http) {
    function getVideos () {
      return $http.get('http://localhost:3000/videos');
    }

    return {
      getVideos: getVideos
    }
  }

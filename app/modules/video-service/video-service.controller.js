  module.exports = function VideosController (VideoFactory) {
    var vm = this;

    VideoFactory
      .getVideos()
      .then(function (res) {
        vm.videos = res.data;
      });
  }

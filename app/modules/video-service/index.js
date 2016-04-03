var VideoFactory = require('./video-service.factory');
var VideosController = require('./video-service.controller');
var VideosDirective = require('./video-service.directive');

module.exports = function (ngModule) {
  ngModule
    .factory('VideoFactory', VideoFactory)
    .controller('VideosController', VideosController)
    .directive('nblVideos', VideosDirective);
}

var VideoFactory = require('./video-service.factory');
var VideosController = require('./video-service.controller');

module.exports = function (ngModule) {
  ngModule
    .factory('VideoFactory', VideoFactory)
    .controller('VideosController', VideosController)
}

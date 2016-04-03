module.exports = function (ngModule) {
  ngModule.directive('nblVideoList', function () {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      controller: 'VideosController',
      templateUrl: 'modules/nbl-video-list/template.html'
    }
  });
}

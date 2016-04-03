  module.exports = function VideosDirective () {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      controller: 'VideosController',
      template: '<pre>{{vm.videos}}</pre>'
    }
  }

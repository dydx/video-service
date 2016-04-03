module.exports = function (ngModule) {

  // <nbl-video src="some/video/url"></nbl-video>

  ngModule.directive('nblVideo', function () {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      controller: function () {
        var vm = this;
        vm.path = 'https://s3-us-west-2.amazonaws.com/nbl-egghead/01-egghead-angularjs-angular-with-webpack-introduction.mp4'
      },
      templateUrl: 'modules/nbl-video/template.html'
    }
  });
}

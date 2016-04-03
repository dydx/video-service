var videoFile = 'https://s3-us-west-2.amazonaws.com/nbl-egghead/01-egghead-angularjs-angular-with-webpack-introduction.mp4';

var angular = require('angular');
var app = angular.module('app', []);

require('./modules')(app);

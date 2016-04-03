var angular = require('angular');
var uirouter = require('angular-ui-router').default;
var app = angular.module('app', [uirouter]);

require('./modules')(app);

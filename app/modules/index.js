module.exports = function (ngModule) {
  // turn off fucking SCE
  require('./trusted-resource')(ngModule);

  // routing
  require('./routing')(ngModule);

  // Videos Service
  require('./video-service')(ngModule);

  // Video Directive
  require('./nbl-video')(ngModule);
  require('./nbl-video-list')(ngModule);
}

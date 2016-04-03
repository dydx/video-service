module.exports = function (ngModule) {
  // turn off fucking SCE
  require('./trusted-resource')(ngModule);

  // Video Directive
  require('./nbl-video')(ngModule);
}

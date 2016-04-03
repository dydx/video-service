module.exports = function (ngModule) {

  // need to look into a better way to do this.
  // Tried the whitelist, but it didnt want to work

  ngModule.config(function ($sceProvider) {
    // flip this to true to enable it.
    $sceProvider.enabled(false);
  });
}

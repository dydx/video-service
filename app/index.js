var angular = require('angular');

jwplayer.key = "TOwBWN77rAx07B1E72Vuga/799UxBmt4yLU+TA=="
var player = jwplayer('player');

player.setup({
  file: 'https://s3-us-west-2.amazonaws.com/nbl-egghead/01-egghead-angularjs-angular-with-webpack-introduction.mp4',
  image: '',
  width: "100%",
  aspectratio: "16:9"
});

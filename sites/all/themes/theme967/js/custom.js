(function($){
  $(function(){
    console.log($);
    console.log($('h2.block-title'));
    $('h2.block-title').each(function(){
      console.log($(this));
      if($(this).text().match(/\+/)){
        strarray = $(this).text().split("+");
        chi = strarray[0];
        eng = strarray[1];
        $(this).html(chi + "<em>" + eng + "</em>");
      }
    });
  });
})(jQuery);


var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  jQuery(jQuery('.parallax-bg')[0]).append(jQuery('<div id="header-player">'));
  player = new YT.Player('header-player', {
    height: '680px',
    width: '1200px',
    playerVars: {
              autoplay: 1,
              loop: 1,
              controls: 0,
              showinfo: 0,
              autohide: 1,
              modestbranding: 1,
              vq: 'hd1080'},
    videoId: 'FG-h26AnMHg',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(player);
}

// 3. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
}

var done = false;
function onPlayerStateChange(event) {
  
}
function stopVideo() {
  player.stopVideo();
}
(function ($) {
  Drupal.behaviors.tm_block_bg_video = {
    // Lets find our class name and change our URL to
    // our defined menu path to open in a colorbox modal.
    attach: function (context, settings) {
      $(".tm_video_bg").mb_YTPlayer();
    }
  }
})(jQuery);
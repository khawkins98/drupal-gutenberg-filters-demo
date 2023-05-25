(function ($, Drupal) {
  Drupal.behaviors.SimpleContentCardMasonry= {
    attach:function (context, settings) {
      $('.simple-content-card-grid').masonry({
        itemSelector: '.simple-content-card-grid-item'
      });
    }
  }
})(jQuery, Drupal);

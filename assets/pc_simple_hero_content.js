(function ($, Drupal) {
  // Remove class if hero content has not full-wrapper checked.
  Drupal.behaviors.SimpleHeroContent= {
    attach:function (context, settings) {
      $('.paragraph-type--section-wrapper').once().each(function () {
        if (!$(this).hasClass('full-wrapper')) {
          $(this).find('.section-wrapper-centered').removeClass('section-wrapper-centered');
        }
      })
    }
  }
})(jQuery, Drupal);

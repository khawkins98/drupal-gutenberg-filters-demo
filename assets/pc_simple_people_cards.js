(function ($, Drupal) {
    Drupal.behaviors.masonry= {
        attach:function (context, settings) {
            $('.simple-people-card-grid').masonry(
                {
                    // columnWidth: 200,
                    itemSelector: '.simple-people-card-grid-item'
                }
            );
        }
    }
})(jQuery, Drupal);

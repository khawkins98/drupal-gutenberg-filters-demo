/**
 * @file
 * A JavaScript file for paracomponents.
 */

(function ($, Drupal) {

    'use strict';
  
    Drupal.behaviors.paracomponentsSimpleBanner = {
      attach: function (context, settings) {
        $('.paragraph--type--simple-banner', context).each(function(){
            let image = $(this).find('.field--name-field-image img');
            if(typeof image !== 'undefined') {
                $(this).width(image.width());
            }
        });
      }
    }
  })(jQuery, Drupal);
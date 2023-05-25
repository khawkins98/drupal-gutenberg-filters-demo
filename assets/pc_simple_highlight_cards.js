/**
 * @file
 * A JavaScript file for paracomponents.
 */

(function ($, Drupal) {

    'use strict';
  
    Drupal.behaviors.paracomponentsSimpleHighlightCards = {
      attach: function (context, settings) {
        function resizeHighlightCards() {
            $('.paragraph-type--section-wrapper .paragraph-type--column').each(function() {
                var paragraphs = $(this).find('.paragraph--type--simple-highlight-card-item-man, .paragraph--type--simple-highlight-item-reference');
                if (paragraphs.length === 0) {
                    return;
                }
                
                if (paragraphs.length === 4) {
                    var sectionWrapper = $(this).closest('.paragraph-type--section-wrapper');
                    var otherImg = sectionWrapper.find('.paragraph-type--column').not(this).find('img').first();
                    var image = $(this).find('.paragraph--type--simple-highlight-card-item-man img,.paragraph--type--simple-highlight-item-reference img').eq(-2);
                    var finalHeight = image.offset().top + image.height() - otherImg.offset().top;
                    var imageRate = otherImg.prop('naturalWidth') / otherImg.prop('naturalHeight');
                    if($(window).innerWidth() > 974) {
                        otherImg.height(finalHeight + 'px');
                    } else {
                        otherImg.height(otherImg.width()/imageRate);
                    }
                }
            });
        }
        resizeHighlightCards();
        $(window).resize(function() {
            resizeHighlightCards();
        });
      }
    }
  })(jQuery, Drupal);
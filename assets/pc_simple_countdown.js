/**
 * @file
 * A JavaScript file for pc_simple_countdown.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ParacomponentsSimpleCountdown = {
    attach: function (context, settings) {
      if ($(".paragraph--type--simple-countdown").length > 0) {
        $('.paragraph--type--simple-countdown').each(function() {
          var id = $(this).attr('id');
          var date = $(this).attr('data-countdown');
          if (id && date) {
            var countDownDate = new Date(date).getTime();
            var x = setInterval(function() {
              var now = new Date().getTime();
              var distance = countDownDate - now;
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              // Display the result in the element with id="demo"
              document.getElementById(id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
              // If the count down is finished, write some text
              if (distance < 0) {
                clearInterval(x);
                document.getElementById(id).innerHTML = "0 d 0 h 0 m 0 s";;
              }
            }, 1000);
          }
        });
      }
    }
  };
})(jQuery, Drupal);

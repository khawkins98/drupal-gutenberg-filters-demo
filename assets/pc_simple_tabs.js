/**
 * @file
 * A JavaScript file for pc_simple_tabs.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ParacomponentsSimpleTabs = {
    attach: function (context, settings) {
      var hash = window.location.hash;
      hash && $('ul.simple-tabs a[data-target="' + hash + '"]').tab('show');

      $('.simple-tabs a').click(function (e) {
        hash = this.getAttribute('data-target')
        $(this).tab('show');
        var scrollmem = $('html,body').scrollTop();
        window.location.hash = hash;
        $('html,body').scrollTop(scrollmem);
      });
    }
  };
})(jQuery, Drupal);

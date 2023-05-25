/**
 * @file
 * A JavaScript file for paracomponents.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ParacomponentesMultidivSection = {
    attach: function (context, settings) {
      // Run function onload and on resize.
      var equalHeightsWindowSize = 992;
      $(window).on("load", function() {
        if($(window).width() >= equalHeightsWindowSize) {
          ParacomponentsMultipleDivs(1, 1);
        }
        else {
          ParacomponentsMultipleDivs(1, 0)
        }
      });
      $(window).bind('resize', function () {
        if ($(window).width() >= equalHeightsWindowSize) {
          ParacomponentsMultipleDivs(0, 1);
        }
        else {
          ParacomponentsMultipleDivs(0, 2)
        }
      });
      if ($(".paragraph-type--section-wrapper .section-column").length > 0) {
        if ($(".paracomponents-loaded").length < 1) {
          var sections = $(".paragraph-type--section-wrapper .section-column");
          var i;
          for(i = 0; i < sections.length; i++) {
            if(sections[i].childElementCount > 1) {
              sections[i].classList.add("multiple-columns");
            }
          }
          $(".section-column").wrapInner("<div class='multiple-columns-wrapper'></div>");
          // Set class to define if the page is already loaded or not.
          $("body").addClass('paracomponents-loaded');
        }
      }
      function ParacomponentesEqualHeights(selector, resize) {
        var heights = new Array();
        $(selector).each(function() {
          $(this).css('min-height', '0');
          $(this).css('max-height', 'none');
          $(this).css('height', 'auto');
          heights.push($(this).outerHeight());
        });
        if (resize == 1) {
          var max = Math.max.apply( Math, heights );
          $(selector).each(function() {
            //$(this).css('height', max + 'px');
          });
        }
      }
      function ParacomponentsMultipleDivs(type_load, resize) {
        if ($(".multiple-columns-wrapper").length > 0){
          var sections = $(".multiple-columns-wrapper");
          var i;
          for(i = 0; i < sections.length; i++){
            var sections_divs_total = $(sections[i]).find('.paragraph-type--column');
            if (type_load == 1) {
              var sections_divs = $(sections[i]).find('.full-wrapper');
              var sections_divs_lenght_total = sections_divs_total.length;
              var sections_divs_lenght_edge_to_edge = sections_divs.length;
              var parent = $(sections[i]).parent();
              //If total columns = edge to edge selected checbox
              if (sections_divs_lenght_edge_to_edge == sections_divs_lenght_total) {
                parent[i].className += " full-wrapper";
                var color_edge_to_edge_column = []
                var u;
                for(u = 0; u < sections_divs.length; u++){
                  $(sections_divs[u]).removeClass("full-wrapper");
                  color_edge_to_edge_column[0] = sections_divs[u].style.backgroundColor;
                }
                if (color_edge_to_edge_column[0]) {
                  parent.css('background-color', color_edge_to_edge_column[0]);
                }
              }
            }
            if ((resize == 1 || resize == 2)) {
              ParacomponentesEqualHeights(sections_divs_total, resize);
            }
          }
        }
      }
    }
  };
  Drupal.behaviors.ParacomponentesAdminCollapsed = {
    attach: function (context, settings) {
      $('body', context).once('ParacomponentsCollapseClick').addClass('processed');
      $("span.paracomponents-collapsible").once().on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('aria-controls');
        $(this).toggleClass('paracomponent-collapse-on');
        $("#" + id).toggleClass('paracomponent-collapse-on');
      });
    }
  };
  Drupal.behaviors.ParacomponentsMakeCollapsible = {
    attach: function (context, settings) {
      if ($("span.paracomponents-collapsible").length > 0) {
        $('span.paracomponents-collapsible').each(function() {
          var id = $(this).attr('aria-controls');
          var collapsibleDiv = $(this).parent().next('div.form-wrapper');
          var wrapperDiv = $(this).parent().parent();
          wrapperDiv.addClass('paracomponent-admin-item');
          collapsibleDiv.attr('id', id);
          collapsibleDiv.addClass('paracomponent-section-collapsible');
        });
      }
    }
  };
})(jQuery, Drupal);

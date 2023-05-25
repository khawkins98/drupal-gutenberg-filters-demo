(function ($, Drupal) {
  "use strict";
  window.addEventListener("popstate", function () {
    var el = document;
    var event = document.createEvent("HTMLEvents");
    event.initEvent("resize", true, false);
    el.dispatchEvent(event);
    $(window).resize();
  });

  $(document).ajaxSuccess(function () {
    var el = document;
    var event = document.createEvent("HTMLEvents");
    event.initEvent("resize", true, false);
    el.dispatchEvent(event);
    $(window).resize();
  });

  // header : search button
  Drupal.behaviors.searchButton = {
    attach: function () {
      jQuery(".form-container").addClass("hide");
      jQuery(".mega-menu-search").removeClass("hidden");

      jQuery(".search-collapsed").click(function () {
        jQuery(".form-container").removeClass("hide");
        jQuery(".search-collapsed").addClass("hide");
      });
    },
  };

  $(document).ready(function () {
    if ($(window).width() >= 975) {
      // Remove data-toggle if you are on desktop to preserve the link functionality
      $(".dropdown-toggle").removeAttr("data-toggle");

      calc_height_highlighted_cards();
    }

    $(".badge img").on("error", function () {
      var a = $(this).parent("a");
      $(a).prepend(
        "<span style='display:block' class='badge-image domain_badge_container' > </span>"
      );
      $(this).remove();
    });

    if (!$("article.landing").hasClass("irp-landing")) {
      $(".form-item-field-theme-target-id option")
        .filter('[value="889"],[value="890"],[value="891"],[value="892"]')
        .remove();
    }

    // Load Gutenberg CSS
    var cacheDate = new Date().toISOString().slice(0, 10);
    if (
      window.location.hostname.indexOf("preventionweb.ddev.site") >= 0 ||
      window.location.hostname.indexOf("drupal-testing.preventionweb.net") >=
        0 ||
      window.location.hostname.indexOf("drupal-staging.preventionweb.net") >=
        0 ||
      window.location.hostname.indexOf("d9.preventionweb.net") >= 0 ||
      window.location.hostname.indexOf("www.preventionweb.net") >= 0
    ) {
      $("head").append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          "href",
          "/modules/custom/undrr_gutenberg_blocks/css/style-preventionweb.css?cahceBuster=" +
            cacheDate
        )
      );
    } else {
      $("head").append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          "href",
          "/modules/custom/undrr_gutenberg_blocks/css/style.css?cahceBuster=" +
            cacheDate
        )
      );
    }
  });

  function calc_height_highlighted_cards() {
    // We check if there are at least three elements on the highlight card.
    if ($(".highligh-right div .views-row").length >= 3) {
      // We get the height of the first and third element.
      var highlight_card_1 = $(".highligh-right div .views-row").eq(0).height();
      var highlight_card_2 = $(".highligh-right div .views-row").eq(1).height();
      var highlight_card_3 = $(".highligh-right div .views-row").eq(2).height();
      var highlight_card_4 = $(".highligh-right div .views-row").eq(3).height();

      var highlight_up =
        highlight_card_1 >= highlight_card_2
          ? highlight_card_1
          : highlight_card_2;

      var highlight_down =
        highlight_card_3 >= highlight_card_4
          ? highlight_card_3
          : highlight_card_4;

      // We get the height of the text inside the third box
      var highlight_card_3_text = $(".highligh-right div .views-row")
        .eq(2)
        .find(".field--name-node-title h2 a")
        .height();
      var highlight_card_4_text = $(".highligh-right div .views-row")
        .eq(3)
        .find(".field--name-node-title h2 a")
        .height();

      var highlight_text =
        highlight_card_3_text >= highlight_card_4_text
          ? highlight_card_3_text
          : highlight_card_4_text;

      // We add the first two height and we take the height to the text of the third object in order to
      // get the right height
      var highlight_card_heigth_calc =
        highlight_up + highlight_down - highlight_text;

      // We set the calculated height to the div
      $(".highligh-left .field--name-field-media-image").css(
        "height",
        highlight_card_heigth_calc
      );
    }
  }

  $(window).on("resize", function () {
    if ($(window).width() >= 975) {
      // Remove data-toggle if you are on desktop to preserve the link functionality
      $(".dropdown-toggle").removeAttr("data-toggle");
      calc_height_highlighted_cards();
    } else {
      $(".dropdown-toggle").attr("data-toggle", "dropdown");
    }
  });

  // JS search facets UNDRR

  Drupal.behaviors.searchFilters = {
    attach: function (context) {
      $(".paragraph--type--simple-text p.simple-text-search-filter", context)
        .once("searchFilters")
        .each(function () {
          $(this).on("click", function () {
            $(
              ".facet-filters .paragraph--type--simple-block-reference"
            ).toggleClass("filters-show");
          });
        });
    },
  };

  // JS download attachments UNDRR
  Drupal.behaviors.attachmentsDownload = {
    attach: function (context) {
      $("#attachment-selector", context).each(function () {
        $(this).on("change", function () {
          $(".attachment-download").addClass("hidden");
          $("a[data-download-index=" + $(this).val() + "]").removeClass(
            "hidden"
          );
          $(".type-size-download").addClass("hidden");
          $("span[data-format-index=" + $(this).val() + "]").removeClass(
            "hidden"
          );
          $(this).parent().removeClass("opened");
          $(this).blur();
        });
        $(this).on("focus", function () {
          $(this).parent().addClass("opened");
        });
        $(this).on("focusout", function () {
          $(this).parent().removeClass("opened");
          //$(this).blur();
        });
        $(this).on("mouseout", function () {
          $(this).parent().removeClass("opened");
          //$(this).blur();
        });
      });
    },
  };
})(jQuery, Drupal);

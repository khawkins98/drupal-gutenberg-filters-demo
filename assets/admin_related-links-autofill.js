/**
 * @file
 * Contains related-links-autofill.js.
 * Other code logic was taken from https://git.drupalcode.org/project/link_text_autofill/-/blob/1.0.x/js/autofill.js
 */
(function ($, Drupal, drupalSettings) {
  "use strict";

  // this function attached the JS event to related inputs upon page load.
  $('[id^="edit-field-related-link-"][id$="-uri"]')
    .focusout(function () {
      const $this = $(this);
      const $text_input = $this.parents('.js-form-type-entity-autocomplete').siblings('.js-form-type-textfield').find('input');
      if ($text_input.length > 0 && $text_input.val() === '') {
        const label = $this.val();
        // Get rid of the "([entity id])" suffix.
        const matches = label.match(/^(.+)(\s\([0-9]+\))$/);
        if (matches !== null && matches.length > 2 && matches[1].length > 0) {
          let text = matches[1];
          // Respect maxlenght limitations, if they exist.
          if ($text_input.hasClass('maxlength') && $text_input.data('maxlength') > 0) {
            text = text.substring(0, $text_input.data('maxlength'));
          }
          // Store this string in the text input.
          $text_input.val(text);
          $text_input.trigger('change');
        }
      }
      if ($this.val() === '') {
        $text_input.val('');
      }
    });

  // this function re-attached the JS event to related inputs upon adding new related links combo.
  Drupal.behaviors.LinkTextAutofillBehavior = {
    attach: function (context, drupalSettings) {
      //console.log('add another');

      $('[id^="edit-field-related-link-"]input[id*="uri"]', context)
        .focusout(function () {
          const $this = $(this);
          const $text_input = $this.parents('.js-form-type-entity-autocomplete').siblings('.js-form-type-textfield').find('input');
          if ($text_input.length > 0 && $text_input.val() === '') {
            const label = $this.val();
            // Get rid of the "([entity id])" suffix.
            const matches = label.match(/^(.+)(\s\([0-9]+\))$/);
            if (matches !== null && matches.length > 2 && matches[1].length > 0) {
              let text = matches[1];
              // Respect maxlenght limitations, if they exist.
              if ($text_input.hasClass('maxlength') && $text_input.data('maxlength') > 0) {
                text = text.substring(0, $text_input.data('maxlength'));
              }
              // Store this string in the text input.
              $text_input.val(text);
              $text_input.trigger('change');
            }
          }
          if ($this.val() === '') {
            $text_input.val('');
          }
        });

    }
  };

})(jQuery, Drupal, drupalSettings);

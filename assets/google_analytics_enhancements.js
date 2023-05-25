/**
 * @file
 * Analytics enhancements;
 * see https://gitlab.com/undrr/web-backlog/-/issues/426.
 *
 * To debug:
 *  let conditionalLoggingCheck = document.querySelector("body");
 *  conditionalLoggingCheck.setAttribute("data-vf-google-analytics-verbose", "true");
 */

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

/**
 * Get Meta Tag Content
 * via https://jonlabelle.com/snippets/view/javascript/get-meta-tag-content
 *
 * @param {string} metaName The meta tag name.
 * @return {string} The meta tag content value, or empty string if not found.
 */
function vfGetMeta(metaName) {
  const metas = document.getElementsByTagName("meta");
  const re = new RegExp(`\\b${metaName}\\b`, "i");
  let i = 0;
  const mLength = metas.length;

  for (i; i < mLength; i++) {
    if (re.test(metas[i].getAttribute("name"))) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

// lookup metadata  <meta name="vf:page-type" content="category;pageTypeHere">
// Pass your GA dimension with a `;` divider
var mgGaDimension = "";
var mgGaPageTypeName = "";
var pageType = vfGetMeta("vf:page-type");
if (pageType.length > 0) {
  var toLog = pageType.split(";");
  mgGaPageTypeName = toLog[0];
  mgGaDimension = toLog[1];
}

// Flag used to ensure script only set with first ID, and rest of IDs are pushed to dataLayer
var gtagScriptExists = false;
function invokeGtag(propertyId) {
  // sending the page event later should not be required,
  // but it does not seem to invoke correctly for UA
  // https://gitlab.com/undrr/web-backlog/-/issues/592
  // it will be sent by the "vfGaTrackPageLoad" setting
  const trackingOptions = {
    anonymize_ip: true,
    send_page_view: false,
    [mgGaPageTypeName]: mgGaDimension,
  };

  // NOTE: gtag script only needs to be set to page once, but each gtag('config', <ID>) that's pushed to the dataLayer will add subsequent gtag/js?id=<ID> scripts to the page
  if (!gtagScriptExists) {
    // Set initial gtag/js?id=<first ID> script to <head>
    var script = document.createElement("script");
    script.type = "text/javascript";
    // script.async = true; // we want this to load asap
    script.src = "//www.googletagmanager.com/gtag/js?id=" + propertyId;
    document.getElementsByTagName("head")[0].appendChild(script);

    // Update gtag/js?id= script status flag so this initialization script is only set for the first ID, and not all the IDs in the array
    gtagScriptExists = true;
  }

  gtag("config", propertyId, trackingOptions);
}

if (
  window.location.hostname == "www.preventionweb.net" ||
  window.location.hostname == "drupal-staging.preventionweb.net"
) {
  invokeGtag("G-L04HCKC4HP"); // undrr monolith
  invokeGtag("G-T3RWEE6Z0J"); // GA4 standalone
}
if (
  window.location.hostname == "rp-americas.undrr.org" ||
  window.location.hostname == "rp-americas-staging.undrr.org"
) {
  invokeGtag("G-NRV9R63ECP"); // undrr monolith
  invokeGtag("G-Q6HXCDW47Z"); // GA4 standalone
}
if (
  window.location.hostname == "www.undrr.org" ||
  window.location.hostname == "drupal-staging.undrr.org"
) {
  invokeGtag("G-HRHB6H0S20"); // undrr monolith
  invokeGtag("G-D8G5WXP6YM"); // GA4 standalone
}
if (
  window.location.hostname == "recovery.preventionweb.net" ||
  window.location.hostname == "recovery-staging.preventionweb.net"
) {
  invokeGtag("G-EJEQ6NZG3S"); // undrr monolith
  invokeGtag("G-045Y5GEG7K"); // GA4 standalone
}
if (
  window.location.hostname == "tsunamiday.undrr.org" ||
  window.location.hostname == "tsunamiday-staging.undrr.org"
) {
  invokeGtag("G-C155HNG9YX"); // undrr monolith
  invokeGtag("G-E0TP6KE3Q7"); // GA4 standalone
}
if (
  window.location.hostname == "iddrr.undrr.org" ||
  window.location.hostname == "iddrr-staging.undrr.org"
) {
  invokeGtag("G-S3YRKQHSR7"); // undrr monolith
  invokeGtag("G-3DKPLQSFSJ"); // GA4 standalone
}
if (
  window.location.hostname == "afrp.undrr.org" ||
  window.location.hostname == "afrp-staging.undrr.org"
) {
  invokeGtag("G-0LSG6Y75Y9"); // undrr monolith
  invokeGtag("G-TEB360QDMG"); // GA4 standalone
}
if (
  window.location.hostname == "apmcdrr.undrr.org" ||
  window.location.hostname == "apmcdrr-staging.undrr.org"
) {
  invokeGtag("G-C0T3EWPCEG"); // undrr monolith
  invokeGtag("G-P63BD06GY4"); // GA4 standalone
}
if (
  window.location.hostname == "efdrr.undrr.org" ||
  window.location.hostname == "efdrr-staging.undrr.org"
) {
  invokeGtag("G-8RY5QVB480"); // undrr monolith
  invokeGtag("G-9265QY5EJL"); // GA4 standalone
}
if (
  window.location.hostname == "globalplatform.undrr.org" ||
  window.location.hostname == "globalplatform-staging.undrr.org"
) {
  invokeGtag("G-BHV959PFB1"); // undrr monolith
  invokeGtag("G-5L7B041BQR"); // GA4 standalone
}
if (
  window.location.hostname == "mcr2030.undrr.org" ||
  window.location.hostname == "mcr2030-staging.undrr.org"
) {
  invokeGtag("G-B5QP1C07PE"); // undrr monolith
  invokeGtag("G-4MEQRSR872"); // GA4 standalone
}
if (
  window.location.hostname == "rp-arabstates.undrr.org" ||
  window.location.hostname == "rp-arabstates-staging.undrr.org"
) {
  invokeGtag("G-L7JPY1CQJX"); // undrr monolith
  invokeGtag("G-NQXTQEZPMG"); // GA4 standalone
}
if (
  window.location.hostname == "sendaiframework-mtr.undrr.org" ||
  window.location.hostname == "sendaiframework-mtr-staging.undrr.org"
) {
  invokeGtag("G-TWE8BSM7RK"); // undrr monolith
  invokeGtag("G-CFRYEDBR9M"); // GA4 standalone
}
if (
  window.location.hostname == "coecdr.preventionweb.net" ||
  window.location.hostname == "coecdr-staging.preventionweb.net"
) {
  invokeGtag("G-WDG1YC4X33"); // undrr monolith
  invokeGtag("G-WMCJKWN0Q9"); // GA4 standalone
}
if (window.location.hostname.includes("ddev.site")) {
  invokeGtag("G-CZY541RJMC"); // DEV GA4.
}

// the undrr themes do not have expected data attributes, so we assign them through JS at page load
function assignTrackingToRegion(element, trackingName) {
  if (element.length > 0) {
    element[0].setAttribute("data-vf-google-analytics-region", trackingName);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  let elementToAssignTrackingRegion;
  elementToAssignTrackingRegion =
    document.getElementsByClassName("toolbar-wrapper");
  assignTrackingToRegion(elementToAssignTrackingRegion, "undrr-black-bar");

  elementToAssignTrackingRegion =
    document.getElementsByClassName("header-wrapper");
  assignTrackingToRegion(elementToAssignTrackingRegion, "undrr-site-header");

  elementToAssignTrackingRegion =
    document.getElementsByClassName("main-container");
  assignTrackingToRegion(elementToAssignTrackingRegion, "undrr-main-container");

  elementToAssignTrackingRegion =
    document.getElementsByClassName("footer-wrapper");
  assignTrackingToRegion(elementToAssignTrackingRegion, "undrr-footer");

  elementToAssignTrackingRegion =
    document.getElementsByClassName("copyright-wrapper");
  assignTrackingToRegion(elementToAssignTrackingRegion, "undrr-copyright");
});

// Declare `ga` as a global for eslint
/* global ga */

/**
 * Utility method to invalidate prior GA check.
 */
function vfGaIndicateUnloaded() {
  const el = document.querySelector("body");
  el.setAttribute("data-vf-google-analytics-loaded", "false");
}

/**
 * Track the last time an event was sent (don't double send)
 * @param {Date} lastGaEventTime
 */
let lastGaEventTime = Date.now();

/**
 * We poll the document until we find GA has loaded, or we've tried a few times.
 * Port of https://github.com/ebiwd/EBI-Framework/blob/v1.3/js/foundationExtendEBI.js#L4
 * @param {object} [vfGaTrackOptions]
 * @param {binary} [vfGaTrackOptions.vfGaTrackPageLoad=true] If true, the function will track the initial page view. Set this to false if you track the page view in your HTML.
 * @param {string} [vfGaTrackOptions.vfGa4MeasurementId] The GA4 site measurement ID.
 * @param {number} [numberOfGaChecksLimit=2]
 * @param {number} [checkTimeout=900]
 * @example
 * let vfGaTrackOptions = {
 *  vfGaTrackPageLoad: true
 *  vfGaTrackNetwork: {
 *    serviceProvider: 'dimension2',
 *    networkDomain: 'dimension3',
 *    networkType: 'dimension4'
 *  }
 * };
 * vfGaIndicateLoaded(vfGaTrackOptions);
 */
function vfGaIndicateLoaded(
  vfGaTrackOptions,
  numberOfGaChecksLimit,
  numberOfGaChecks,
  checkTimeout
) {
  /* eslint-disable no-redeclare */
  var vfGaTrackOptions = vfGaTrackOptions || {};
  if (vfGaTrackOptions.vfGaTrackPageLoad == null)
    vfGaTrackOptions.vfGaTrackPageLoad = true;
  var numberOfGaChecks = numberOfGaChecks || 0;
  var numberOfGaChecksLimit = numberOfGaChecksLimit || 5;
  var checkTimeout = checkTimeout || 900;
  /* eslint-enable no-redeclare */
  const el = document.querySelector("body");

  // debug
  vfGaLogMessage(
    `checking ${numberOfGaChecks}, limit: ${numberOfGaChecksLimit}`
  );

  numberOfGaChecks++;

  // If successful we set `data-vf-google-analytics-loaded` on the `body` to true.
  try {
    // unset our check
    if (el.getAttribute("data-vf-google-analytics-loaded") != "true") {
      vfGaIndicateUnloaded();
    }

    if (typeof gtag !== "undefined") {
      vfGaLogMessage("ga4 found");
      if (el.getAttribute("data-vf-google-analytics-loaded") != "true") {
        el.setAttribute("data-vf-google-analytics-loaded", "true");
        vfGaInit(vfGaTrackOptions);
      }
    } else {
      vfGaLogMessage("GA tracking code not ready, scheduling another check");
      if (numberOfGaChecks <= numberOfGaChecksLimit) {
        setTimeout(function () {
          vfGaIndicateLoaded(
            vfGaTrackOptions,
            numberOfGaChecksLimit,
            numberOfGaChecks,
            checkTimeout
          );
        }, 900); // give a second check if GA was slow to load
      }
    }
  } catch (err) {
    vfGaLogMessage("error in vfGaIndicateLoaded");
    if (numberOfGaChecks <= numberOfGaChecksLimit) {
      setTimeout(function () {
        vfGaIndicateLoaded(
          vfGaTrackOptions,
          numberOfGaChecksLimit,
          numberOfGaChecks,
          checkTimeout
        );
      }, 900); // give a second check if GA was slow to load
    }
  }
}

/**
 * Hooks into common analytics tracking
 * @param {object} [vfGaTrackOptions]
 * @param {binary} [vfGaTrackOptions.vfGaTrackPageLoad=true] If true, the function will track the initial page view. Set this to false if you track the page view in your HTML.
 * @param {string} [vfGaTrackOptions.vfGa4MeasurementId] The GA4 site measurement ID.
 */
function vfGaInit(vfGaTrackOptions) {
  vfGaLogMessage("initing vfGaInit");
  /* eslint-disable no-redeclare */
  var vfGaTrackOptions = vfGaTrackOptions || {};
  /* eslint-enable no-redeclare */
  if (vfGaTrackOptions.vfGaTrackPageLoad == null)
    vfGaTrackOptions.vfGaTrackPageLoad = true;
  // Need help?
  // How to add dimension to your property
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
  // https://support.google.com/analytics/answer/2709829?hl=en

  if (typeof gtag === "undefined") {
    // if the site is still using legacy GA, set a dummy gtag function so we don't have to add a bunch of if statements
    vfGaLogMessage("GA4 dummy function has been set.");
    window.gtag = function () {};
  }

  // VARNISH TRIM - begin

  // If you want to track the network of visitors be sure to
  // - follow the setup guide at https://ipmeta.io/instructions
  // - view the directions in README.md
  // note: this feature may be broken out as a separate dependency if the code size needs to grow further
  if (vfGaTrackOptions.vfGaTrackNetwork != null && ga) {
    // a copy of https://ipmeta.io/plugin.js
    // included here to simplify usage and reduce external requests
    // note: we have not yet added support for this using gtag
    //       https://ipmeta.io/instructions/google-analytics-4
    /* eslint-disable */
  }

  // VARNISH TRIM - end

  // standard google analytics bootstrap
  if (vfGaTrackOptions.vfGaTrackPageLoad) {
    vfGaLogMessage("sending page view");
    gtag("event", "page_view");
  }

  function toHumanSeconds(timeVar) {
    return Math.round(timeVar / 100) / 10;
  }

  // sometimes the event will be zero, if the user exists before the requirement completes
  // https://gitlab.com/undrr/web-backlog/-/issues/850
  function calculateTimingDifferential(requirement, dependency) {
    if (requirement < 1) {
      requirement = Date.now();
    }
    if (dependency < 1) {
      dependency = Date.now();
    }

    return requirement - dependency;
  }

  // page timings
  // https://gitlab.com/undrr/web-backlog/-/issues/698
  // we gather some useful metrics before the user leaves
  function mgAnalyticsExitPageInfo() {
    const perfData = window.performance.timing;
    const pageLoadTime = calculateTimingDifferential(perfData.loadEventEnd, perfData.navigationStart); // total amount of time it took to load the page in ms (not quite the sum of the below)
    const connectTime = calculateTimingDifferential(perfData.responseEnd, perfData.requestStart); // time elapsed between the beginning of a request and the completion (HTML load time)
    const renderTime = calculateTimingDifferential(perfData.domComplete, perfData.domLoading); // time to render the page
    const totalTimeOnPage = calculateTimingDifferential(Date.now(), perfData.navigationStart);

    gtag("event", "page_exit", {
      timings_page_total: toHumanSeconds(pageLoadTime),
      timings_connect_time: toHumanSeconds(connectTime),
      timings_render_time: toHumanSeconds(renderTime),
      timings_time_on_page: toHumanSeconds(totalTimeOnPage),
    });
  }

  window.onbeforeunload = mgAnalyticsExitPageInfo;

  // If we want to send metrics in one go
  // ga('set', {
  //   'dimension5': 'custom dimension data'
  //   // 'metric5': 'custom metric data'
  // });

  vfGaLogMessage("prepare vfGaLinkTrackingInit");
  vfGaLinkTrackingInit();
}

/**
 * Track clicks as events
 */
function vfGaLinkTrackingInit() {
  vfGaLogMessage("vfGaLinkTrackingInit");
  document.body.addEventListener(
    "mousedown",
    function (evt) {
      // Debug event type clicked
      vfGaLogMessage(evt.target.tagName);
      vfGaLogMessage(evt.target);

      // we only track clicks on interactive elements (links, buttons, forms)
      if (evt.target) {
        if (evt.target.tagName) {
          const clickedElementTag = evt.target.tagName.toLowerCase();
          const actionElements = [
            "a",
            "button",
            "label",
            "input",
            "select",
            "textarea",
            "details",
            "area",
          ];
          if (actionElements.indexOf(clickedElementTag) > -1) {
            vfGaTrackInteraction(evt.target);
            return;
          }
        }
      }

      // In the case that elements such as `span` are wrapped in action elements (e.g. `a`),
      // we need to find the latter and supply them for tracking
      const ancestors = ["a", "details", "label"];

      for (let i = 0; i < ancestors.length; i++) {
        const from = findParent(ancestors[i], evt.target || evt.srcElement);

        if (from) {
          vfGaTrackInteraction(from);
          return;
        }
      }
    },
    false
  );

  // find first parent with tagName [tagname]
  function findParent(tagname, el) {
    while (el) {
      if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }
}

// /*
//  * Find closest element that has GA attribute
//  * @returns {el} the closest element with GA attribute
//  */
// function getClosestGa(elem, selector) {
//   // Element.matches() polyfill
//   // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
//   if (!Element.prototype.matches) {
//     Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
//   }

// 	// Get the closest matching element
//   for ( ; elem && elem !== document; elem = elem.parentNode ) {
//     if ( elem.matches( selector ) ) return elem;
//   }
//   return null;
// }

// Catch any use cases that may have been existing
// To be removed in 2.0.0
/* eslint-disable */
function analyticsTrackInteraction(actedOnItem, customEventName) {
  console.warn("vfGa","As of 1.0.0-rc.3 analyticsTrackInteraction() is now vfGaTrackInteraction(). You function call is being proxied. You should update your code.");
  vfGaTrackInteraction(actedOnItem, customEventName);
}
/* eslint-enable */

/**
 * Analytics tracking
 * ---
 * This code tracks the user's clicks in various parts of the site and logs them as GA events.
 *
 * Dev note:
 * add class verbose-analytics to your body for a readout to console on clicks.
 *
 * @param {element} actedOnItem
 * @param {string} customEventName Event action
 * @example
 * jQuery(".analytics-content-footer").on('mousedown', 'a, button', function(e) {
 *   vfGaTrackInteraction(e.target,'Content footer');
 * });
 */
function vfGaTrackInteraction(actedOnItem, customEventName) {
  /* eslint-disable no-redeclare */
  var customEventName = customEventName || []; // you can pass some custom text as a 3rd param
  /* eslint-enable no-redeclare */
  let linkName;

  if (typeof gtag === "undefined") {
    // if the site is still using legacy GA, set a dummy gtag function so we don't have to add a bunch of if statements
    window.gtag = function () {};
    vfGaLogMessage("GA4 dummy function has been set.");
  }

  if (customEventName.length > 0) {
    linkName = customEventName;
  } else if (actedOnItem.dataset.vfAnalyticsLabel) {
    // if an explicit label, use that
    linkName = actedOnItem.dataset.vfAnalyticsLabel;
  } else {
    // otherwise derive a value

    // Fix for when tags have undefined .innerText
    if (typeof actedOnItem.innerText === "undefined") {
      actedOnItem.innerText = "";
    }

    linkName = actedOnItem.innerText;
    // console.log('linkName',linkName);

    // if there's no text, it's probably and image
    if (linkName.length == 0 && actedOnItem.hasAttribute("src"))
      linkName = actedOnItem.src.split("/").slice(-1).pop();
    if (linkName.length == 0 && actedOnItem.value) linkName = actedOnItem.value;

    // is there an inner image?
    if (linkName.length == 0 && actedOnItem.getElementsByTagName("img")) {
      if (actedOnItem.getElementsByTagName("img")[0]) {
        // if alt text, use that
        if (actedOnItem.getElementsByTagName("img")[0].hasAttribute("alt")) {
          linkName = actedOnItem.getElementsByTagName("img")[0].alt;
        } else if (
          actedOnItem.getElementsByTagName("img")[0].hasAttribute("src")
        ) {
          linkName = actedOnItem
            .getElementsByTagName("img")[0]
            .src.split("/")
            .slice(-1)
            .pop();
        }
      }
    }

    // fallback to an href value
    if (linkName.length == 0 && actedOnItem.href) linkName = actedOnItem.href;

    // special things for global search box
    // if (parentContainer == 'Global search') {
    //   linkName = 'query: ' + jQuery('#global-search input#query').value;
    // }
  }

  // Get closest parent container
  // Track the region of the link clicked (global nav, masthead, hero, main content, footer, etc)
  // data-vf-google-analytics-region="main-content-area-OR-SOME-OTHER-NAME"
  let parentContainer = actedOnItem.closest(
    "[data-vf-google-analytics-region]"
  );
  if (parentContainer) {
    parentContainer = parentContainer.dataset.vfGoogleAnalyticsRegion;
  } else {
    parentContainer = "No container specified";
  }

  // send to GA
  // Only if more than 100ms has past since last click.
  // Due to our structure, we fire multiple events, so we only send to GA the most specific event resolution
  if (Date.now() - lastGaEventTime > 150) {
    // track link name and region

    // note that we've stored an event(s)
    lastGaEventTime = Date.now();

    // What type of element? `a` `button` etc.
    let elementType = "none";
    if (actedOnItem.tagName) {
      elementType = actedOnItem.tagName.toLowerCase();
    }

    // Track file type (PDF, DOC, etc) or if mailto
    // adapted from https://www.blastanalytics.com/blog/how-to-track-downloads-in-google-analytics
    const filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3|txt|fasta)$/i;
    const { href } = actedOnItem;

    // log emails and downloads to seperate event "buckets"
    /* eslint-disable no-useless-escape */
    if (href && href.match(/^mailto\:/i)) {
      // email click
      const mailLink = href.replace(/^mailto\:/i, "");
      gtag &&
        gtag("event", `Region / ${parentContainer}`, {
          vf_analytics: "true",
          page_container: parentContainer,
          event_label: mailLink,
          event_category: "UI",
          event_type: "Email",
          email_address: mailLink,
        });
      vfGaLogMessage(
        "Email",
        `Region / ${parentContainer}`,
        mailLink,
        lastGaEventTime,
        actedOnItem
      );
    } else if (href && href.match(filetypes)) {
      // download event
      const extension = /[.]/.exec(href) ? /[^.]+$/.exec(href) : undefined;
      const filePath = href;
      gtag &&
        gtag("event", `Type / ${extension} / ${parentContainer}`, {
          vf_analytics: "true",
          page_container: parentContainer,
          event_label: filePath,
          file_extension: extension,
          event_category: "UI",
          event_type: "Download",
          link_url: filePath,
        });
      vfGaLogMessage(
        "Download",
        `Type / ${extension} / ${parentContainer}`,
        filePath,
        lastGaEventTime,
        actedOnItem
      );
    }
    /* eslint-enable no-useless-escape */

    // If link and is external, log it as an external link
    if (href && href.match(/^\w+:\/\//i)) {
      // create a new URL from link
      const newDestination = new URL(href, window.location);
      if (newDestination.hostname != window.location.hostname) {
        gtag &&
          gtag("event", `External link / ${parentContainer}`, {
            vf_analytics: "true",
            page_container: parentContainer,
            event_category: "UI",
            event_type: "External link or button",
            link_text: linkName,
            link_url: href,
          });
        vfGaLogMessage(
          "External links",
          `External link / ${linkName} / ${parentContainer}`,
          href,
          lastGaEventTime,
          actedOnItem
        );
      }
    }

    // is it a form interaction or something with text?
    const formElementTypes = ["label", "input", "select", "textarea"];
    if (formElementTypes.indexOf(elementType) > -1) {
      // create a label for form elements

      // derive a form label
      linkName = "";

      // If an explicit label has been provided, use that
      // <label for="radio-3" class="vf-form__label" data-vf-google-analytics-label="A special form option">Form Label</label>
      if (actedOnItem.dataset.vfAnalyticsLabel) {
        linkName = actedOnItem.dataset.vfAnalyticsLabel;
      } else {
        linkName = `${elementType}: `;
        if (actedOnItem.getAttribute("name")) {
          // if element has a "name"
          linkName = actedOnItem.getAttribute("name");
        } else if (actedOnItem.getAttribute("for")) {
          // if element has a "for"
          linkName = actedOnItem.getAttribute("for");
        } else {
          // get the text of a label
          linkName = actedOnItem.textContent;
        }
      }

      // track a selected value
      if (elementType == "select") {
        linkName = `${linkName}, ${actedOnItem.value}`;
      }

      gtag &&
        gtag("event", `UI Element / ${parentContainer}`, {
          vf_analytics: "true",
          page_container: parentContainer,
          event_label: linkName,
          event_category: "UI",
          event_type: "Webform",
          link_text: linkName,
        });
      vfGaLogMessage(
        "UI Form",
        `UI Element / ${parentContainer}`,
        linkName,
        lastGaEventTime,
        actedOnItem
      );
    } else {
      // generic catch all
      vfGaLogMessage("vfGaTrackInteraction: generic catch all");
      gtag &&
        gtag("event", `UI Element / ${parentContainer}`, {
          vf_analytics: "true",
          page_container: parentContainer,
          event_label: linkName,
          event_category: "UI",
          event_type: "Link, button, image or similar",
          link_text: linkName,
          link_url: href,
        });
      vfGaLogMessage(
        "UI Catch all",
        `UI Element / ${parentContainer}`,
        linkName,
        lastGaEventTime,
        actedOnItem
      );
    }
  }
}

/**
 * Helper function to log debug console messages.
 *
 * @param {string} eventCategory
 * @param {string} eventAction
 * @param {string} eventLabel
 * @param {string} lastGaEventTime
 * @param {element} actedOnItem
 */
function vfGaLogMessage(
  eventCategory,
  eventAction,
  eventLabel,
  lastGaEventTime,
  actedOnItem
) {
  // VARNISH TRIM - begin

  // conditional logging
  const conditionalLoggingCheck = document.querySelector("body");
  // debug: always turn on verbose analytics
  // conditionalLoggingCheck.setAttribute("data-vf-google-analytics-verbose", "true");
  if (conditionalLoggingCheck.dataset.vfGoogleAnalyticsVerbose) {
    if (conditionalLoggingCheck.dataset.vfGoogleAnalyticsVerbose == "true") {
      /* eslint-disable */
      if (eventAction == undefined) {
        // It's a simple message debug
        console.log("Verbose analytics: %o ", eventCategory);
      } else {
        console.log("%c Verbose analytics on ", "color: #FFF; background: #111; font-size: .75rem;");
        console.log("clicked on: %o ", actedOnItem);
        console.log("sent to GA: ", "event ->", eventCategory + " ->", eventAction + " ->", eventLabel, "; at: ", lastGaEventTime);
      }
      /* eslint-enable */
    }
  }

  // VARNISH TRIM - end
}

const vfGaTrackOptions = {
  vfGaTrackPageLoad: true,
  // vfGa4MeasurementId: "G-YOUR-GA4-ID-if_using_gtag"
  // vfGaTrackNetwork: {
  //   serviceProvider: 'dimension2',
  //   networkDomain: 'dimension3',
  //   networkType: 'dimension4'
  // }
};
vfGaIndicateLoaded(vfGaTrackOptions);

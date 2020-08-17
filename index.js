'use strict';

let merge = require('lodash-node/compat/objects/merge');
let googleAnalyticsConfigDefaults = {
  globalVariable: 'ga',
  tracker: 'ga.js',
  webPropertyId: null,
  accountPropertyId: null,
  tagPropertyId: null,
  cookieDomain: null,
  cookieName: null,
  cookieExpires: null,
  displayFeatures: false
};


function gaTrackingCode(config) {
  let scriptArray;

  scriptArray = [
      
    "<script async src='https://www.googletagmanager.com/gtag/js?id=" + config.webPropertyId + "''>",
    "</script>",

    "<script>",
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
    "gtag('config', '" + config.webPropertyId + "');",
    "</script>",

    "<script>",
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':",
    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],",
    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=",
    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);",
    "})(window,document,'script','dataLayer','" + config.tagPropertyId + "');",
    "</script>"
  ];

  return scriptArray;
}

function gaTrackingBodyCode(config) {
  let scriptArray;

  scriptArray = [
    "<noscript>",
    "<iframe src='https://www.googletagmanager.com/ns.html?id=" + config.tagPropertyId + "' height='0' width='0' style='display:none;visibility:hidden'>",
    "</iframe>",
    "</noscript>"
  ];

  return scriptArray;
}

module.exports = {
  name: 'ember-cli-updated-google-tag-analytics',
  contentFor: function(type, config) {
    let googleAnalyticsConfig = merge({}, googleAnalyticsConfigDefaults, config.googleAnalytics || {});

    if (type === 'head' && googleAnalyticsConfig.webPropertyId != null) {
      let content;

      content = gaTrackingCode(googleAnalyticsConfig);

      return content.join("\n");
    }

    if (type === 'body' && googleAnalyticsConfig.webPropertyId != null) {
      let content;

      content = gaTrackingBodyCode(googleAnalyticsConfig);

      return content.join("\n");
    }

    return '';
  }
};

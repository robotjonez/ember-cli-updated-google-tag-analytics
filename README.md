# ember-cli-updated-google-tag-analytics

Plugin for ember-cli that injects Google Analytics tracking code into HTML content.

## Installation

**This plugin requires ember-cli version >= 0.0.47**

To install simply run:

```
npm install --save-dev ember-cli-updated-google-tag-analytics
```

## Warning: Content Security Policy

This plugin is intended to add Google Analytics tracking as an inline script. The [ember-cli-content-security-policy](https://github.com/rwjblue/ember-cli-content-security-policy) addon that is included with ember-cli will prevent the execution of inline scripts.

A future version of this plugin is planned to add the tracking code as an additional JS file (much like [ember-cli-inject-live-reload](https://github.com/rwjblue/ember-cli-inject-live-reload)), but until then this plugin will not function out of the box with CSP installed.

## Usage

Once configured, the Google Analytics tracking code will be injected into your index.html file. All you have to do is setup your Google tagmanager Enviroment 


## Configuration

This plugin uses the Ember CLI project's configuration as defined in `config/environment.js`.

The tracking code will appear only if `ENV.googleAnalytics.webPropertyId` and `ENV.googleAnalytics.tagPropertyId` is defined. For instance, to enable the tracking code in only the production environment:

```javascript
if (environment === 'production') {
  googleAnalytics: {
    webPropertyId: 'UA-xxxxxxxx-x',
    tagPropertyId: 'GTM-xxxxxxx',
  }
}
```

### Configuration Parameters

**gtag.js and analytics.js**

* `webPropertyId` (Default: `null`): the Web Property ID for the Google Web Property you wish to track.
* `tagPropertyId` (Default: `null`): The Google Tracker for Google Tag Managment.

## Running Tests

* `git clone git@github.com:pgrippi/ember-cli-google-analytics.git`
* `npm install`
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


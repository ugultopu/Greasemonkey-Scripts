// ==UserScript==
// @author github.com/ugultopu/
// @name Hide unwanted domains from Google Search results
// @description Hides unwanted domains from Google Search results
// @namespace hide-unwanted-domains-from-google-search-results
// @include *google.com*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version 1.0
// @grant none
// ==/UserScript==
var blacklist = [
  'unwanted-domain.com'
];
for (var i = 0; i < blacklist.length; i++) {
  $('div.g').has('cite:contains("' + blacklist[i] + '")').hide();
}


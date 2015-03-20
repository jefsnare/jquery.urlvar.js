/**
 * Function to retrieve the URL Parameters.
 * Empties parameters with non-valid characters.
 *
 * Get object of URL parameters
 * var allVars = $.getUrlVars();
 *
 * Getting URL var by its name
 * var byName = $.getUrlVar('name');
 */
(function ($) {
    "use strict";

    $.extend({

        /**
         * Retrieve all url vars.
         */
        getUrlVars: function(url){
            var vars = {},
                hash, i,
                hashes,
                validatePattern = /^[a-zA-Z0-9\-\+_\'\[\]]+/,
                urlParameters;

            if(url === undefined) {
                urlParameters = window.location.href.slice(window.location.href.indexOf('?') + 1);
            } else {
                urlParameters = url.slice(url.indexOf('?') + 1);
            }

            /* if no parameters are found and urlParameters value is http://{url} return false */
            if (urlParameters.search(/http/i) !== -1) {
                return false;
            }

            hashes = urlParameters.split('&');
            for(i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');

                if(validatePattern.test(hash[0])) {
                    vars[hash[0]] = (validatePattern.test(hash[1])) ? hash[1] : '';
                }
            }
            return vars;
        },

        /**
         * Get specific url var by name.
         */
        getUrlVar: function(name){
            return $.getUrlVars()[name];
        },

        /**
         * Search in url path for string
         */
        inUrl: function (search) {
            var url = window.location.replace('http://','').replace('https://','').split('/');
            return $.inArray(search, url) !== -1;
        }
    });
}(jQuery));

"use strict";

/**
 * Exports the InstantLink class
 * @module instant-link
 */

const Cache = require('./cache');

const init = require('./init');
const handler = require('./handler');
const fetchPage = require('./fetch-page');
const replacePage = require('./replace-page');

class InstantLink{
    /**
     * Creates a new InstantLink instance
     * @param {object} options
     * @param {boolean} [options.cache=true] - Enable/disable caching
     * @param {boolean} [options.compress=false] - Enable/disable compression
     * @param {string}  [options.event=onmouseover] - Event handler for triggering preload
     * @param {boolean} [options.comment=true] - If enabled, script tags with 'no-instant' data attribute will be replaced by comment
     */
    constructor(options){
        this.options = {
            cache: true,
            compress: false,
            event: 'mouseover',
            comment: true
        }
        this.options = Object.assign(this.options, options);
        if(this.options.cache) this.cache = new Cache(this.options.compress);
        this.init();
    }
}

InstantLink.prototype.init = init;
InstantLink.prototype.handler = handler;
InstantLink.prototype.fetchPage = fetchPage;
InstantLink.prototype.replacePage = replacePage;

if(typeof window === 'undefined'){
    throw new ReferenceError('window is undefined, InstantLink must be run in a browser');
}

window.InstantLink = InstantLink;

module.exports = InstantLink;
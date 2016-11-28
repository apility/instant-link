/**
 * Exports the InstantLink class
 * @module instant-link
 */

import Cache from './cache';

import init from './init';
import handler from './handler';
import fetchPage from './fetch-page';
import replacePage from './replace-page';

const regex = /<script(.+)? ?data-no-instant(.+)? ?>((.|\n|\r| )+)?<\/script>/igm;
const placeholder = "<!-- script removed - data-no-instant attribute -->";

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

if(typeof window !== 'undefined') window.InstantLink = InstantLink;

export default InstantLink;
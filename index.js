/**
 * Exports the InstantLink class
 * @module instant-link
 */

import init from './src/init';
import Cache from './src/cache';
import handler from './src/handler';
import fetchPage from './src/fetch-page';
import replacePage from './src/replace-page';
import noInstantExpr from './src/no-instant-expr';

/**
 * Creates a new InstantLink instance
 * @param {object} options
 * @param {boolean} [options.cache=true] - Enable/disable caching
 * @param {boolean} [options.compress=false] - Enable/disable compression
 * @param {string}  [options.event=onmouseover] - Event handler for triggering preload
 * @param {boolean} [options.comment=true] - If enabled, script tags with 'no-instant' data attribute will be replaced by comment
 */
class InstantLink{
    constructor(options){
        this.options = {
            cache: true,
            compress: false,
            event: 'mouseover',
            comment: true
        }
        this.options = Object.assign(this.options, options);
        if(this.options.cache){
            this.cache = new Cache(this.options.compress);
        }
        this.init();
    }
}

/** @memberof InstantLink */
InstantLink.prototype.init = init;
/** @memberof InstantLink */
InstantLink.prototype.handler = handler;
/** @memberof InstantLink */
InstantLink.prototype.fetchPage = fetchPage;
/** @memberof InstantLink */
InstantLink.prototype.replacePage = replacePage;
/** @memberof InstantLink */
InstantLink.prototype.noInstantExpr = noInstantExpr;

window.InstantLink = InstantLink;
export default InstantLink;
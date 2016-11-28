"use strict";

/**
 * Exports the handler method
 * @module handler
 */


/**
 * Check if a given URL is local to the current website
 * @param {string} url
 * @returns {boolean}
 */
function isExternalURL(url) {
    var domain = function(url) {
        return url.replace('http://','').replace('https://','').split('/')[0];
    };
    return domain(location.href) !== domain(url);
}

/**
 * Event handler. Automatically fetch page if needed, and replace page content
 * @param {Event} e - Event to handle
 */
function handler(e){
    e = window.e || e;
    let self = this;

    if (e.target.tagName == 'A'){
        let link = e.target;
        let href = link.href;

        if (!/^https?:\/\//i.test(href)) return true;
        if(isExternalURL(href)) return true;
        if(link.getAttribute('data-no-instant') !== null) return true;

        let addListener = (el, data, href) => {
            el.addEventListener('click', function(e){
                e.preventDefault();
                self.replacePage(data, href);
                return false;
            });
        }

        if(this.options.cache){

            if(link.getAttribute('data-no-cache') !== null){
                this.fetchPage(href).then((data) => {
                    addListener(link, data, href);
                });
            }else{
                if(typeof this.cache.retrieve(href) === 'undefined'){
                    this.fetchPage(href).then((data) => {
                        addListener(link, data, href);
                        this.cache.store(href, data);
                    }, (err) => {
                        return;
                    });
                }else{
                    addListener(link, this.cache.retrieve(href), href);
                }
            }

        }else{
            this.fetchPage(href).then((data) => {
                addListener(link, data, href);
            });
        }

    }
}

module.exports = handler;
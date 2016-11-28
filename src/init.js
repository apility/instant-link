"use strict";

/**
 * Exports the init method
 * @module init
 */

/**
 * Initializes InstantLink, and binds event handlers
 */
function init(){
    if(typeof window.history === 'undefined') return;
    if(document.location.href.indexOf('file://') != 0){
        let self = this;
        if(document.addEventListener){
            document.addEventListener(this.options.event, function(e){self.handler(e)}, false);
        }else{
            document.attachEvent('on' + this.options.event, function(e){self.handler(e)});
        }
        window.onpopstate = function(event) {
            if(self.options.cache){
                if(typeof self.cache.retrieve(document.location) !== 'undefined'){
                    self.replacePage(self.cache.retrieve(document.location), document.location);
                }else{
                    window.location = document.location;
                }
            }else{
                this.fetchPage(document.location).then(function(data){
                    this.replacePage(data, document.location);
                }), function(){
                    window.location = document.location;
                };
            }
        };
        if(this.options.cache){
            this.cache.store(document.location.href, document.getElementsByTagName('HTML')[0].innerHTML);
        }
    }
}

module.exports = init;
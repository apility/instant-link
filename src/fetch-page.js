"use strict";

/**
 * Exports the fetchPage method
 * @module fetch-page
 */

/**
 * Fetches a page using Ajax
 * @memberof InstantLink.prototype
 * @param {string} href - URL to fetch
 * @returns {Promise}
 */
function fetchPage(href){
    const localURLexpr = new RegExp("//" + location.host + "($|/)");
    let isLocal = (href.substring(0,4) === "http") ? localURLexpr.test(href) : true;

    return new Promise((resolve, reject) => {

        if(!isLocal){
            reject();
        }else{
            var xobj = new XMLHttpRequest();
            xobj.open('GET', href, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    resolve(xobj.responseText);
                }
                if(xobj.status < 200 || xobj.status > 299){
                    reject(xobj);
                }
            };
            xobj.send(null);
        }
    });
}

module.exports = fetchPage;
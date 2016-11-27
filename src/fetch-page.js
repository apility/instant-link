/**
 * Exports the fetchPage method
 * @module instant-link
 */

/**
 * Fetches a page using Ajax
 * @memberof InstantLink.prototype
 * @param {string} href - URL to fetch
 * @returns {Promise}
 */
const fetchPage = function(href){
    const localURLexpr = new RegExp("//" + location.host + "($|/)");
    let isLocal = (href.substring(0,4) === "http") ? localURLexpr.test(href) : true;
    let fileName = href.substring(href.lastIndexOf('/') + 1);
    let url = document.URL.substring(0, document.URL.lastIndexOf("/") + 1);

    return new Promise((resolve, reject) => {

        if(!isLocal){
            reject();
        }else{
            var xobj = new XMLHttpRequest();
            xobj.open('GET', url + fileName, true);
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

export default fetchPage;
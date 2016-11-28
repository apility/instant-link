/**
 * Exports the replacePage method
 * @module replace-page
 */

const regex = /<script(.+)? ?data-no-instant(.+)? ?>((.|\n|\r| )+)?<\/script>/igm;
const placeholder = "<!-- script removed - data-no-instant attribute -->";

/**
 * Replaces the documents contents, and push state to window.history
 * @param {string} data - Data to replace in document
 * @param {string} url - URL of new data
 */
function replacePage(data, url){
    data = data.replace(regex, this.options.comment ? placeholder : "");
    document.open();
    document.write(data);
    document.close();
    history.pushState({}, document.title, url);
    this.init();
}

export default replacePage;
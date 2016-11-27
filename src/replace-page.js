/**
 * Exports the replacePage method
 * @module instant-link
 */

/**
 * Replaces the documents contents, and push state to window.history
 * @param {string} data - Data to replace in document
 * @param {string} url - URL of new data
 */
const replacePage = function(data, url){
    data = data.replace(this.noInstantExpr, this.options.comment ? "<!-- script removed - data-no-instant attribute -->" : "");
    document.open();
    document.write(data);
    document.close();
    history.pushState({}, document.title, url);
    this.init();
}

export default replacePage;
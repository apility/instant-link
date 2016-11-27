/**
 * Exports the noInstantExpr Regular Expression
 * @module instant-link
 */

const noInstantExpr = /<script(.+)? ?data-no-instant(.+)? ?>((.|\n|\r| )+)?<\/script>/igm;

export default noInstantExpr;
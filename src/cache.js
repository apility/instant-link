/**
 * Exports the Cache class
 * @module cache
 */

const lzma = require('lzma-purejs');

/**
 * Creates a new Cache instance
 * @param {boolean} compress - Enable/disable compression
 */
class Cache{
    constructor(compress){
        this.compress = compress || false;
        this.data = {}
    }

    /**
     * Store a key in the cache
     * @param {string} key - Key to store
     * @param {string} val - Value to store
     */
    store(key, val){
        if(typeof this.data[key] === 'undefined'){
            try{
                if(this.compress){
                    let data = new Buffer(val, 'utf8');
                    this.data[key] = lzma.compressFile(data);
                }else{
                    this.data[key] = val;
                }
            }catch(e){
                return;
            }
        }
    }

    /**
     * Retrieves a key from the cache
     * @param {string} key - Key to retrieve
     * @return {string}
     */
    retrieve(key){
        if(typeof this.data[key] !== 'undefined'){
            try{
                if(this.compress){
                    let data = lzma.decompressFile(this.data[key]);
                    return new Buffer(data).toString('utf8');

                }else{
                    return this.data[key];
                }
            }catch(e){
                return undefined;
            }
        }
        return undefined;
    }
}

export default Cache;
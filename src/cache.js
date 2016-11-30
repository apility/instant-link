"use strict";

/**
 * Exports the Cache class
 * @module cache
 */

const defaults = {
    compress: false,
    fullCompress: false
};

let lzma;

/**
 * Creates a new Cache instance
 * @param {object} options - Constructor options
 * @param {object} options.compress - Enable/disable compression
 * @param {boolean} options.fullCompress - Compress data in one Buffer
 */
class Cache{
    constructor(options){
        this.options = defaults;
        if(typeof options === 'object'){
            this.options = Object.assign({}, this.options, options);
        }
        this.data = {};
        if(this.options.compress){
            lzma = require('lzma-purejs');
            if(this.options.fullCompress){
                this.data = this.compress(JSON.stringify(this.data));
            }
        }
    }

    decompress(data){
        let uncompressed = lzma.decompressFile(data);
        return new Buffer(uncompressed, 'utf8').toString();
    }

    compress(data){
        let compressed = lzma.compressFile(new Buffer(data, 'utf8'));
        return compressed;
    }

    /**
     * Store a key in the cache
     * @param {string} key - Key to store
     * @param {string} val - Value to store
     */
    store(key, val){
        if(typeof this.data[key] === 'undefined'){
            try{
                if(this.options.compress){
                    if(this.options.fullCompress){
                        let data = JSON.parse(this.decompress(this.data).toString());
                        data[key] = val;
                        this.data = this.compress(JSON.stringify(data));
                    }else{
                        let data = this.compress(val);
                        this.data[key] = data;
                    }
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
        try{
            if(this.options.compress){
                if(this.options.fullCompress){
                    let data = JSON.parse(this.decompress(this.data));
                    return data[key];
                }else{
                    let data = this.decompress(this.data[key]);
                    return data;
                }
            }else{
                return this.data[key];
            }
        }catch(e){
            return undefined;
        }
    }
}

module.exports = Cache;
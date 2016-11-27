const lzma = require('lzma-purejs');

class Cache{
    constructor(compress){
        this.compress = compress || false;
        this.data = {}
    }
}

Cache.prototype.store = function(key, val){
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

Cache.prototype.retrieve = function(key){
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

export default Cache;
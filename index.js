const lightningHash = (data) => {
    return data + '*';
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

const fooBlock = new Block('foo', 'fooHash', 'fooLastHash');
console.log(fooBlock);
const crypto = require('crypto-js')

class Block {

  constructor({index, previousHash, data}) {
    this.index = index
    this.previousHash = previousHash
    this.timestamp = new Date().getTime()
    this.data = data
    this.hash = this.generateHash(this.index, this.previousHash, this.timestamp, this.data, this.nounce)
  }

  generateHash(index, previousHash, timestamp, data, nounce) {
    return crypto.SHA256(index + previousHash + timestamp + JSON.stringify(data) + nounce).toString()
  }

}

module.exports = Block
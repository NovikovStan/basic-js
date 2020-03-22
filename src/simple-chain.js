const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!isNaN(position) && position > 0 && position < this.chain.length + 1) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let tempChain = [];
    this.chain.forEach(el => {
      tempChain.push(el);
      tempChain.push("~~");
    });
    tempChain.pop();
    this.chain = [];
    return tempChain.join("");
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
// chainMaker
//   .addLink(1)
//   .addLink(2)
//   .addLink(3)
//   .removeLink(4);

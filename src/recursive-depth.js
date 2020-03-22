module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    arr.filter(element => Array.isArray(element)).length > 0
      ? (counter = this.calculateDepth(arr.flat()))
      : null;

    return 1 + counter;
    // remove line with error and write your code here
  }
};

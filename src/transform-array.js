module.exports = function transform(array) {
  if (!Array.isArray(array)) throw new Error();
  else {
    let transformedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "--discard-next") {
        i++;
      } else if (array[i] == "--discard-prev") {
        transformedArray.pop();
      } else if (array[i] == "--double-next") {
        if (i != array.length - 1) {
          transformedArray.push(array[i + 1]);
        }
      } else if (array[i] == "--double-prev") {
        if (i != 0) {
          transformedArray.push(array[i - 1]);
        }
      } else {
        transformedArray.push(array[i]);
      }
    }
    return transformedArray;
  }
  // remove line with error and write your code here
};

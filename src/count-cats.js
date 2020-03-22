module.exports = function countCats(backyard) {
  let number = 0;
  backyard.forEach(element =>
    element.forEach(el => (el == "^^" ? number++ : null))
  );
  return number;
  // remove line with error and write your code here
};

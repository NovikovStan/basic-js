module.exports =
function repeater(
  str,
  {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|"
  }
) {
  let string;
  let additionString;
  if (str == null) string = 'null';
  else string = str.toString();
  if (addition == null) additionString = 'null';
  else additionString = addition.toString();

  let resultArray = makeArray(string, repeatTimes, separator);
  let injection = makeArray(additionString, additionRepeatTimes, additionSeparator).join('');
  return resultArray.map(el => el + injection).join("");

  // remove line with error and write your code here
}

function makeArray(base, repeats, separator) {
  let array = [base];
  for(let i = 0; i < repeats - 1; i++) array.push(separator + base);
  return array;
}

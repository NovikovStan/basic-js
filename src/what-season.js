module.exports = 
function getSeason(date) {
  if (date) {
    if (date.prototype !== new Date().prototype || !date.getUTCDate())
      throw new Error();
    else
      switch (date.getMonth()) {
        case 0:
        case 1:
        case 11: 
          return "winter";
        case 2:
        case 3:
        case 4:
          return "spring";
        case 5:
        case 6:
        case 7:
          return "summer";
        case 8:
        case 9:
        case 10:
          return "autumn";
        default:
          return "Unable to determine the time of year!";
      }
  } else return "Unable to determine the time of year!";
  // remove line with error and write your code here
};

// const date = new Date(2019, 11, 22, 23, 45, 11, 500);
// getSeason(date);
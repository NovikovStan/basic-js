const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity &&
    typeof sampleActivity == "string" &&
    !isNaN(parseInt(sampleActivity))
  ) {
    let sampleAge = parseFloat(sampleActivity);
    if (0 < sampleAge && sampleAge < MODERN_ACTIVITY) {
      let k = 0.693 / HALF_LIFE_PERIOD;
      // let sampleAge = Math.trunc(+sampleActivity);
      let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleAge) / k);
      return t;
    } else return false;
  } else return false;
  // remove line with error and write your code here
};

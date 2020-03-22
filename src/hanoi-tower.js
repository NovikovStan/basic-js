module.exports = function calculateHanoi(discNumber, turnSpeed) {
    let turns = 2 ** discNumber - 1;
    let seconds = turns / (turnSpeed / 3600);
    return {
        turns,
        seconds
      }
    // remove line with error and write your code here
}
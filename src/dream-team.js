module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let firstLetters = members.map( el => {
      if(typeof(el) == 'string') {
       return el.trim().charAt(0).toUpperCase();
      }
    });
    
    return firstLetters.sort().join('');
  } else return false;
  // remove line with error and write your code here
};
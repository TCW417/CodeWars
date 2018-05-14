// Doesn't use regex. I'll see if I can figure out a regex
// solution. if I have time.

function toCamelCase(str){
  let rstr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      i++;
      rstr += str[i].toUpperCase();
    } else {
      rstr += str[i];
    }
  }
  return rstr;
}
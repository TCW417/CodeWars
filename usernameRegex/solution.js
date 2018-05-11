function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username) 
  return res
}

//or, w/o regex...

function validateUsr(username) {
  let between = (c, min, max) => min <= c && c <= max;
  let validChar = (c) => between(c,'a','z') || between(c, '0','9') || c === '_';
  if (username.length < 4 || username.length > 16) return false;
  for (let i of username) {
    if (!validChar(i)) return false;
  }
  return true;
}

//BTW, I tried doing this using .forEach on username but codewars didn't like it.
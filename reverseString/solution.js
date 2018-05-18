// This is what I submitted on thursday evening.
function solution(str){
  let r = [];
  str.split('').forEach(c => r.unshift(c));
  return r.join('');
}

// This is what I came up with Friday morning laying awake in bed...

function solution(str){
  return str.length ? str[str.length-1]+solution(str.slice(0,str.length-1)) : '';
}
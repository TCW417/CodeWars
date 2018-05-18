function solution(str){
  let r = [];
  str.split('').forEach(c => r.unshift(c));
  return r.join('');
}
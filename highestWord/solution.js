function high(x){

  wordScore = (w) => w.map(c => c.charCodeAt(0) - 96).reduce((a, c) => a += c,0);
  
  let words = x.split(' '); // split string into array of words
  let wordArrays = words.map(w => w.split('')); // split word into array of characters
  let scores = wordArrays.map(w => wordScore(w)); // map words into word scores
  let idx = scores.indexOf(scores.reduce((a, c) => Math.max(a, c),0)); // idx of max score
  
  return words[idx]; //word at position idx
 }
function mutateMyStrings(stringOne, stringTwo){
  let s1 = stringOne.split('');
  let s2 = stringTwo.split('');
  let result = '';
  result = stringOne.slice(0) + '\n';
  s2.forEach((c, i) => {
    if (s1[i] !== c) {
      s1[i] = c;
      result += s1.join('') + '\n'
    }
  });
  return result;
}
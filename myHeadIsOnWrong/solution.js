// solution #1:
function fixTheMeerkat(arr) {
  let temp = arr[2];
  arr[2] = arr[0];
  arr[0] = temp;
  return arr;
 }

// my #2 solution:
function fixTheMeerkat(arr) {
  [arr[2], arr[0]] = [arr[0], arr[2]];
  return arr;
 }
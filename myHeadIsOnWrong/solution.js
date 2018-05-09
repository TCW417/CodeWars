// solution #1:
function fixTheMeerkat(arr) {
  let temp = arr[2];
  arr[2] = arr[0];
  arr[0] = temp;
  return arr;
 }

 
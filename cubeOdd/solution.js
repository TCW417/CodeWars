//build-up version
function cubeOdd(arr) {
  let nanFlag = false;
  let a1 = arr.map(a => {
    if (typeof(a) !== 'number') {
      nanFlag = true;
      return undefined;
    }
    return Math.pow(a,3);
  }); 
  let a2 = a1.filter(a => Math.abs(a) % 2 === 1 ? a : null);
  let a3 = a2.reduce((acc, curr) => acc += curr,0);
  return nanFlag ? undefined : a3;
}

// remove intermediate results version
function cubeOdd(arr) {
  let nanFlag = false;
  let a1 = arr.map(a => {
      if (typeof(a) !== 'number') {
        nanFlag = true;
        return undefined;
      }
      return Math.pow(a,3);
    })
    .filter(a => Math.abs(a) % 2 === 1 ? a : null)
    .reduce((acc, curr) => acc += curr,0);
  return nanFlag ? undefined : a1;
}
// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  
  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }
  
  return result;
}

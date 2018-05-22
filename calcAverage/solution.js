function find_average(array) {
  return array.reduce( (a, c) => a + c, 0 ) / array.length;
}
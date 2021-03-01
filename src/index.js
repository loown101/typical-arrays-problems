
exports.min = function min (array) {
  if (arr.length == 0) {
    return 0;
  } else {
    return Math.min.apply(null, arr);
  };
}

exports.max = function max (array) {
  if (arr.length == 0) {
    return 0;
  } else {
  return Math.max.apply(null, arr);
  };
}

exports.avg = function avg (array) {
  if (arr.length == 0) {
    return 0;
  } else {
  return arr.reduce((a, b) => (a + b)) / arr.length;
  };
}

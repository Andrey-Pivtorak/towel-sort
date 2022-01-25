module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  const outArray = matrix.reduce((result, elem, i) => {
    if (i % 2 === 0) {
      result.push(elem);
    } else {
      result.push(elem.reverse());
    }
    return result.flat();
  }, []);

  return outArray;
}

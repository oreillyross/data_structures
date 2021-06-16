function rotateMatrix(matrix) {
  const newMatrix = matrix.map(() => []);
  for(let i = 0; i < matrix.length; i++) {
	  for (let j = 0; j < matrix[0].length; j++) {
		  newMatrix[j][matrix.length - 1 - i] = matrix[i][j]
	  }
  }
  return newMatrix
}

module.exports = { rotateMatrix };

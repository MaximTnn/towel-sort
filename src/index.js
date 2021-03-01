module.exports = function towelSort (matrix = []) {
    let newArray = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            for (let j of matrix[i].reverse()) {
            newArray.push(j)
            }
        } else {
            for (let j of matrix[i]) {
                newArray.push(j)
            }
        }
        
    }
  return newArray;
}

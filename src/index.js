
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
          }else {
            let arr = []
    for(var i = 0; i < matrix.length; i++) {
      if(i!= 0 && i % 2) {
         arr[i] = matrix[i].reverse()
      } else {
      arr[i] = matrix[i];
      }
    }
    return arr.reduce((result, element) => result.concat(element),[]);
}
}

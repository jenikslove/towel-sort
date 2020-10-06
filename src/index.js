
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
          }else {
            let strArr = matrix.join(',').split(",");
            arr = [];
            strArr.forEach(el => {
             el = arr.push(+el);
           })
          }
           
        return arr.sort(function(a, b){return a - b});
}

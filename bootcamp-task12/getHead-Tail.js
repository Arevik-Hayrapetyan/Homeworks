//Write functions that willreturn head and tail of Array
function getHead(array){
    let [head] = array
    return [head]

}
console.log(getHead([1, 2, 3, 4]))

function getTail(array2){
    let[, ...tail] = array2
    return tail
}
console.log(getTail([1, 2, 3, 4]))
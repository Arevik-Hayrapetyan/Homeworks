//Write function that will zip arrays into object
function zipArray(array1, array2){
    let obj = array1.reduce((acc, array1[key], array2[value]) => {
        return{...acc, array1[key] : array2[value]}
    }, {});

}
console.log(zipArray(["a", "b", "c"], [1, 2]))


function swapKeyValue (obj){
    let res = {}
    for(let key in obj) {
        if(!obj[key] in res){
            res[obj[key]] = key
        } else{
            res[obj[key]] = [...res[obj[key]], key]
        }
    }
    return res
}
console.log(swapKeyValue({ a: "1", b: "2", c: "2", d: "2" }))




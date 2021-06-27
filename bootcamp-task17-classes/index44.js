const obj = {
    name: 'Vrezh, Artavazd', // ['name', length][]
    get name(){
     console.log(obj.name)
    }
}
    // set name(){
    //     for(const key in obj){
    //         return [key, key.length]
    //     }
    // }
    
    console.log(obj.name)
  
    console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]
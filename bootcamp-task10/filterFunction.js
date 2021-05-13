function filterFunction(item, array) {
    let newArray = []
    for (let indx = 0; indx < array.length; indx++) {
        if (item(array[indx])) {
            newArray.push(array[indx]);
          }
    }
    return newArray
  }
  let array = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  console.log(filterFunction(el => el.id < 3, array));
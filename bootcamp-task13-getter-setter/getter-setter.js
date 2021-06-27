//Write an object with getter/setter field name.
const obj = {
  _name: [], // ['name', length][]
  set name(value) {
    let array = value.split(", ");
    for (let indx = 0; indx < array.length; indx++) {
      obj._name.push([array[indx], array[indx].length]);
    }
  },
  get name() {
    return obj._name;
  },
};

obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]

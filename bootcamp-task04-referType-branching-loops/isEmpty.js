let obj = {
  name: "Arevik",
  surname: "Hayrapetyan",
};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(obj.name));

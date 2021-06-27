function printAfter(name) {
  console.log("hello world");
  return name();
}
const print = () => console.log("Elon Musk");
printAfter(print);

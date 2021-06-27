let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // The result is a, b, function(){}

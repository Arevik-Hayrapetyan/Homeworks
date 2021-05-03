angle1 = 45;
angle2 = 90;
if (angle1 + angle2 <= 180 && angle1 > 0 && angle2 > 0) {
  let angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
} else {
  console.log("Error");
}

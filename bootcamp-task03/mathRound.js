//According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
//How to round 6.35 the right way?
console.log(Math.round(6.35 * 10) / 10);

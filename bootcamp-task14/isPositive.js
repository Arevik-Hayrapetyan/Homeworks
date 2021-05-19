function isPositive(a) {
  try {
    if (a > 0) {
     console.log("yes");
    } else if (a === 0) {
    throw new Error(" Zero Error") ;
    } else {
   throw new Error("Negative Error") ;
    }
  
  } catch(err) {
   console.log(err);
}
}
isPositive(-1);

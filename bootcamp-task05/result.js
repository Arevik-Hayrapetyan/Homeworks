console.log('' + 1 + 0) 
//The answer is 10 because the first 1 becomes string and  adding 0 next to it:
console.log('' - 1 + 0) 
//The answer is -1 because in case of - it tries make "" to number ==> 0 ==> 0 - 1 + 0 = -1
console.log(true + false)  
//  The answer is 1 because true = 1 and false = 0 ==> 1 + 0 = 1
console.log(6 / '3') 
// The answer is 2 because in case of / it tries make "" to number ==> "3" = 3 ==> 6/3 = 2
console.log('2' * '3') 
// The answer is 6 because when * it tries make "number" to number ==> "2" = 2 and "3" = 3 ==> 2 * 3 = 6
console.log(4 + 5 + 'px') 
// The answer is '9px' , because the first it sum numbers then adding string next to it:
console.log('$' + 4 + 5) 
// The answer is '$45', because the first tries adding 4 to $ then adding 5 to $4:
console.log('4' - 2) 
// The answer is 2, because in case of - it tries to make '4' to number ==> '4' = 4 ==> 4-2=2
console.log('4px' - 2) 
// The answer is NaN because it tries to make 4px to number ==> when it is impossible it becomes NaN ==> NaN - 2 = NaN
console.log(7 / 0)
//The answer is Infinity because in js when we trying to divide number by 0 the outcome became Infinity:
console.log('-9' + 5)
//The answer is '-95' because in case of + 5 becomes string and outcomes became -95:
console.log('-9' - 5) 
//The answer is -14 because in case of - it tries to make string to number ==> -9-5 = 14:
console.log(null + 1)
//The answer is 1 because null transforms 0 == > 0+1=1
console.log(undefined + 1)
//The answer is NaN because undefined transforms NaN ==> NaN + 1 = NaN
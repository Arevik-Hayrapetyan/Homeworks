"use strict";
const user = {
  name: "Vrezh",
 surname: "Oganisyan",
   age: 22,
};
 Object.defineProperty(user, "isDeveloper", {
  value: true,  
  writable: false,
 configurable: false,
 enumerable: false,
});

   console.log(user.isDeveloper ) 
   for (const key in user) {
  console.log(key, user[key]);
}

console.log(user);

const obj = { isAuth: false };

Object.preventExtensions(obj);

// obj.isAuth = true;

// obj.isSmth = false;

console.log(Object.getOwnPropertyDescriptors(obj));

console.log(obj);

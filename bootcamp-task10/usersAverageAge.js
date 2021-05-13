function usersAverageAge(users) {
  const averageAge = users.reduce((total) => {
    total += users.age;
    const result = total / users.length - 1;
    return result;
  }, 0);
  return Math.round(averageAge);
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

console.log(usersAverageAge(users));

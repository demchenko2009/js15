// Завдання 1

// Отримати загальну суму балансу (поле balance) всіх користувачів.
const users = [
  { name: "Alice", balance: 3200 },
  { name: "Bob", balance: 4100 },
  { name: "Charlie", balance: 5900 },
  { name: "David", balance: 5100 },
  { name: "Eva", balance: 2816 },
];

const calculateTotalBalance = users => users.reduce((acc, item) => acc + item.balance, 0)
console.log(calculateTotalBalance(users)); 



// Завдання 2



const user = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  { name: "Sheree Anthony", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh"] }
];

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (user, friendName) => user.filter((item) => item.friends.includes(friendName)).map((item)=>item.name)
;

console.log(getUsersWithFriend(user, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]







// Завдання 3

const users3 = [
  { name: "Sharlene Bush", friends: ["Briana Decker"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
  {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
  { name: "Moore Hensley", friends: [] },
  { name: "Carey Barr", friends: ["Sharlene Bush"] },
  { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
];

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users3 => {
  return users3.sort((a, b)=> a.friends.length - b.friends.length).map((item)=>item.name)
};

console.log(getNamesSortedByFriendsCount(users3));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]







// Завдання 4

const users4 = [
  { name: "Alice", skills: ["html", "css", "js"] },
  { name: "Bob", skills: ["css", "react", "nodejs"] },
  { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users4 => users4.flatMap(users4 => users4.skills).filter((skill, i, arr) => arr.indexOf(skill) === i).sort();

console.log(getSortedUniqueSkills(users4));
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

//filter에서는 조건에 해당하는 array의 element만 남지만
//map에서는 array의 element가 가공을 거쳐서 나가니까 array의 길이 그대로

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const nameList = inventors.map(
  (inventor) => `${inventor.first}  ${inventor.last}`
);
console.log(nameList);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const birthdayList = inventors.sort((a, b) => {
//   if (a.year < b.year) {
//     return -1;
//   } else if (a.year > b.year) {
//     return 1;
//   }
//   return 0;
// });
const birthdayList = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(birthdayList);
console.table(birthdayList);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// let totalYears = 0;
// for (let i = 0; i < inventors.length; i++) {
//   totalYears += inventors[i].passed - inventors[i].year;
// }
// console.log(totalYears);

const total = inventors.reduce((sum, inventor) => {
  return sum + (inventor.passed - inventor.year);
}, 0);
console.log(total);

// 5. Sort the inventors by years lived
const longLived = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.table(longLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links  = Array.from(category.querySelectorAll('a'));
// const links = [...category.querySelectorAll('a')]
// const result = links.map(link=>link.innerText).filter(name=>name.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabeticalList = inventors.sort((a, b) => (a.last > b.last ? 1 : -1));
console.table(alphabeticalList);

// const peopleList = people
//   .map((person) => person.split(", "))
//   .sort((a, b) => {
//     const [aLast, aFirst] = a;
//     const [bLast, bFirst] = b;
//     return aLast > bLast ? 1 : -1;
//   });
const peopleList = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(peopleList);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sortedData = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(sortedData);

// const printReversedWordBySymbol = (word) => {

//   let i = word.length - 1;

//   while (i >= 0) {
//     console.log(word[i]);
//     i = i - 1;
//   }
// }

// const word = 'Hexlet hello';

// printReversedWordBySymbol(word);


// const countChars = (word, chair) => {

//   let wordCase = word.toUpperCase();
//   let chairCase = chair.toUpperCase();

//   let i = 0;
//   let count = 0;

//   while (i < word.length) {
//     // if (word === '') {
//     //   return 0;
//     // } else 
//     if (wordCase[i] === chairCase) {
//       count = count + 1;
//     }
//     i = i + 1;

//   }
//   return count;
// }


// const countChars = (str, char) => {
//   let i = 0;
//   let count = 0;
//   while (i < str.length) {
//     if (str[i] === char) {
//       // Считаем только подходящие символы
//       count = count + 1;
//     }
//     // Счетчик увеличивается в любом случае
//     i = i + 1;
//   }

//   return count;
// };

// const result = countChars('ytllo', 'l');

// console.log(result);


// const even = (str) => {
//   let i = 0;
//   let res = '';

//   while (i < str.length) {

//     if (i % 2 !== 0) {
//       res = `${res}${str[i]}`;
//     }

//     i = i + 1;
//   }
//   return res;
// }

// const resalt = even('rtyu hhhh');
// console.log(resalt);

// const filterString = (str, letter) => {
//   let i = 0;
//   let res = '';

//   while (i < str.length) {
//     if (str[i] !== letter) {
//       res = res + str[i];
//     }
//     i++;
//   }
//   return res;
// }

// const filterString = (str, letter) => {

//   let res = '';
//   // let newStr = str.split('')

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== letter) {
//       res = res + str[i];
//     }

//   }
//       return res;
// }

// const str = 'If I look back I am lost';

// const resalt = filterString(str, 'I');
// console.log(resalt);

// function getInfo(name, age) {
//   return `Name: ${name}; Age: ${age}`;
// }

// function getInfoWidthCurrentDate(callback) {
//   const now = new Date();

//   console.log(`Today: ${now.toISOString()}; \n ${callback('Dmitry', 33)}`)
// }

// getInfoWidthCurrentDate(getInfo);

function greeting(name) {
  return `Hello ${name}!`;
}

function showGreeting(callback) {
  console.log(`${callback('Kate')} Nice to meet you!`);
}

showGreeting(greeting);




// 1. Функция палиндром

const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replace(/\s/g, '');
  const reverseString = tempString
    .split('')
    .reverse()
    .join('');
  return tempString === reverseString;
};

// console.log(isPalindrome('Шалаш'));
// console.log(isPalindrome('ТоПоТ'));
// console.log(isPalindrome('Лёша на полке клопа нашёл '));

isPalindrome();

// 2. Функция извлечения чисел

const getNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

getNumber();

// 3. Функция, которая принимает три параметра

function replaceString(str, length, addSymbol) {
  for (let i = 0; i < length; i++) {
    addSymbol = addSymbol.slice(0);
    if (i === length) {
      break;
    }
  } for (let i = 0; i < length; i++) {
    str = addSymbol.slice(0, length - str.length) + str;
    if (i === length) {
      break;
    }
  }
  return str;
}

replaceString();

// console.log(replaceString('1', 4, '0'));
// console.log(replaceString('q', 4, 'werty'));
// console.log(replaceString('1', 2, '0'));
// console.log(replaceString('q', 4, 'we'));
// console.log(replaceString('qwerty', 4, '0'));

// 4. Функция для проверки длины строки.

const isCheckString = (string, length) =>
  string.length <= length;

// console.log(getLength('проверяемая строка', 20));

isCheckString();

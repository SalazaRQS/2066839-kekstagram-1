// 1. Функция палиндром

function checkPalindrome(string) {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
}

checkPalindrome();

// 2. Функция извлечения чисел

function getNumber(string) {
  if (string === Number(string)) {
    return Number(string);
  } else {
    return string.replace(/\D/g, '');
  }
}

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

function getLength(string, maxLingth) {
  let answer;
  if (string.length <= maxLingth) {
    answer = true;
  } else if (string.length > maxLingth) {
    answer = false;
  } else {
    answer = false;
  }
  return answer;
}


// console.log(getLength('проверяемая строка', 20));

getLength();

function randomArray(length = 10) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = 0; i < length; i++) {
    let isNumber = Math.random() < 0.5;
    if (isNumber) {
      result.push(Math.floor(Math.random() * 1000));
    } else {
      let wordLength = Math.floor(Math.random() * 10) + 1;
      let randomWord = "";
      for (let j = 0; j < wordLength; j++) {
        randomWord += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result.push(randomWord);
    }
  }

  return result;
}

function randNum(length = 10, maxValue = 100) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * maxValue));
  }
  return randomArray;
}

function randNgtNum(length = 10, maxValue = 100) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    let randomValue = Math.floor(Math.random() * maxValue);
    randomArray.push(Math.random() > 0.5 ? -randomValue : randomValue);
  }
  return randomArray;
}

function innerHtml(ansId, answer) {
  document.getElementById(ansId).innerHTML = answer;
}

// ### Massivlar bilan ishlash
// 1. **Ikki massivning kesishmasini toping**:
//  Ikkita massiv berilgan. Ulardagi umumiy elementlardan
//  tashkil topgan yangi massiv yarating.

function arraySome(arr1, arr2) {
  return arr1.filter(function (value) {
    return arr2.includes(value);
  });
}

document.getElementById("first--btn").addEventListener("click", function () {
  let array1 = randNum();
  let array2 = randNum();

  let result =
    "1-massiv:<br>" +
    array1 +
    "<br>2-massiv:<br>" +
    array2 +
    "<br>Kesishma:<br>" +
    arraySome(array1, array2);

  innerHtml("first--ans", result);
});

//

// 2. **Massivdagi raqamlarni ko'paytirish**:
//  Massiv elementlarini berilgan koeffitsiyentga
// ko'paytirib, natija massivini qaytaruvchi funksiya yozing.

function multiplyArrCoef(arr, coefficient) {
  return arr.map(function (value) {
    return value * coefficient;
  });
}

document.getElementById("second--btn").addEventListener("click", function () {
  let array = randNum();
  let coefficient = document.getElementById("second--value").value;

  let multipliedArray = multiplyArrCoef(array, coefficient);
  let result =
    "Massiv:<br>" +
    array +
    "<br>Koeffitsiyent:<br>" +
    coefficient +
    "<br>Natija:<br>" +
    multipliedArray;

  innerHtml("second--ans", result);
});

//

// 3. **Massivdagi musbat sonlar yig'indisi**:
//  Massivdan musbat sonlarni tanlab, ularning yig'indisini hisoblang.
function ngtNumSum(arr) {
  let sum = 0;

  let filt = arr.filter(function (value) {
    return value > 0;
  });

  filt.forEach((value) => {
    sum += value;
  });

  return sum;
}

document.getElementById("third--btn").addEventListener("click", function () {
  let array = randNgtNum();

  alert("error");

  let result =
    " Massiv: <br> " + array + " <br> Natija:<br> " + ngtNumSum(array);

  innerHtml("third--ans", result);
});

//

// 4. **Nolni oxiriga o‘tkazing**: Berilgan massivdagi barcha
// `0`larni massiv oxiriga ko‘chiring, qolgan tartib o‘zgarmasligi kerak.

//

function moveZerosToEnd(arr) {
  let nonZeros = arr.filter((value) => value !== 0);

  let zeros = arr.filter((value) => value == 0);

  return nonZeros.concat(zeros);
}

document.getElementById("four--btn").addEventListener("click", function () {
  let array = randNgtNum();

  let result =
    "Massiv: <br> " + array + " <br> Natija:<br> " + moveZerosToEnd(array);

  innerHtml("four--ans", result);
});

// 5. **Eng ko'p takrorlangan elementni toping**: Massivda eng ko‘p
//  uchraydigan elementni va uning sonini qaytaruvchi funksiya yozing.

function mostFrequentElement(arr) {
  let frequencyMap = {};

  arr.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let maxElement = arr[0];
  let maxCount = 0;

  for (let key in frequencyMap) {
    if (frequencyMap[key] > maxCount) {
      maxElement = key;
      maxCount = frequencyMap[key];
    }
  }

  return { element: maxElement, count: maxCount };
}

document.getElementById("five--btn").addEventListener("click", function () {
  let array = randNum();

  let result = mostFrequentElement(array);
  let res =
    "Massiv:<br> " +
    array +
    "<br>Eng ko'p uchraydigan element:<br> " +
    result.element +
    "<br> Takrorlanish soni: <br>" +
    result.count;
  innerHtml("five--ans", res);
});

// 6. **Massivni ichma-ich massivlardan tozalang**: Ichma-ich massivlardan iborat
// massiv berilgan. Uni faqat bir darajali massivga o‘tkazing (Flatten array).

// https://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript

function flatten(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}

document.getElementById("six--btn").addEventListener("click", function () {
  let array = [1, [2, 3, 5, 44], [44, 443, 3, [5223, 23, [622, 7]]], 8];

  let result = flatten(array);
  let res =
    "Massiv:<br> " +
    JSON.stringify(array) +
    "<br>NAtija<br>" +
    result.join(" ");
  innerHtml("six--ans", res);
});

//
// 7. **Ikki massivni birlashtiring**: Ikkita massiv berilgan, ularni birlashtirib,
//  takroriy elementlarni olib tashlang.
function mergeUniqueArr(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

document.getElementById("seven--btn").addEventListener("click", function () {
  let array1 = randNum();
  let array2 = randNum();

  let result = mergeUniqueArr(array1, array2);
  let res =
    "1-massiv:<br> " +
    array1.join(", ") +
    "<br>2-massiv:<br> " +
    array2.join(", ") +
    "<br>Birlashtirilgan massiv:<br> " +
    result.join("  ");

  innerHtml("seven--ans", res);
});

// 8. **Massiv elementlarini toq/juft qilib ajrating**: Massivdagi toq va juft
//  elementlarni alohida massivlarga ajratib qaytaring.
function evenArr(arr) {
  return arr.filter((value) => value % 2 == 0);
}
function oddArr(arr) {
  return arr.filter((value) => value % 2 == 1);
}

document.getElementById("eight--btn").addEventListener("click", function () {
  let array = randNum();

  let resEven = evenArr();
  let resOdd = oddArr();

  let res =
    "Massiv:<br>" +
    array +
    "<br>Juft sonlar massivi:<br>" +
    resEven +
    "<br>Toq sonli massiv:<br>" +
    resOdd;

  innerHtml("eight--ans", res);
});

// 9. **Massivda ma'lum qiymat borligini tekshirish**:
//  Massiv va qiymat berilgan. Funksiya
// massiv ichida qiymat mavjud bo‘lsa `true`, aks holda `false` qaytarsin.
function containsValue(arr, value) {
  return arr.includes(value);
}

document.getElementById("nine--btn").addEventListener("click", function () {
  let array = randNum();
  let searchValue = parseInt(document.getElementById("nine--value").value);

  let res =
    "Massiv:<br>" +
    array +
    "<br>Natija: <br>" +
    containsValue(array, searchValue);
  innerHtml("nine--ans", res);
});

//
// 10. **Massivdagi eng katta va eng kichik elementni toping**: Massivdagi eng katta
//  va eng kichik elementlarni qaytaruvchi funksiya yozing.
function findMaxMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return { max, min };
}

document.getElementById("ten--btn").addEventListener("click", function () {
  let array = randNum();

  let { max, min } = findMaxMin(array);

  let result =
    "Massiv<br>" +
    array +
    "<br>Eng katta element:<br>" +
    max +
    "<br>Eng kichik element:<br> " +
    min;

  innerHtml("ten--ans", result);
});

// ### Obyektlar bilan ishlash
// 11. **Obyektni tartiblang**: Obyekt ichidagi kalitlari bo‘yicha
//  tartiblangan yangi obyekt hosil qiling.

function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  return sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

document.getElementById("eleven--btn").addEventListener("click", function () {
  const obj = {
    h: 3,
    a: 1,
    b: 2,
    i: 4,
  };

  const sortedObject = sortObjectKeys(obj);

  let result =
    "Asl obyekt:<br>" +
    JSON.stringify(obj, null, 2) +
    "<br>Tartiblangan obyekt:<br>" +
    JSON.stringify(sortedObject, null, 2);

  innerHtml("eleven--ans", result);
});

// 12. **Obyekt kalitlarini va qiymatlarini alohida massivga o‘tkazing**: Obyektdagi barcha
// kalitlar va qiymatlar alohida-alohida massivda qaytarilsin.
function objectToArrays(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return { keys, values };
}

document.getElementById("twelve--btn").addEventListener("click", function () {
  const obj = {
    name: "Oyatillo",
    age: 21,
    city: "Fergana",
    profession: "Student Najot talim",
  };

  const { keys, values } = objectToArrays(obj);

  let result =
    "Asl obyekt:<br>" +
    JSON.stringify(obj, null, 2) +
    "<br>Kalitlar:<br>" +
    JSON.stringify(keys, null, 2) +
    "<br>Qiymatlar:<br>" +
    JSON.stringify(values, null, 2);

  innerHtml("twelve--ans", result);
});

// 13. **Obyekt birlashtirish**: Ikkita obyekt berilgan. Ularni birlashtirib, umumiy
// kalitlarni yangilash orqali natijaviy obyekt yarating.
// 13. **Obyekt birlashtirish**: Ikkita obyekt berilgan.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

document.getElementById("thirteen--btn").addEventListener("click", function () {
  const object1 = {
    name: "Oyatillo",
    age: 21,
    city: "Fergana",
  };

  const object2 = {
    lastName: "Toshtemirov",
    profession: "Student",
    country: "Uzbekistan",
  };

  const mergedObject = mergeObjects(object1, object2);

  let result =
    "Obyekt 1:<br>" +
    JSON.stringify(object1, null, 2) +
    "<br>Obyekt 2:<br>" +
    JSON.stringify(object2, null, 2) +
    "<br>Birlashtirilgan obyekt:<br>" +
    JSON.stringify(mergedObject, null, 2);

  innerHtml("thirteen--ans", result);
});

// 14. **Qiymatlarni hisoblash**: Berilgan obyekt qiymatlarining umumiy
// yig‘indisini hisoblang (qiymatlar sonlar bo'lishi kerak).
// 14. **Qiymatlarni hisoblash**: Berilgan obyekt qiymatlarining umumiy yig‘indisini hisoblang.

function sumObjectValues(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] == "number") {
      sum += obj[key];
    }
  }

  return sum;
}

document.getElementById("fourteen--btn").addEventListener("click", function () {
  const myObject = {
    a: 10,
    b: 20,
    c: "Null",
    d: "NaN",
    s: 66,
    e: "salom",
  };

  let result =
    "Berilgan obyekt:<br>" +
    JSON.stringify(myObject, null, 2) +
    "<br>Qiymatlar yig'indisi:<br>" +
    sumObjectValues(myObject);

  innerHtml("fourteen--ans", result);
});

// 15. **Kalitni qayta nomlash**: Obyekt ichidagi bir
// kalit nomini yangi nomga o'zgartiring va qaytaring.

function renameKey(obj, oldKey, newKey) {
  if (oldKey in obj) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  return obj;
}

document.getElementById("fiveteen--btn").addEventListener("click", function () {
  let oldKey = document.getElementById("old--value").value;
  let newKey = document.getElementById("new--value").value;

  const myObject = {
    name: "Oyatillo",
    age: 21,
    city: "Tashkent",
  };

  const updatedObject = renameKey(myObject, oldKey, newKey);

  let result = "Yangi obyekt:<br>" + JSON.stringify(updatedObject, null, 2);

  innerHtml("fiveteen--ans", result);
});

//
// 16. **Kalitni olib tashlash**: Berilgan obyekt va kalit
// orqali kalitni olib tashlab, yangi obyekt qaytaring.

function removeKey(obj, keyToRemove) {
  const newObj = { ...obj };

  delete newObj[keyToRemove];

  return newObj;
}

document.getElementById("sixteen--btn").addEventListener("click", function () {
  const myObject = {
    name: "Oyatillo",
    age: 21,
    city: "Tashkent",
  };

  let keyToRemove = document.getElementById("remove--value").value;
  let updatedObject = removeKey(myObject, keyToRemove);

  let result =
    "Obyekt<br>" +
    JSON.stringify(myObject, null, 2) +
    "<br>Yangi obyekt:<br>" +
    JSON.stringify(updatedObject, null, 2);

  innerHtml("sixteen--ans", result);
});

// 17. **Bir xil kalitli obyektlarni birlashtirish**: Berilgan massiv ichidagi
// obyektlarni bir xil kalit bo‘yicha guruhlab, yangi obyekt yarating.

function groupByKey(objectsArray) {
  const result = {}; // Natijaviy obyekt

  objectsArray.forEach((obj) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(obj[key]);
    });
  });

  return result;
}

document
  .getElementById("seventeen--btn")
  .addEventListener("click", function () {
    const objectsArray = [
      { name: "Oyatillo", age: 21 },
      { name: "Zuhriddin", age: 18 },
      { name: "Muslimbek", age: 18 },
      { name: "Avazbek", age: 17 },
    ];

    const groupedObject = groupByKey(objectsArray);

    let result =
      "Obyekt<br>" +
      JSON.stringify(objectsArray, null, 2) +
      "<br>Birlashtirilgan obyekt:<br>" +
      JSON.stringify(groupedObject, null, 2);

    innerHtml("seventeen--ans", result);
  });

// 18. **Obyekt ichida massivlarni yig'ish**: Obyekt ichidagi barcha
// massivlarni bitta massivga yig‘ing va natijani qaytaring.
// 18. **Obyekt ichida massivlarni yig'ish**: Obyekt ichidagi barcha massivlarni bitta massivga yig‘ing va natijani qaytaring.

function collectArrays(obj) {
  let result = [];

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      result = result.concat(obj[key]);
    } else if (typeof obj[key] == "object" && obj[key] != null) {
      result = result.concat(collectArrays(obj[key]));
    }
  }

  return result;
}

document
  .getElementById("eightteen--btn")
  .addEventListener("click", function () {
    const obj = {
      a: [1, "salom", 3],
      b: { c: [4, 5], d: [6, "text"] },
      e: [8, "olam"],
      f: { g: { h: ["string"] } },
    };

    const collectedArrays = collectArrays(obj);

    let result =
      "Obyekt<br>" +
      JSON.stringify(obj, null, 2) +
      "Yig'ilgan massiv:<br>" +
      collectedArrays.join(", ");

    innerHtml("eightteen--ans", result);
  });

// 19. **O‘xshash obyektlarni chiqarish**:
//  Berilgan ikkita massiv ichidagi obyektlarning umumiy qismlarini toping.
function findCommonObjects(arr1, arr2) {
  return arr1.filter(function (obj1) {
    return arr2.some(function (obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    });
  });
}

document.getElementById("nineteen--btn").addEventListener("click", function () {
  const array1 = [
    { id: 1, name: "Oyatillo" },
    { id: 2, name: "Avazbek" },
    { id: 3, name: "Hayotbek" },
  ];

  const array2 = [
    { id: 2, name: "Avazbek" },
    { id: 4, name: "Muslimbek" },
    { id: 3, name: "Dilxushbek" },
  ];

  const commonObjects = findCommonObjects(array1, array2);

  let result =
    "1-Massiv:<br>" +
    JSON.stringify(array1) +
    "<br>2-Massiv:<br>" +
    JSON.stringify(array2) +
    "<br>Umumiy obyektlar:<br>" +
    commonObjects
      .map(function (obj) {
        return JSON.stringify(obj);
      })
      .join("<br>");

  innerHtml("nineteen--ans", result);
});

// 20. **Obyektning chuqurligini aniqlash**:
//  Obyekt ichma-ich obyektlardan tashkil topgan bo‘lsa,
//  uning chuqurligini (depth) topadigan funksiya yozing.

// https://stackoverflow.com/questions/13523951/how-to-check-the-depth-of-an-object
// 20. **Obyektning chuqurligini aniqlash**: Obyekt ichma-ich obyektlardan tashkil topgan bo‘lsa, uning chuqurligini (depth) topadigan funksiya yozing.

function getObjectDepth(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  const depths = Object.values(obj).map(function (value) {
    getObjectDepth(value);
  });

  return Math.max(...depths) + 1;
}
document.getElementById("twenty--btn").addEventListener("click", function () {
  const exampleObject = {
    a: 5,
    b: {
      c: {
        d: 122,
        e: {
          f: "asl3",
        },
      },
    },
    g: {
      h: "salom",
    },
  };

  const depth = getObjectDepth(exampleObject);
  let result =
    "Obyekt<br>" + JSON.stringify(exampleObject) + "<br>Natija:<br>" + depth;

  innerHtml("twenty--ans", result);
});

// ### String bilan ishlash
// 21. **Palindromni tekshirish**: Berilgan so‘z yoki
//  jumlaning palindrom ekanligini tekshiruvchi funksiya
// yozing (bo‘sh joy va katta-kichik harflarni inobatga olmang).

function isPalindrome(input) {
  let cleanedInput = input.toLowerCase().replaceAll(" ", "").trim("");

  let reversedInput = cleanedInput.split("").reverse().join("");

  return cleanedInput === reversedInput;
}

document.getElementById("twone--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("twone--value").value;
  let result =
    "Satr:<br>" + inputValue + "Natija:<br>" + isPalindrome(inputValue)
      ? "Palindrom"
      : "Palindrom emas";

  innerHtml("twone--ans", result);
});

// 22. **So‘zlarni tersga o‘girish**: Berilgan jumladagi so‘zlarni
// teskari tartibda joylashtiruvchi funksiya yozing.
// ### String bilan ishlash
// 22. **So‘zlarni tersga o‘girish**: Berilgan jumladagi so‘zlarni teskari tartibda joylashtiruvchi funksiya yozing.

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

document.getElementById("twtwo--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("twtwo--value").value;
  let result =
    "Satr<br>" + inputValue + "Natija:<br>" + reverseWords(inputValue);

  innerHtml("twtwo--ans", result);
});

// 23. **Eng uzun so‘zni toping**: Berilgan jumladagi eng uzun so‘zni topib, uni qaytaruvchi funksiya yozing.

function findLongestWord(sentence) {
  let words = sentence.split(" ");

  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

document.getElementById("twthree--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("twthree--value").value;
  let result =
    "Satr:<br>" +
    inputValue +
    "<br>Eng uzun satr<br>" +
    findLongestWord(inputValue);

  innerHtml("twthree--ans", result);
});

// 24. **Bir harfni ko‘paytirish**: Berilgan string ichidagi ma’lum
// bir harfni ko‘paytirish kerak.

function repeatCharacter(str, repeatEl) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (str[i] == repeatEl) {
      result += repeatEl;
    }
  }
  return result;
}

document.getElementById("twfour--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("twfour--value").value;
  let charToRepeat = document.getElementById("twfour--repeat--value").value;
  let result =
    "SAtr<br>" +
    inputValue +
    "<br>Natija:<br>" +
    repeatCharacter(inputValue, charToRepeat);

  innerHtml("twfour--ans", result);
});

// 25. **Stringdan raqamlarni olib tashlash**: Berilgan string
//  ichidan barcha raqamlarni olib tashlab, qolgan qismni qaytaring.

function removeNumbers(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] === " ") {
      string += str[i];
    }
  }
  return string;
}

document.getElementById("twfive--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("twfive--value").value;
  let result =
    "Satr<br>" + inputValue + "<br>Natija<br>" + removeNumbers(inputValue);

  innerHtml("twfive--ans", result);
});

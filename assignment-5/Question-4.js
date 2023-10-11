// Write a program deepClone that takes an object as input and returns a deep copy of that object.
// The function should handle nested objects and arrays.

const book = {
  title: "C++",
  genre: "Programming",
  publish: "1985",
  greet: {
    greet: {
      greet: "Good morning",
    },
  },
  arr: [3, 4, 3, 2, 1],
};

const getDeepCopy = function (originalObject) {
  if (typeof originalObject !== "object") {
    return originalObject;
  }
  const deepCopy = Array.isArray(originalObject) ? [] : {};
  for (key in originalObject) {
    const value = originalObject[key];
    deepCopy[key] = getDeepCopy(value);
  }
  return deepCopy;
};

const deepCopy = getDeepCopy(book);
book.greet.greet.greet = "HEllo How are you";
console.log(book);
console.log(deepCopy);

/*
Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
*/

const obj = {
  a: 1,
  b: { c: 2, d: [3, [4, 7, 8]] },
};

const objcopy = function (obj, parent) {
  const finobj = {};
  const generateFlatObject = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        generateFlatObject(value, newParent + ".");
      } else {
        finobj[newParent] = value;
      }
    }
  };
  generateFlatObject(obj, parent);

  return finobj;
};

console.log(objcopy(obj, ""));

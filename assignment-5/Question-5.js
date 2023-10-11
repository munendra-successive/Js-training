/*
  Write a program flattenObject that takes an object with nested properties 
  and returns a flat object with the nested properties transformed into dot-separated properties. 
  The function should handle nested objects and arrays.
  const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
  };
  Output: { a: 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
  */

const normalObject = {
  a: 1,
  b: { c: 2, d: [3, [4, 7, 8]] },
};

const getFlattenObject = function (originalObject, parent) {
  const flattenObject = {};
  const generateFlatObject = (originalObject, parent) => {
    for (let key in originalObject) {
      const newParent = parent + key;
      const value = originalObject[key];
      if (typeof value === "object") {
        generateFlatObject(value, newParent + ".");
      } else {
        flattenObject[newParent] = value;
      }
    }
  };
  generateFlatObject(originalObject, parent);

  return flattenObject;
};

console.log(getFlattenObject(normalObject, ""));

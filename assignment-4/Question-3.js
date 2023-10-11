// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

let str = "abcabcdabbcc";
const obj = {};
str.split("").forEach(function (element) {
  if (obj[element] === undefined) {
    obj[element] = 1;
  } else {
    obj[element]++;
  }
});
let ans = "";
Object.entries(obj).forEach(([key, value]) => {
  ans += key + value;
});
console.log(ans);

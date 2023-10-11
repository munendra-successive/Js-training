// 2. Write a program to reverse a string ("Hello John" => "olleH nhoJ")

let str = "Hello John".split(" ");
let ans = "";
for (let index in str) {
  ans += str[index].split("").reverse().join("") + " ";
}
console.log(ans);

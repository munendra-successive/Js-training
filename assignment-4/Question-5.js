// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let str = "    hello john doe    ".trim().split(" ");
for (let i = 1; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
let ans = str.join("");
console.log(ans);

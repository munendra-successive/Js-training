// 1. Write a program to iterate over object.

const book = {
  title: "C++",
  genre: "Programming",
  publish: "1985",
};

Object.keys(book).forEach(function (key) {
  console.log(`${key}: ${book[key]}`);
});

const book={
    title: "C++",
    genre : "Programming",
    publish:"1985"
 };


 for(let key in book)
 {
    console.log(`${key}: ${book[key]}`);
 }


console.log("-------------------------");


 Object.keys(book).forEach(function(key)
 {
   console.log(`${key}: ${book[key]}`);
 });
   

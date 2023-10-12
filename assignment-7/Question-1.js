// 1. Give an example of using a callback
//    function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const cb = (data) => {
  console.log(data);
};
async function getAllUsers(callBack) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    callBack(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers(cb);

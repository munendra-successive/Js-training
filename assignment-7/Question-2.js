// 2. Give an example of using multiple callback functions in a single function in JavaScript

const cb1 = (data) => {
  console.log(data);
};

const cb2 = (data) => {
  console.log(data);
};

async function handleCallBack(callBack1, callBack2) {
  try {
    const responseOne = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const responseTwo = await fetch("https://randomuser.me/api/");
    const dataOne = await responseOne.json();
    const dataTwo = await responseTwo.json();
    callBack1(dataOne);
    callBack2(dataTwo);
  } catch (error) {
    console.log(error);
  }
}
handleCallBack(cb1, cb2);

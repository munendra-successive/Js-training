// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) {
//    setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 1000);
}

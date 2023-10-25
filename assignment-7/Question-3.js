/* 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) {
    setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })  */
 
function fetchData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Fetched successfully")
            //reject("Failed")
        },1000)
       
    })
}

fetchData().then(response => { console.log(response);}).catch(error=>{console.log(error);})
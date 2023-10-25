/*   Create a function that performs multiple asynchronous operations in parallel using async/await and 
   waits for all of them to complete before returning the results. */

async function parallelAsyncOperations()
{
    const data1 = fetch("https://catfact.ninja/fact").then(response => response.json()).then(response=>response);
    const data2 = fetch("https://catfact.ninja/fact").then(response=>response.json()).then(response=>response);
    const data3 = fetch("https://catfact.ninja/fact").then(response=>response.json()).then(response=>response);
    const response = await Promise.all([data1,data2,data3]);
    return response;
}
parallelAsyncOperations().then(function(result){
    console.log(result);
})
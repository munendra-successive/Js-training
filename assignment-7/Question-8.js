// Create a function that fetches data from multiple APIs in parallel and 
// then performs some operation on the combined data, using async/await.

async function dataMultipleApi()
{
    const data1 = fetch("https://catfact.ninja/fact").then(response => response.json()).then(response=>response);
    const data2 = fetch("https://catfact.ninja/fact").then(response=>response.json()).then(response=>response);
    const data3 = fetch("https://catfact.ninja/fact").then(response=>response.json()).then(response=>response);
    const response = await Promise.all([data1,data2,data3]);
    return response;
}

dataMultipleApi().then(function(response){
    let allFacts ="";
    for(let index=0;index<response.length;index)
    {
        Object.keys(response[index]).forEach(function(item)
        {
            console.log(item.fact);
        })
            
        
    }
})

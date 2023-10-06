// Write a program to print fibonaaci series

/* It will print the fibonaaci sequence till the given term */
let fibArr=[0,1]
let term1=0,term2=1,term3,i=3;
let no_of_terms = 6;
while(i<=no_of_terms)
{
    term3=term1+term2;
    fibArr.push(term3);
    term1=term2;
    term2=term3;
    i++;
}
console.log(fibArr);
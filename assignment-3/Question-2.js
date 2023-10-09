// Write a program to display following output as shown in figure

/*
 1. 
    1
    2 3
    4 5 6
    7 8 9 10

*/

var no_of_rows=4;
var j=1;
for(let i=0;i<no_of_rows;i++)
{
    let s ="";
    for(let k=0;k<=i;k++)
    {
        s+=" "+j;
        j++;
    }
    console.log(s);
}

/*
 2. 
    1
    2 2
    3 3 3 
    4 4 4 4

*/



var no_of_rows=4;
var j=1;
for(let i=0;i<no_of_rows;i++)
{
    let s = "";
    for(let k=0;k<=i;k++)
    {
        s+=" "+j;
    }
    j++;
    console.log(s);
}


/*
 3. 
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1

*/

var no_of_rows = 5;
var j = no_of_rows;
for(let i=0;i<no_of_rows;i++)
{
    let s = "";
    for(let k=1;k<=j;k++)
    {
        s+=k+" ";
    }
    j--;
    console.log(s);
}

/*
 4. 
    1 
    1 2
    1 2 3 
    1 2 3 4
    1 2 3 4 5

*/
var no_of_rows = 5;
for(let i=0;i<no_of_rows;i++)
{
    let j = 1;
    let s = "";
    for(let k=0;k<=i;k++)
    {
        s+=j+" ";
        j++;
    }
    console.log(s);
}
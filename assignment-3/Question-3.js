// Write a program to display Diamond Pattern

/* 

       *
      *  *
    *  *  *
  *  *  *  *
 *  *  *  * * 
  *  *  *  *
    *  *  *
     *  *
       *

*/



let no_of_rows = 7;
for(let i=0;i<no_of_rows;i++)
{ 
    let s =" ";
    for(let j=0;j<no_of_rows-i+1;j++)
    {
        s+=" ";
    }
    for(let j=0;j<i+1;j++)
    {
        s+="* ";
    }
    console.log(s);              
}            
for(let i=1;i<no_of_rows;i++)
{
    let s="";
	for(let j=0;j<=i+2;j++)
	{
		s+=" ";
	}
	for(let j=0;j<no_of_rows-i;j++)
	{
		s+="* ";
	}
	console.log(s);
}



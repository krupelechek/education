function doMath(x, znak, y){

    if (znak === '+') {
       return x + y;
     } 
     if (znak === '-') {
       return x - y;
     } 
     if (znak === '/') {
       return x / y;
     } 
     if (znak === '*') {
       return x * y;
     } 
     if (znak === '^') {
       return x ^ y;
     } 
     if (znak === '%') {
       return x % y;
     } 
     
   }
   var sum = doMath(5, '+' ,7);
   
   console.log(sum);
   
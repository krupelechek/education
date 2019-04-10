A = [];
A.length= +prompt('insert number');

for(var i = 0; i < A.length; i++){
    A[i] =  Math.floor(Math.random()*100)+15;
}
console.log(A);
for(var i = 0; i < A.length-1; i = i + 2){
    var temp = A [i];
    A [i] = A [i + 1];
    A [i + 1] = temp; 
}
console.log(A);
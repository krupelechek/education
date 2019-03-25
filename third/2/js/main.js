A = [];
A.length = 10;
B = [];


for(var i = 0; i < A.length; i++){
    A[i] =  Math.floor(Math.random()*100)+15;
}

console.log(A);

var min = A[0];
var max = A[0];
var maxIndex = 0;
var minIndex = 0;

for(var i = 0; i < A.length; i++){
    if(A[i] < min){
        min = A[i];
        minIndex = i;
    }   
    if(A[i]>max){
        max = A[i];
        maxIndex = i;
    }
}

var temp = A[maxIndex];
A[maxIndex] = A[minIndex];
A[minIndex] = temp;

console.log(A);

if(maxIndex<minIndex){
    var temp = maxIndex;
    maxIndex = minIndex;
    minIndex = temp;
}

for(minIndex++; minIndex < maxIndex; minIndex++){
    B[B.length] = A[minIndex];
}

console.log(B);

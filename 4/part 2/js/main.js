A = [];
A.length= 20;

for(var i = 0; i < A.length; i++){
    A[i] =  Math.floor(Math.random()*100)+15;
}
console.log(A);
var max = A[0];
var min = A[0];
for(var i=1; i < A.length; i++){
    if(A[i]>max){
        max=A[i];
    }
    else if(A[i]<min){
        min=A[i];
    }
}
console.log( 'max: ' + max, 'min: ' + min);
console.log( 'difference: ' + (max - min));

var sum = 0;

for(var i=0; i<A.length; i++){
    sum = A[i]+sum;
}
var avarage = sum / A.length;

console.log( 'sum: '+ sum, 'avarage: ' + avarage);

for(var i=0; i<A.length; i++){
    if(A[i] > avarage){
        console.log(A[i]);
    }
}
console.log("");

var a = +prompt('insert a');
var b = +prompt('insert b');

for(var i=0; i<A.length; i++){
    if(A[i]>a && A[i]<b){
     console.log(i);
    }
}

for (var i=0; i<A.length; i++){
    for (var j = i+1; j<=A.length-1; j++){
        if (A[i]===A[j]){
            A.splice(j,1);
        }
    }
}

console.log( 'unique: ' + A);

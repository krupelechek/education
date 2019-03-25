A = [];
A.length = 50;
B = [];



for(var i = 0; i < A.length; i++){
    A[i] =  Math.floor(Math.random()*100)+15;
}

for(var i = 0; i < A.length; i++){
    var isPrime = true;
    for(var k = 2; k < A[i]; k++){
        if(A[i]%k==0){
           isPrime = false;
           break;
        } 
    }

    if(isPrime==true){
        B[B.length] = A[i]
    }

}

if(B.length!=0){
    var max = B[0];
    var min=B[0];
    
    for(var i = 0; i < B.length; i++){
        if(B[i] < min){
            min = B[i];
        }   
        if(B[i]>max){
            max = B[i];
        }
    }
    console.log(B)
    console.log(min)
    console.log(max)
}




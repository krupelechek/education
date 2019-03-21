var a = +prompt("First value", 0);
var b = +prompt("Second value", 0);
var step = +prompt("Step", 0);

var sum = 0;

for(a; a <= b; a = a + step){ 
    var factor = 1; 
    for(var i = 2; i <= a; i++){ 
        factor = factor*i; 
    }
    console.log(factor); 
    sum = sum + factor; 
}

document.write(sum);
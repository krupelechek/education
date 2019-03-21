var count = +prompt("Insert the number", 0);

if(count <= 0){
    alert("Number must be greater than 0");
}

var a = 1;
var b = 0;
var result = 0;

for( var i = 0; i < count; i++){
    result = a + b;
    a = b;
    b = result;
    document.write(result + " ");
}

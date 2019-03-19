var a = +prompt('Insept a');
var b = +prompt('Insept b');
var c = +prompt('Insept c');
var result = a + b + c;
var even = []
document.write('Сума значений: ' + result + '<br>');
if (a % 2 == 0){
    even.push(a);
}
if (b % 2 == 0){
    even.push(b);
}
if (c % 2 == 0){
    even.push(c);
}
document.write('Парные числа: ' + even);
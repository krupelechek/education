var r = prompt('Insept r');
var h = prompt('Insept h');
var S = 2*Math.PI*r*h;
var V = S*h;
document.write('************** <br>');
document.write('Обьем цилиндра с площадью основы ' + '*S* ' + S + ', радиусом ' + '*R* ' + r + ' и высотой ' + '*H* ' + h + ' равен: <br>' );
document.write('------------------- <br>');
document.write('V = ' + V +'<br>');
document.write('------------------- <br>');
document.write('end.');
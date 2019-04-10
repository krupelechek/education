function f(a, b, c) {
    if (arguments.length === 1) {
        a = 2;
        b = 3;
    }

    function sum(a, b) {
        return a + b;
    }
    var resultOfCall;


    if (typeof c === 'function') {
        resultOfCall = c.call(f);
    }

  
    if (resultOfCall === undefined) {
        return sum(a, b);
    } else return resultOfCall;

}


var result = f(6);

console.log(result);

function ddd() {
    console.log("Hi");
};


var result2 = f(6, 7, ddd);

console.log(result2);



function number() {
    return 5;
}


var result3 = f(4, 5, number);

console.log(result3);

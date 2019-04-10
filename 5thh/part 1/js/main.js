function compareArray(firstArray, secondArray) {
    var firstArraySum = 0;
    var secondArraySum = 0;
    for (var i = 0; i < firstArray.length; i++) {
        firstArraySum = firstArraySum + firstArray[i];
    }
    for (var i = 0; i < secondArray.length; i++) {
        secondArraySum = secondArraySum + secondArray[i];
    }

    if (firstArraySum > secondArraySum) {
        return firstArray;
    } else return secondArray;
}



//TESTING

var a = [3,5,6,7,3,5,3]; 
var b = [2,5,3]; 

var result = compareArray(a,b);
console.log(result);

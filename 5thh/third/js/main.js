function stringReplace(str, arr){
    for(var i = 0; i<arr.length; i++){
       str = str.replace(new RegExp(arr[i], 'g'),'');
    }
   return str;
}

var newStr = stringReplace("Hello world", ['l','d']);
console.log(newStr);
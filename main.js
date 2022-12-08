var str = "*";
2
while (str.length<=7){
3
    console.log(str + "\n");
4
    str+="*";
5
}



for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }


  var size = 8;
var dot = "#";
var string = '';
for (var i = 0; i<size; i++){
  for (var j = 0; j<size; j++){
    if (i%2===0){
      if (j%2===0){
        string+=dot;
      }else{
        string+=' ';
      }
    }else{
      if (j%2===1){
        string+=dot;
      }else{
        string+=' ';
      }
    }
  }
  string+="\n";
}
console.log(string);
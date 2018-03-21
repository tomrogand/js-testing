function hello(){
  console.log("works");
}

var heading=document.querySelector('h1');
var customHeader = "something";
heading.textContent = customHeader;

var nummer1 = 2;
var nummer2 = 3;
var text = "fancy shit yo";
var myList = ["one", "two", "three"];
var myObject = {};


function multiplyByTwo(n1, n2){
  var val = n2 + n1;
  return val * 2;
}



function addText(s1){
  var el = document.getElementById("textChange");
  if (el.innerHTML === "rofl"){
      el.innerHTML = "null";
}
else {
  el.innerHTML = "rofl";
  }
}


function 









/*
(function(){
  "use strict";
  function greetMe(yourName) {
      alert('Hello ' + yourName);
}
greetMe('World');
})();


var word1 = "Hello ";
var word2 = "World";
var bothwords = word1 + word2;
document.write(bothwords);

var firstnum = 2;
var secondnum = 4;
var total = firstnum + secondnum;
document.write(total);
*/

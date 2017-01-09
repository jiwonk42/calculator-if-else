var myName = prompt("What's your name?");
var sayHello = function(name) {
	alert("Hello " + name);
};

sayHello(myName);
//---------------------------------------
var num1 = 5;
var num2 = 3;

var subNum = function(number1, number2) {
	alert(number1 - number2);
};

subNum(num1,num2);
//--------------------------------

var num1 = 3;
var num2 = 4;
var num3 = 5;

var timesTwo = function(number1, number2) {
alert(number1 * number2);
};

var timesThree = function (number1, number2, number3){
alert(number1*number2*number3);
};

timesTwo(num1,num2);
timesThree(num1,num2,num3);

//-----------------------------------

var num1 = 5
var num2 = 10

var divTwo = function(number1, number2) {
	alert(number1/number2);
};

divTwo(num1, num2);

var remainder = function(number1, number2) {
	alert(number2%number1);
}

remainder(num1, num2);

//------------------------------

var userName = prompt("Enter name");
var userAge = prompt("Enter Age");
var userFood = prompt("Enter favorite food");

var userInfo = function(){
	alert("My name is " + userName + ". I am " + userAge + ". My favorite food is " + userFood + ".");
}

userInfo();

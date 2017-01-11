//Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


// Everything below this line is user interface (or front-end) logic:
$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var numb1 = parseInt($("#add1").val());
		var numb2 = parseInt($("#add2").val());
		var resultAdd = add(numb1, numb2);
		$("button#add").click(function() {
			$("#outputAdd").text(resultAdd);
		});
	});
	$("form#add").submit(function(event){
		event.preventDefault();
		var numb1 = parseInt($("#add1").val());
		var numb2 = parseInt($("#add2").val());
		var resultSub = subtract(numb1, numb2);
		$("button#sub").click(function() {
			$("#outputSub").text(resultSub);
		});
	});
	$("form#add").submit(function(event){
		event.preventDefault();
		var numb1 = parseInt($("#add1").val());
		var numb2 = parseInt($("#add2").val());
		var resultMultiply = multiply(numb1, numb2);
		$("button#multiply").click(function() {
			$("#outputMultiply").text(resultMultiply);
		});
	});
	$("form#add").submit(function(event){
		event.preventDefault();
		var numb1 = parseInt($("#add1").val());
		var numb2 = parseInt($("#add2").val());
		var resultDivide = divide(numb1, numb2);
		$("button#divide").click(function() {
			$("#outputDivide").text(resultDivide);
		});
	});
});

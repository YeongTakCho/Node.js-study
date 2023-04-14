const {odd, eve} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
	if (str.length %2){
		return odd;
	}
	return eve;
}


console.log(checkNumber(10));
console.log(checkStringOddOrEven("123123"));
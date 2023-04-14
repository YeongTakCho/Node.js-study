const {odd, even} = require('./var');

function checkOddOrEven(Num){
	if (Num%2==1){
		return odd;
	}
	return even;
}

module.exports = checkOddOrEven;
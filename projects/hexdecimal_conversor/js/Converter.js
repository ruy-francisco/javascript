class Converter {

	convertDecimalToHexadecimal(input){
		var remainders = new Array();
		var quotient = input;

		while(quotient >= 1){
			remainders.push(quotient % 16);
			quotient = parseInt(quotient / 16)
		}

		return this.getHexDecimalRepresentationalString(remainders);
	}

	getHexDecimalRepresentationalString(input){
		var reversedArray = "";

		while(input.length > 0){
			var currentNumber = input.pop();
			reversedArray += this.getCorrectRepresentation(currentNumber);
		}

		return reversedArray;
	}

	getCorrectRepresentation(input){
		if(input < 10)
			return input;

		var lettersAndNumbers = {
			10: "A",
			11: "B",
			12: "C",
			13: "D",
			14: "E",
			15: "F"
		}

		return lettersAndNumbers[input];
	}

}
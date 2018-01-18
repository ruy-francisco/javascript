class Converter {

	convertDecimalToBinary(input){
		var remainders = new Array();

		do {
			var remainder = input % 2;
			remainders.push(remainder);

			input = parseInt(input / 2);
		} while (input >= 1);

		return this.convertArrayToReverseString(remainders);
	}

	convertArrayToReverseString(input){
		var reversedString = "";

		while(input.length > 0)
			reversedString += input.pop();

		return reversedString;
	}

}
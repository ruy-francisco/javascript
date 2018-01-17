$(document).ready(function () {
	
	var $conversorButton = $("#conversorButton");
	$conversorButton.on("click", function(){
		var hexDecimalNumber = $("#hexNumber").val();
		var hexDecimalDigits = hexDecimalNumber.split("");

		var decimalNumber = getDecimalNumber(hexDecimalDigits);
		$("#decimalNumber").val(decimalNumber);
	});
});

var getDecimalNumber = input => {
	var decimalNumber = 0;
	var inputLength = input.length;
	var power = 0;

	for (var i = (inputLength - 1); i >= 0; i--) {
		power++;

		if (isLetter(input[i])) {
			var correspondentNumber = getCorrespondentNumber(input[i]);
			decimalNumber += (correspondentNumber * Math.pow(16, power - 1));
			continue;
		}

		decimalNumber += (parseInt(input[i]) * Math.pow(16, power - 1));
	};

	return decimalNumber;
}

var isLetter = input => {
	var letters = "ABCDEF";
	return letters.indexOf(input.toUpperCase()) !== -1;
}

var getCorrespondentNumber = input => {
	var lettersAndNumbers = {
		"A": 10,
		"B": 11,
		"C": 12,
		"D": 13,
		"E": 14,
		"F": 15
	}

	return lettersAndNumbers[input.toUpperCase()];
}
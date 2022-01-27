// let str = '1. ddd@bbb@ccc' + "<br/>";

// document.write(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'

// let str1 = "2. js" + "<br/>";

// document.write((str1.toUpperCase()));

// let str2 = "3. JS";

// document.write((str2. toLowerCase()));

// let str = 'I am a hero!';
// console.log(str.length);

function formatCardNumber(element) {
	if(element.value.length > 14) {
		var position = element.selectionStart;
		element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
		if(element.value.length != 19) {
			element.setSelectionRange(position, position);
		}
	}
	else {
		element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
	}	
}

function showCardValue() {
	document.getElementById("cardNo").value = document.getElementById("cardNoSafe").value;
}

function hideCardValue(val) {
	document.getElementById("cardNoSafe").value = val;
	var len = val.length;
	if (len >= 14) {
		const regex = /\d{4}(?= \d{1})/g;
		const substr = "****";
		document.getElementById("cardNo").value = val.replace(regex, substr);
	}
}


//Секретний вагон.

const yourPlace = +prompt(`Введіть номер свого місця (від 1 до 54).`);
let compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
let upDown = "верхнє";
let sideUnside = "не бокове";

if (yourPlace % 2) {
	upDown = "нижнє";
}

if (yourPlace > 36) {
	compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
	sideUnside = "бокове";
}

const answer = `У вас ${upDown} ${sideUnside} місце у купе №${compartmentNumber}.`;
alert(answer);


//Калькулятор
let num1;
let num2;

let out = document.getElementById('out');

function plus() {
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1)
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2)

	out.innerHTML = num1 + num2;
}


function minus() {
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1)
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2)

	out.innerHTML = num1 - num2;
}


function multiplication() {
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1)
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2)

	out.innerHTML = num1 * num2;
}


function division() {
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1)
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2)

	out.innerHTML = num1 / num2;
}
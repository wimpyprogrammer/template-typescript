import add from 'template-typescript';

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const sum = document.getElementById('sum') as HTMLInputElement;

function recalculate() {
	const value1 = parseFloat(num1.value);
	const value2 = parseFloat(num2.value);
	sum.value = add(value1, value2).toString();
}

num1.addEventListener('keyup', recalculate);
num2.addEventListener('keyup', recalculate);

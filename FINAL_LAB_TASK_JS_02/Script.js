function square(){
	let value = document.getElementById('square').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('square').innerHTML = "";
}
function by(){
	let value = document.getElementById('by').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('by').innerHTML = "";
}
function divide(){
	let value = document.getElementById('divide').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('divide').innerHTML = "";
}
function f7(){
	let value = document.getElementById('7').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('7').innerHTML = "";
}
function f8(){
	let value = document.getElementById('8').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('8').innerHTML = "";
}
function f9(){
	let value = document.getElementById('9').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('9').innerHTML = "";
}
function multi(){
	let value = document.getElementById('multi').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('multi').innerHTML = "";
}
function f4(){
	let value = document.getElementById('4').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('4').innerHTML = "";
}
function f5(){
	let value = document.getElementById('5').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('5').innerHTML = "";
}
function f6(){
	let value = document.getElementById('6').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('6').innerHTML = "";
}
function minus(){
	let value = document.getElementById('minus').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('minus').innerHTML = "";
}
function f1(){
	let value = document.getElementById('1').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('1').innerHTML = "";
}
function f2(){
	let value = document.getElementById('2').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('2').innerHTML = "";
}
function f3(){
	let value = document.getElementById('3').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('3').innerHTML = "";
}
function plus(){
	let value = document.getElementById('plus').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('plus').innerHTML = "";
}
function plusMinus(){
	let value = document.getElementById('plus_minus').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('plus_minus').innerHTML = "";
}
function zero(){
	let value = document.getElementById('0').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('0').innerHTML = "";
}
function point(){
	let value = document.getElementById('point').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('point').innerHTML = "";
}
function eql(){
	let value = document.getElementById('eql').value;
	document.getElementsByTagName('h1')[0].innerHTML = value;
	document.getElementById('eql').innerHTML = "";
}
function ajax(){
	let num = document.getElementById('num').value;
	let xhttp = new XMLHttpRequest();

	xhttp.open('POST', 'Calculation.php', true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send('num=');
	xhttp.onreadystatechange = function(){

		document.getElementById('div1').innerHTML = this.responseText;
	}
}





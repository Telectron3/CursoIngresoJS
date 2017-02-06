/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Numero1 = parseInt(document.getElementById("numeroUno").value);
	var Numero2 = parseInt(document.getElementById("numeroDos").value);
	var Suma = Numero1 + Numero2;
	alert("La suma es: " + Suma);
	
}

function restar()
{
	var Numero1 = parseInt(document.getElementById("numeroUno").value);
	var Numero2 = parseInt(document.getElementById("numeroDos").value);
	var Resta = Numero1 - Numero2;
	alert ( "La resta es: " + Resta);

}

function multiplicar()
{ 
	var Numero1= parseInt(document.getElementById("numeroUno").value);
	var	Numero2 = parseInt (document.getElementById("numeroDos").value);
	var multiplicacion = Numero1 * Numero2;
	alert("La multiplicacion es: " + multiplicacion);

}

function dividir()
{
	var	Numero1= parseInt(document.getElementById("numeroUno").value);
	var Numero2 = parseInt(document.getElementById("numeroDos").value);
	var Divicion = Numero1 / Numero2;
	alert ("La divicion es: "+ Divicion);
}


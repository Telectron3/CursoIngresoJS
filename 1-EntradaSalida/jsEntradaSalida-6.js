/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numero1 = document.getElementById("numeroUno").value;
	var Numero2 = document.getElementById("numeroDos").value;
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	Suma = Numero2 + Numero1;
	alert("La suma es " + Suma);
}


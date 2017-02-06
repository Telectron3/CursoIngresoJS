/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Numero1 = parseInt(document.getElementById("numeroDividendo").value);
	var Numero2 = parseInt(document.getElementById("numeroDivisor").value);
	var Resto = Numero1%Numero2;
	alert ("El Resto es: "+ Resto);
}

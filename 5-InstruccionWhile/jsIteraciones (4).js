function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while (numero < 0 || numero > 9)
		{
			alert ("Numero erroneo");
			numero = prompt("ingrese un numero entre 0 y 9");
		}
	
	alert ("Numero correcto");
	document.getElementById("Numero").value = "Numero ingresado: " + numero + " y validado";
}//FIN DE LA FUNCIÓN
/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = document.getElementById("intentos");
var contador = 0;
function comenzar()
{
	numeroSecreto = parseInt(numeroSecreto = Math.random() * 100 + 1);
	console.log (numeroSecreto);
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	contador = contador + 1
	document.getElementById("intentos").value = contador;
	var numero = document.getElementById("numero").value;

		if (numeroSecreto == numero)
		{
			alert ("Usted es un ganador");
		}
		else if (numeroSecreto < numero)
		{
			alert ("Se paso");
					}
		else
		{
			alert ("Le falta");

		}

	
}
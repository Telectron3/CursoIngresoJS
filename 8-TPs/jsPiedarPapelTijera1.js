/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	 eleccionMaquina = Math.random() * 3 + 1;
	 eleccionMaquina = parseInt(eleccionMaquina);
	console.log (eleccionMaquina);

 if (eleccionMaquina == 1)

 		
 		{
 			eleccionMaquina = "piedra";
 			
 		}


 		else
 		{
 			if (eleccionMaquina == 2)
 			{
 				eleccionMaquina = "papel";
 				
 			}


 			else
 			{
 				eleccionMaquina = "tijera";
 				
 			}
 		}


}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();
	if (eleccionMaquina == "piedra" )
		{
			alert ("Es un empate ");
			
		}

		else
		{
			if (eleccionMaquina == "papel")
			{
				alert ("Perdiste :(");
				
			}
			else
			{
				alert ("Ganaste!!!");
				
			}
		}

}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();
	if (eleccionMaquina == "papel")
		{
			alert ("Es un empate");
			
		}

		else
		{
			if (eleccionMaquina == "piedra")
			{
				alert("Ganaste!!!");
				
			}
			else
			{
				alert ("Perdiste :(");
				
			}
		}

}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();
	if (eleccionMaquina == "tijera")
		{
			alert ("Es un empate");
			
		}
		else
		{
			if (eleccionMaquina == "papel")
			{
				alert ("Ganaste!!!");
				
			}
			else
			{
				alert("Perdiste :(");
				
			}
		}

}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var num = prompt("Ingrese un número");
	var cont = 0;

	for (var i = 1  ; i <= num ; i ++ ) 
		
		{
			if (num % i == 0)
			{
				cont ++;
				console.log (i);
				console.log ("Cantidad de divisores: " + cont);
			}

		}
}//FIN DE LA FUNCIÓN
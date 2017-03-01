function Mostrar()
{
	
	var num = prompt("Ingrese los numeros que desee");
	var cont = 0;
	
	for (var i = 1 ;i <= num  ; i ++ )
	{
			if (i % 2 == 0)
				
				{
				
					cont ++;
					alert ("Hay " + cont + " pares");
					alert (i);
				
				}
			


	}





}//FIN DE LA FUNCIÓN
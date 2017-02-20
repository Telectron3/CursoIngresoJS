function Mostrar()
{

	var contador=0;
	var num;
	var positivos=0;
	var negativos=0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cantidadCeros = 0; 
	var contPares = 0;
	var respuesta = true; 
	

	var primera = true;
	
	while(respuesta == true)
	{
		contador ++;
		num = prompt("Ingrese numero");
		num = parseInt(num)
		respuesta = confirm("Desea continuar");

				if (num > 0)
					{
						positivos = positivos + num;
						cantPositivos ++;
						console.log(cantPositivos);
					}
				else if (num < 0) 
					{
						negativos = negativos - num;
						cantNegativos ++;
						console.log(cantNegativos);
					}
				else
					{
						cantidadCeros ++;
						console.log(cantidadCeros);
					}
				if(num % 2 == 0)
					{
						contPares ++;
					}	

			
			
		
	}

		var	sumaPositivos = positivos ;
		sumaPositivos = parseInt(sumaPositivos);
		var sumaNegativos = negativos;
		sumaNegativos = parseInt(sumaNegativos);
		var promedioPositivos = sumaPositivos/cantPositivos;
		promedioPositivos = parseFloat(promedioPositivos);
		var promedioNegativos = sumaNegativos/cantNegativos;
		promedioNegativos = parseFloat(promedioNegativos);
		var difPyN = sumaPositivos - sumaNegativos;

	document.write("<h2> Cantidad de negativos:  </h2>" + cantNegativos);
	document.write("<h2> Cantidad de positivos:  </h2>" + cantPositivos);
	document.write("<h2> Cantidad de ceros: </h2>" + cantidadCeros);
	document.write("<h3> Cantidad de pares: </h3>" + contPares);
	document.write("<h4> Suma de positivos: </h4>" + sumaPositivos);
	document.write("<h4> Suma de negativos: </h4>" + "-" + sumaNegativos);
	document.write("<h5> Promedio de positivos: </h5>" + promedioPositivos);
	document.write("<h5> Promedio de negativos: </h5>" + promedioNegativos);
	document.write("<h1> Diferencia entre positivos y negativos: </h1>" + difPyN);
}//FIN DE LA FUNCIÓN
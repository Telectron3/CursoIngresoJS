function Mostrar()
{

	var contador=0;
	var num;
	var max; 
	var min; 
	var primera = true;
	
	var respuesta = true;

	while(respuesta == true)
	{
		contador ++;
		num = prompt("Ingrese numeros");	
		num = parseInt(num);
		respuesta = confirm("Desea continuar");
		if (primera)
			{
				primera = false;
				max = num;
				min = num;
			}
		else
			{
				if( num > max)
				{
					max = num;
				}
				if (num < min)
					{
						min = num;
					}
				
			}
				
	}

	 
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
		
		


}//FIN DE LA FUNCIÓN
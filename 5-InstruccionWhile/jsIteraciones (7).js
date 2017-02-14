function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while (respuesta != "si")
	{	
		respuesta = prompt ("Ingrese su respuesa");
		contador = contador + 1;
		acumulador = prompt ("Ingrese la cantidad de numero que usted quiera, cuando no quiera continuar coloque no ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
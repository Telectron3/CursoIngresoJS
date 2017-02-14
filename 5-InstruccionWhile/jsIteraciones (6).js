function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while (contador < 5)
	{
		contador = contador + 1;
		acumulador = prompt("Ingrese los numeros que desea que se sumen");
		acumulador = acumulador + acumulador;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var num;
	while (respuesta == true)
	{	
		
		contador = contador + 1;
		num = prompt("Ingrese numeros");
		num = parseInt(num);
		respuesta = confirm("Desea seguir agregando numeros");
		acumulador += num;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
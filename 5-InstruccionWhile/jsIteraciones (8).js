function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta = true;

	while (respuesta == true)
	{
		contador ++;
		num = prompt();
		num = parseInt(num);
		respuesta = confirm("Desea seguir agregando numeros");
		if (num >= 0)
			{
				positivo += num;
			}
		else
			{
				negativo*= num;
			}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
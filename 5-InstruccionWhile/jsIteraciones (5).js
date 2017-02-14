function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo.toLowerCase() != "f" &&  sexo.toLowerCase() != "m")
	{
		alert("Caracter incorrecto");
		sexo = prompt("ingrese f o m.");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
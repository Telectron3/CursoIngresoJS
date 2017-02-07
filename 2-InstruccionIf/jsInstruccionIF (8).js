function Mostrar()
{
//tomo la edad  

	var Edad = document.getElementById("edad").value;
	var Estado = document.getElementById("estadoCivil").value;
	if (Edad < 18 && Estado != "Soltero")
	{

	}
	else if (Edad >= 18 && Estado == "Soltero")
	{
		alert ("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
var Edad = document.getElementById("edad").value;
var Estado = document.getElementById("estadoCivil").value;


if (Edad < 18 && Estado != "Soltero")
{
	alert ("Es muy pequeño para No ser soltero");
}
	


}//FIN DE LA FUNCIÓN
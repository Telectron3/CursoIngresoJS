function Mostrar()
{
//tomo la edad  

var Edad = document.getElementById("edad").value;

if (Edad >= 18)
{
	alert ("Es mayor de edad");
}
else if(Edad >= 13 && Edad <= 17)
{
	alert(" Es adolecente"); 
}
else if (Edad <=12)
{
	alert ("Es un niño");
}


}//FIN DE LA FUNCIÓN
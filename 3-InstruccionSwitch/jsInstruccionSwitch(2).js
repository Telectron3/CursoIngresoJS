function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)
{
	
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Enero":
	case "Febrero":
	{
		alert("Ya pasamos el frio, ahora calor!!");
		break;
	}

	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	{
		alert("Falta para el Invierno");
		break;
	}

	case "Julio":
	case "Agosto":
	{
		alert ("Abrigate hace frio");
		break;
	}
}




}//FIN DE LA FUNCIÓN
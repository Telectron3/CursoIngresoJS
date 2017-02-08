function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var Nota = Math.floor((Math.random()*10) + 1);
	console.log(Nota);
	
	if (Nota >= 9)
		{
			alert ("Exelente");

		}
		else
		{
			if (Nota >=4 && Nota < 9)
			{
				alert ("Aprobo");
			}
			else
			{
				alert ("Vamos, la proxima se puede");
			}
		}

}//FIN DE LA FUNCIÓN
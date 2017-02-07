/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
 var Sueldo = parseInt(document.getElementById("sueldo").value);
 var importe= Sueldo * 0.10;
 var aumento = importe + Sueldo;
 document.getElementById("resultado").value = aumento;
	
}

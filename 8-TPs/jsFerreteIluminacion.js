/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
 {
 	var CantLamparas = parseFloat(document.getElementById("Cantidad").value);
 	var Marca = document.getElementById("Marca").value;
 	var PrecioDescuento = parseFloat(document.getElementById("precioDescuento").value);
  	var Lamparas = 35;
  	var Lamparas = parseFloat(Lamparas);
  	var Aumento = parseFloat(Aumento);
  	var PrecioTotal = parseFloat(PrecioTotal);
  	var Descuento = parseFloat(Descuento);
  	
  if (PrecioDescuento > 120 && CantLamparas >= 6)
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.50;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");

          }  
  	
   else if (CantLamparas >= 6 )
 
  		{
  			CantLamparas = Lamparas * CantLamparas;
  			Descuento = CantLamparas * 0.50;
  			document.getElementById("precioDescuento").value = CantLamparas - Descuento;
  			
  		} 

    else if (PrecioDescuento > 120 && CantLamparas == 5)
    {
      switch(Marca)
      {
        case "ArgentinaLuz":
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.40;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
          break;
        }

        default:
          {
            CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.30;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
          break;
          }

      }  
     }   
 
  	else if (CantLamparas == 5)
  	
  	{
  		switch (Marca)
  		{
  			
  			case "ArgentinaLuz":
  				{
 
  					CantLamparas = CantLamparas * Lamparas;
  					Descuento = CantLamparas * 0.40;
  					document.getElementById("precioDescuento").value =  CantLamparas-Descuento;
  					break; 
 
  				}
 
  			default:
  				{
  					CantLamparas = CantLamparas * Lamparas;
  					Descuento = CantLamparas * 0.30;
  					document.getElementById("precioDescuento").value = CantLamparas-Descuento;
  					break;
  				}
  		}
  		
  	}

    else if (PrecioDescuento > 120 && CantLamparas == 4)
    {
      switch(Marca)
      {
        case "ArgentinaLuz":
        case "FelipeLamparas":
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.25;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
          break;
        }
        default:
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.20;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
          break;
        }
      }
    }

 
  	else if (CantLamparas == 4)
  	
  	{
  		switch(Marca)
 
  		{
  			case "ArgentinaLuz":
  			case "FelipeLamparas":
  				{
  					CantLamparas = CantLamparas * Lamparas;
  					Descuento = CantLamparas * 0.25;
  					document.getElementById("precioDescuento").value = CantLamparas-Descuento;
  					break;
  				}
  			
  			default:
  				{
  					CantLamparas = CantLamparas * Lamparas;
  					Descuento = CantLamparas * 0.20;
  					document.getElementById("precioDescuento").value = CantLamparas-Descuento;
  					break;
  				}

 		   }
  	}

    else if (PrecioDescuento > 120 && CantLamparas == 3) 

    {
      switch(Marca)
      {
        case "ArgentinaLuz":
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.15;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
        }
        case "FelipeLamparas":
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.10;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
        }
        default:
        {
          CantLamparas = Lamparas * CantLamparas;
          Descuento = CantLamparas * 0.05;
          PrecioTotal = CantLamparas - Descuento;
          Aumento = PrecioTotal * 0.10;
          document.getElementById("precioDescuento").value = Aumento + PrecioTotal;
          alert ("Usted pago " + Aumento +" de IIBB");
        }
      }

    }
 
  	else if (CantLamparas == 3) 
  	
  		{
  			switch(Marca)
 
  			{
  				case "ArgentinaLuz":
  					{
  						CantLamparas = CantLamparas * Lamparas;
  						Descuento = CantLamparas * 0.15;
 						document.getElementById("precioDescuento").value = CantLamparas - Descuento;
  						break;
  					}
  				
  				case "FelipeLamparas":
  					{
  						CantLamparas = CantLamparas * Lamparas;
  						Descuento = CantLamparas * 0.10;
 						document.getElementById("precioDescuento").value = CantLamparas - Descuento;
  						break;
  					}
 				
 				default:
  					{
  						CantLamparas = CantLamparas * Lamparas;
  						Descuento = CantLamparas * 0.05;
  						document.getElementById("precioDescuento").value = CantLamparas - Descuento;
  						break;
  					}
  			}
 		}
 	}

//GG m
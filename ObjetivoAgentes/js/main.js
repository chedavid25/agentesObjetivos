
let gastoMensual = document.querySelector('.gastoMensual');
let condicionDeAgente = document.querySelector('.condicionDeAgente');
let btnCalcularObjetivo = document.querySelector('.btnCalcularObjetivo');
let botonCalcularObjetivo = document.querySelector('.botonCalcularObjetivo');
let respuestaInputs = document.querySelector('.respuestaInputs');

function calcularYMostrar() {
    let gastoMensualValor = parseFloat(gastoMensual.value);
    let gastoAnual = gastoMensualValor * 12;
    let condicionDeAgenteValor = parseFloat(condicionDeAgente.value) /100;
    let objetivo = gastoAnual / condicionDeAgenteValor;
    let objetivoEnDolares = objetivo.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    respuestaInputs.textContent = "El objetivo que deberías alcanzar es: " + objetivoEnDolares;
}

btnCalcularObjetivo.addEventListener('click', calcularYMostrar);


/* ------------------------------------------------------------------------------------------------------ */

/* LLamados a los inputs donde escribe el agente */

let objetivoAnual = document.querySelector('.objetivoAnual');
let ticketPromedio = document.querySelector('.ticketPromedio');
let preListingAcm = document.querySelector('.preListingAcm');
let acmCaptacion = document.querySelector('.acmCaptacion');
let captacionVenta = document.querySelector('.captacionVenta');
let carteraBusquedas = document.querySelector('.carteraBusquedas');
let carteraPropia = document.querySelector('.carteraPropia');

/* LLamados a las respuestas de gestión */


let respuestaCantidadPreListing = document.querySelector('.respuestaCantidadPreListing');
let respuestaCantidadAcm = document.querySelector('.respuestaCantidadAcm');
let respuestaCantidadCaptaciones = document.querySelector('.respuestaCantidadCaptaciones');
let respuestaCantidadVentas = document.querySelector('.respuestaCantidadVentas');
let btnCalcularGestion = document.querySelector('.btnCalcularGestion');
let respuestaComisionPromedio = document.querySelector('.respuestaComisionPromedio');





// Función para calcular y mostrar la gestión
function calcularGestion() {
    // Obtener los valores de los elementos
    let objetivoAnualValor = parseFloat(objetivoAnual.value);
    let ticketPromedioValor = parseFloat(ticketPromedio.value);
    let captacionVentaValor = parseFloat(captacionVenta.value)/100;
    let acmCaptacionValor = parseFloat(acmCaptacion.value)/100;
    let preListingAcmValor = parseFloat(preListingAcm.value)/100;
    
   

    
    
  
    // Calcular las gestiones y mostrar los resultados
    let comisionPromedio = ticketPromedioValor * 0.03;
    let cantidadVentas = objetivoAnualValor / comisionPromedio;
    let cantidadCaptaciones = cantidadVentas / captacionVentaValor;
    let cantidadAcm = cantidadCaptaciones / acmCaptacionValor;
    let cantidadPreListing = cantidadAcm / preListingAcmValor;
   


  
    // Mostrar los resultados en los elementos correspondientes
    
    respuestaCantidadVentas.textContent = `Cantidad de Ventas: ${cantidadVentas} anuales o ${(cantidadVentas/12).toFixed(2)} mensuales`;
    respuestaCantidadCaptaciones.textContent = `Cantidad de Captaciones: ${cantidadCaptaciones.toFixed(2)} anuales o ${(cantidadCaptaciones/12).toFixed(2)} mensuales`;
    respuestaCantidadAcm.textContent = `Cantidad de ACM: ${cantidadAcm.toFixed(2)} anuales o ${(cantidadAcm/12).toFixed(2)} mensuales`;
    respuestaCantidadPreListing.textContent = `Cantidad de Pre-Listings: ${cantidadPreListing.toFixed(2)} anuales o ${(cantidadPreListing/12).toFixed(2)} mensuales`;
    respuestaComisionPromedio.textContent  = "Tu comisión Promedio es de: $" + comisionPromedio.toFixed(2) + " y de bolsillo $" + (comisionPromedio * 0.45).toFixed(2);
    

    //respuestaComisionPromedio.style.backgroundColor = "#353535"
    //respuestaComisionPromedio.style.padding = "1rem"
    respuestaComisionPromedio.style.color = "#f0f0f0"
    respuestaComisionPromedio.style.borderRadius = "1rem"
    //respuestaCantidadPreListing.style.backgroundColor = "#353535"
    //respuestaCantidadPreListing.style.padding = "1rem"
    respuestaCantidadPreListing.style.color = "#f0f0f0"
    respuestaCantidadPreListing.style.borderRadius = "1rem"
    //respuestaCantidadAcm.style.backgroundColor = "#f0f0f0"
    //respuestaCantidadAcm.style.padding = "1rem"
    respuestaCantidadAcm.style.color = "#353535"
    respuestaCantidadAcm.style.borderRadius = "1rem"
    //respuestaCantidadCaptaciones.style.backgroundColor = "#353535"
    //respuestaCantidadCaptaciones.style.padding = "1rem"
    respuestaCantidadCaptaciones.style.color = "#f0f0f0"
    respuestaCantidadCaptaciones.style.borderRadius = "1rem"
    //respuestaCantidadVentas.style.backgroundColor = "#f0f0f0"
    //respuestaCantidadVentas.style.padding = "1rem"
    respuestaCantidadVentas.style.color = "#353535"
    respuestaCantidadVentas.style.borderRadius = "1rem"


}
  
  // Asignar la función al evento click del botón
  btnCalcularGestion.addEventListener('click', calcularGestion);


 

  window.onload = function() {
    let codigoAcceso = prompt("Escribe el codigo de acceso");

    if (codigoAcceso !== "imala2024") {
        window.location.href = "error.html";
    }
}



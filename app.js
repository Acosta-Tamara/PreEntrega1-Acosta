// Simulador interactivo de pago en cuotas

// Solicitar al usuario que ingrese el monto
let monto = parseFloat(prompt("Ingrese el monto:"));
let cuotas;
let pagoMensual;


// Verificar si el monto ingresado es válido
if (isNaN(monto) || monto <= 0) {
  alert("Por favor, ingrese un monto válido.");
} else {
  // Solicitar al usuario que ingrese el número de cuotas
  let cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

  // Verificar si el número de cuotas ingresado es válido
  if (isNaN(cuotas) || cuotas <= 0) {
    alert("Por favor, ingrese un número de cuotas válido.");
  } else {
    // Calcular el pago mensual y mostrarlo en cuotas
    let pagoMensual = monto / cuotas;



    // Mostrar el desglose de las cuotas utilizando un ciclo for
    console.log(`Desglose de cuotas para un monto de $${monto.toFixed(2)} en ${cuotas} cuotas:`);
    for (let i = 1; i <= cuotas; i++) {
      console.log(`Cuota ${i}: $${pagoMensual.toFixed(2)}`);
    }
  }
}


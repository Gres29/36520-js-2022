
var numero
function esPrimo(numero){
    numero = parseInt(prompt("Ingrese un número Entero"))
    if (numero == 0 || numero == 1 || numero == 4) alert("No es primo");
    
    for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) alert("No es primo");
	}
	// Si no se pudo dividir por ninguno de los de arriba, es primo
	alert("Es primo");
}

try {
    esPrimo(numero);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
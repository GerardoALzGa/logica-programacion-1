// Pedir los números
let valor1 = parseInt(prompt("Ingresa el primer número:"));
let valor2 = parseInt(prompt("Ingresa el segundo número:"));
let valor3 = parseInt(prompt("Ingresa el tercer número:"));

// Verificar si son iguales
if (valor1 === valor2 && valor2 === valor3) {
    alert("Los números son iguales");
} else {
    alert("Los números NO son iguales");
}

// Ordenar manualmente (sin usar sort)
let mayor, medio, menor;

if (valor1 >= valor2 && valor1 >= valor3) {
    mayor = valor1;
    if (valor2 >= valor3) {
        medio = valor2;
        menor = valor3;
    } else {
        medio = valor3;
        menor = valor2;
    }
} else if (valor2 >= valor1 && valor2 >= valor3) {
    mayor = valor2;
    if (valor1 >= valor3) {
        medio = valor1;
        menor = valor3;
    } else {
        medio = valor3;
        menor = valor1;
    }
} else {
    mayor = valor3;
    if (valor1 >= valor2) {
        medio = valor1;
        menor = valor2;
    } else {
        medio = valor2;
        menor = valor1;
    }
}

// Mostrar resultados
alert("Orden de mayor a menor: " + mayor + ", " + medio + ", " + menor);
alert("Orden de menor a mayor: " + menor + ", " + medio + ", " + mayor);

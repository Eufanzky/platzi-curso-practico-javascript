//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
   return (base * altura) / 2; 
}


console.groupEnd();

//Círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const pi = Math.PI;
console.log("pi es: " + pi);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro  = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area  = areaCuadrado(value);
    alert("El área del cuadrado es: " + area);
}
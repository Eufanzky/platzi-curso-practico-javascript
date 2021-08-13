//CÓDIGO DEL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//CÓDIGO DEL TRIÁNGULO
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
   return (base * altura) / 2; 
}


console.groupEnd();

//CÓDIGO DE CÍRCULO
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

//TRIÁNGULO ISÓSCELES
function alturaTranguloIsosceles(lado1, base) {
    return  Math.sqrt(lado1*lado1 - (base/2)*(base/2));
}
function perimetroTranguloIsosceles(lado,base) {
    return lado + lado + base;
}
function areaTranguloIsosceles(lado,base) {
    const altura = Math.sqrt(lado*lado - (base/2)*(base/2));
    return (base*altura) / 2;
}


//Aqui interactuamos con el HTML
//PARA EL CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);

    const perimetro  = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area  = areaCuadrado(value);
    alert("El área del cuadrado es: " + area);
}

//PARA EL TRIÁNGULO
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2"); 
    const inputBase = document.getElementById("InputTrianguloBase");
    const lado1 = parseFloat(inputLado1.value);
    const lado2 = parseFloat(inputLado2.value);
    const base = parseFloat(inputBase.value);
    const altura = Math.sqrt((lado1*lado1) - ((base/2)*(base/2)));

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triángulo es: " + perimetro);
}
function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2"); 
    const inputBase = document.getElementById("InputTrianguloBase");
    const lado1 = parseFloat(inputLado1.value);
    const lado2 = parseFloat(inputLado2.value);
    const base = parseFloat(inputBase.value);
    const altura = Math.sqrt((lado1*lado1) - ((base/2)^2));

    const area = areaTriangulo(base, altura);
    alert("El área del triángulo es: " + area);
}
//PARA EL CÍRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = parseFloat(input.value);
    
    const perimetro = perimetroCirculo(radio);
    alert("El perímetro de tu círculo es: " + perimetro.toFixed(2));
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = parseFloat(input.value);
    
    const area = areaCirculo(radio);
    alert("El área de tu círculo es: " + area.toFixed(2));
}
//PARA EL TRIÁNGULO ISÓSCELES
function calcularAlturaTrianguloIso() {
    const input1 = document.getElementById("InputTrianguloIsoLado1");
    const input2 = document.getElementById("InputTrianguloIsoLado2");
    const input3 = document.getElementById("InputTrianguloIsoBase");
    const lado1 =  parseFloat(input1.value);
    const lado2 =  parseFloat(input1.value);
    const base = parseFloat(input3.value);
    if(lado1 == lado2 && lado1 != base) {
        const altura = alturaTranguloIsosceles(lado1, base);
        alert("La altura del triángulo isósceles es: " + altura); 
    } else{
        alert("Tu triángulo no és isosceles");
    }
}
function calcularPerimetroTrianguloIso() {
    const input1 = document.getElementById("InputTrianguloIsoLado1");
    const input2 = document.getElementById("InputTrianguloIsoLado2");
    const input3 = document.getElementById("InputTrianguloIsoBase");
    const lado1 =  parseFloat(input1.value);
    const lado2 =  parseFloat(input1.value);
    const base = parseFloat(input3.value);
    if(lado1 == lado2 && lado1 != base) {
        const perimetro = perimetroTranguloIsosceles(lado1, base);
        alert("El perímetro del triángulo isósceles es: " + perimetro); 
    } else{
        alert("Tu triángulo no és isosceles");
    }
}
function calcularAreaTrianguloIso() {
    const input1 = document.getElementById("InputTrianguloIsoLado1");
    const input2 = document.getElementById("InputTrianguloIsoLado2");
    const input3 = document.getElementById("InputTrianguloIsoBase");
    const lado1 =  parseFloat(input1.value);
    const lado2 =  parseFloat(input1.value);
    const base = parseFloat(input3.value);
    if(lado1 == lado2 && lado1 != base) {
        const area = areaTranguloIsosceles(lado1, base);
        alert("El área del triángulo isósceles es: " + area); 
    } else{
        alert("Tu triángulo no és isosceles");
    }
}
//PROMEDIO
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); //Este método recibe una función y suma cada elemento

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//MEDIANA

function calcularMediana(lista2) {
    lista2.sort(function(a, b){
        return a - b}
    ); 

    let mediana;
    const mitadLista2 = parseInt(lista2.length / 2);
    if (esPar(lista2.length)) {
        const elemento1 = lista2[mitadLista2 - 1];
        const elemento2 = lista2[mitadLista2];

        const promedioElemeto1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemeto1y2;

    } else {
        mediana = lista2[mitadLista2];
    }
    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    return mediana;
}
//MODA

function calcularModa(lista3) {
    const lista3Count = {
    
    };
    
    lista3.map(
        function (elemento) {
            if (lista3Count[elemento]){
                lista3Count[elemento] += 1;
            }else {
                lista3Count[elemento] = 1;
            }   
        }
    );
    
    const lista3Array = Object.entries(lista3Count).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    
    const moda = lista3Array[lista3Array.length - 1];
    return moda[0];
}


//BOTONES
function promedio() {
    const listaPromedio = document.getElementById("inputPromedio");
    const listaP = listaPromedio.value.split(',');
    for(let i = 0; i < listaP.length; i++){
        listaP[i] = parseInt(listaP[i]);
    }
    const resultado = calcularMediaAritmetica(listaP);
    const show1 = document.getElementById("show1");
    show1.innerText = "El promedio de la lista es: " + resultado.toFixed(2);
}

function mediana() {
    const listaMediana = document.getElementById("inputMediana");
    const listaMed  = listaMediana.value.split(',');
    for(let i = 0; i < listaMed.length; i++){
        listaMed[i] = parseInt(listaMed[i]);
    }
    const resultado = calcularMediana(listaMed);
    const show2 = document.getElementById("show2");
    show2.innerText = "La mediana de la lista es: " + resultado.toFixed(2);
}

function moda() {
    const listaModa = document.getElementById("inputModa");
    const listaMod = listaModa.value.split(',');
    for(let i = 0; i < listaMod.length; i++){
        listaMod[i] = parseInt(listaMod[i]);
    }
    const resultado = calcularModa(listaMod);
    const show3 = document.getElementById("show3");
    show3.innerText = "La moda de la lista es: " + resultado;
}

function calcularInteres(monto, interes, tiempo){
    const montoFinal = monto * Math.pow((1 + interes),tiempo);
    return montoFinal;
}

function calcular(){
    const montoInvertido = document.getElementById("dineroInvertido");
    const interesMensual = document.getElementById("interesMensual");
    const tiempoInversion = document.getElementById("tiempoInversion");

    const monto = parseFloat(montoInvertido.value);
    const interes = parseFloat(interesMensual.value)/100;
    const tiempo = parseFloat(tiempoInversion.value);

    const montoF  = calcularInteres(monto, interes, tiempo);
    console.log(
        monto,
        interes,
        tiempo,
        montoF
    );
    const resultado = document.getElementById("p1");
    resultado.innerText = "El monto de final de tu inversión en " + tiempo + " meses es de: " + montoF.toFixed(2) + "$";
}


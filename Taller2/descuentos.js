function calcularPrecioConDescuento (precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento - cupon; 
    const precioFinal = (precio * porcentajePrecioConDescuento) / 100;
    return precioFinal;
}



function mostrarDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCoupon = document.getElementById("InputCoupon")
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const couponValue = inputCoupon.value;

    const precioconDescuento = calcularPrecioConDescuento(priceValue, discountValue, couponValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioconDescuento;
}
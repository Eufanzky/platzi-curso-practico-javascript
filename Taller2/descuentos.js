function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioFinal = (precio * porcentajePrecioConDescuento) / 100;
    return precioFinal;
}
function calcularPrecioConDescuentoYCupon(precio, descuento, cupon){
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

    const precioconDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const precioconDescuentoYCupon = calcularPrecioConDescuentoYCupon(priceValue, discountValue, couponValue)
    
    const resultP1 = document.getElementById("ResultP1");
    resultP1.innerText = "El precio con descuento sin cupon es: $" + precioconDescuento;

    const resultP2 = document.getElementById("ResultP2");
    resultP2.innerHTML = "Elprecio con descuento y el cupon es: $" + precioconDescuentoYCupon;
}
function CalcularPrecioConDescuento(precio,descuento){
    const porcenPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcenPrecioConDescuento)/100;
    return precioConDescuento
};
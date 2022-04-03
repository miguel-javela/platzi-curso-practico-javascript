function CalcularPrecioConDescuento(precio,descuento){
    const porcenPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcenPrecioConDescuento)/100;
    return precioConDescuento
};

function calcularPrecio(){
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;
    precioConDescuento=CalcularPrecioConDescuento(price,discount)

    parrafo = document.getElementById("result");
    parrafo.innerText = "precio con descuento " + precioConDescuento 
}
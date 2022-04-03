//CODIGO DEL CUADRADO
console.group("CUADRADO")

function perimetroCuadrado (lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}

console.group("END")



//CODIGO DEL triangulo
console.group("TRIANGULO")

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base
}
function areaTriangulo(base,altura){
    return base*altura/2
}

console.group("END")


//circulo
console.group("CIRCULOS")

function diametroCirculo(radio){
    return radio*2
}
//pi
const PI = Math.PI;

//circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//area
function areaCirculo (radio){
    return (radio*radio) *PI
}

console.group("END")

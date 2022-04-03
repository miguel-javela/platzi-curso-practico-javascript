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
    return lado1+lado2+base;
}
function areaTriangulo(base,altura){
    return base*altura/2;
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

//funciones para HTML

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const lado1N = Number(lado1);
    const lado2N = Number(lado2);
    const baseN = Number(base);
    const perimetro = perimetroTriangulo(lado1N,lado2N,baseN);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const baseN = Number(base);
    const alturaN = Number(altura);
    const area = areaTriangulo(baseN,alturaN);
    alert (area);
}

//CIRCULO
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const radio = document.getElementById("radio").value;
    const area = areaCirculo(radio);
    alert (area);
}

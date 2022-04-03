//CODIGO DEL CUADRADO
console.group("CUADRADO")

const ladoCuadrado = 5;
console.log("lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("perimetro cuadrado: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("area cuadrado: " + areaCuadrado + " cm^2");

console.group("END")

//CODIGO DEL triangulo
console.group("TRIANGULO")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "lado del triangulo miden: "
    + ladoTriangulo1 + " cm"
    + ladoTriangulo2 + " cm"
    + baseTriangulo + " cm")

const alturaTriangulo = 5.5;
console.log("altura del triangulo "+ alturaTriangulo + " cm")

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("perimetro triangulo: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("area triangulo: " + areaTriangulo + " cm^2")

console.group("END")


//circulo
console.group("CIRCULOS")

//radio
const radioCirculo = 4;
console.log("radio del circulo mide: " + ladoCuaradioCirculodrado + " cm");
//diametro
const diametroCirculo = radioCirculo*2
console.log("diametro del circulo mide: " + diametroCirculo + " cm");
//pi
const PI = math.PI;
console.log("valor de PI: " + PI);
//circunferencia
const perimetroCirculo = diametroCirculo*PI;
console.log("perimetro del circulo mide: " + perimetroCirculo + " cm");
//area
const areaCirculo = (radioCirculo*radioCirculo) *PI
console.log("area circulo: " + areaCirculo + " cm^2")

console.group("END")

const lista1 = [100,200,300,500]

function calcularPromedio(lista){
    // let suma =0 ;
    // for (let elemento of lista){
    //     suma += elemento
    // }
    // const promedio = suma/lista.length;
    // return promedio;

    const suma = lista.reduce(
        function (valorAcumulado = 0, elementoActual){
            return valorAcumulado + elementoActual;
        }
    )
    return suma/lista.length;
}
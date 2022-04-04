const lista1 = [200,100,500,50];


function calcularMediana(lista){
    let mediana;

    const listaOrdenada = lista.sort(
        function compare(a,b){
            return a-b;//asi ordena de menor a mayor, si se pone b-a ordena de mayor a menor
        }
    );

    const mitadLista = parseInt(lista.length/2);
    
    if(esPar(lista.length)){
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];
        mediana = calcularPromedio([elemento1,elemento2]);
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana
}

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularPromedio(lista){
    const suma = lista.reduce(
        function (valorAcumulado = 0, elementoActual){
            return valorAcumulado + elementoActual;
        }
    )
    return suma/lista.length;
}
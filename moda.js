const lista1 = [1,1,1,2,3,4,5,6,7,7,7,7];

function calcularModa(lista){
    const lista1Count = {};
    //toma el array y crea un objeto donde cuenta las veces que aparecer cada objeto diferente
    //ejm {"1": 3}
    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
   console.log(lista1Count)
   //toma el objeto y lo pasa a un array, donde cada posicion es otro array 
   //cada "mini-array" en su primera posicon guarda el item y la segunda las veces que aparecer ese item
   //y se usa la funcion .sort para ordenarlos teniendo en cuanta la segunda posicion de los "mini-array"
    const lista1array = Object.entries(lista1Count).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1]-nuevoValor[1]
        }
    );
    console.log(lista1array)
    const moda = lista1array[lista1array.length-1];
    return moda;
}
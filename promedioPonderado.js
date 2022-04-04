const notes1 = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];



function calcularPromedioPonderado(notes){
    //crea un array donde cada posicion es el resultado de la multiplicacion
    //de los atributos note y credit de cada objeto
    //suma notas en total creando un array
    const notesWithCredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    console.log(notesWithCredit);

    //suma los valores del array
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    console.log(sumOfNotesWithCredit)

    //crea un array con los creditos
    const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    });
    console.log(credits);

    //suma los creditos
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
    console.log("promedio ponderado: " + promedioPonderadoNotasConCreditos);
    return promedioPonderadoNotasConCreditos

}
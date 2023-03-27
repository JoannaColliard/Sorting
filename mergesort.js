function split(wholeArray) {

    if (wholeArray.length <= 1) {
        return wholeArray;
    } else {
        let half = Math.floor(wholeArray.length / 2);  //[6, 2, 20, 1, 5]
        let firstHalf = wholeArray.slice(0, half);
        let secondHalf = wholeArray.slice(half);

        return [firstHalf, secondHalf];
    }
}

function merge(firstHalf, secondHalf) {

}

function mergeSort(array) {

    if (array.length === 1) {
        return array;
    } else {
        let arr = split(array);
        let left = arr[0];
        let right = arr[1];
        return array;
    }

}

/*
mergeSort recibe un arreglo desordenado y devuelve el mismo arreglo ordenado.

split recibe un arreglo y lo divide en dos partes que pueden ser iguales o no, dependiendo de la cantidad de elementos que tenga el arreglo. 

merge toma las dos partes del arreglo que divide split y las une en un solo arreglo ordenado.
*/
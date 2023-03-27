function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let swapped = false;

        function swap(a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                swap(j - 1, j);
                swapped = true;
            }
        }


        if (!swapped) {
            return arr;
        } else {
            return bubbleSort(arr);
        }
    }
}

let arreglo = [23, 5, 12, 100, 90, 3, 45];
console.log(arreglo);
console.log(bubbleSort(arreglo));

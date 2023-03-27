describe('Split Array function', function () {
    it('es capaz de dividir el arreglo en dos partes', function () {
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
        expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });

    it('si recibe un arreglo vacío, devuelve un arreglo vacío', function () {
        expect(split([])).toEqual([]);
    });

    it('si recibe un arreglo con un solo elemento, devuelve el mismo arreglo', function () {
        expect(split([1])).toEqual([1]);
    });
});

describe('Merge', function () {
    it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
        // testeá el algoritmo
    });
});
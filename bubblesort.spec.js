describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('ordena un arreglo desordenado', function(){
        let arreglo = [3, 10, 5, 2, 25];
        expect( bubbleSort(arreglo) ).toEqual( [2, 3, 5, 10, 25] );
      });

    it('mantiene ordenado un arreglo ordenado', function(){
        let arreglo2 = [1, 2, 3, 4, 5];
        expect( bubbleSort(arreglo2) ).toEqual( [1, 2, 3, 4, 5] );
      });

    it('ordena un arreglo a la inversa', function(){
        let arreglo3 = [5, 4, 3, 2, 1];
        expect( bubbleSort(arreglo3) ).toEqual( [1, 2, 3, 4, 5] );
      });
  });
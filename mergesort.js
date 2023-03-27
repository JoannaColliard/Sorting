function split(wholeArray) {

    if (wholeArray.length <= 1) {
        return wholeArray;
    } else {
        let half = Math.floor(wholeArray.length / 2);  //["a", "b", "c", "d", "e"]
        let firstHalf = wholeArray.slice(0, half);
        let secondHalf = wholeArray.slice(half);

        return [firstHalf, secondHalf];
    }
}
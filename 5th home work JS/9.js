function max(array) {
    let val = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > val) val = array[i];
    }
    return val;
}

console.log(max([70, 20, -8, 66, -90, 700]));


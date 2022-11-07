const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
console.log(
    numbers.filter((number)=> number !==0)
        .map((number)=>Math.abs(number))
        .reduce((total, number) => total*number, 1)
);
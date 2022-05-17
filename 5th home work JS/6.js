const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
let P=1;
for(let i=0;i<numbers.length; ++i){
    if(numbers[i]===0)continue;
    if(numbers[i]<0) numbers[i]=-(numbers[i]);
    P*=numbers[i];
}
console.log(P);
let number=1;
for(let number=1;number<=100;++number){
    if(number%5===0 && number%3===0) console.log(number+"FizzBuzz");
   else if(number%3===0) console.log(number+"Fizz");
    else if(number%5===0) console.log(number+"Buzz");
    else console.log(number);

}
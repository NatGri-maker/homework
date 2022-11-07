
let repeat=1;
const currentDate= setInterval(()=>{
    console.log(new Date, 5000);
    if (repeat===10) {
        clearInterval(currentDate);
    }
        ++repeat}
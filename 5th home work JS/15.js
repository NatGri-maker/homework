function isString(text){
    if(typeof(text)==="string" && text.includes("?"))
        return true;
    else throw new Error("Not string");
}

console.log(isString('World?'));
console.log(isString(1));
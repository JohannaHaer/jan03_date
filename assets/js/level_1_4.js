let date = new Date(2016, 0, 1)
console.log(date);


let tageImMonat = (monat, jahr) => {
    return new Date(jahr, monat, 0).getDate()
}

console.log(tageImMonat(1, 2016));
console.log(tageImMonat(2, 2016));
console.log(tageImMonat(2, 2017));
console.log(tageImMonat(12, 2017));
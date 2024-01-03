
const freiOderNicht = (day) =>{
    const days = new Date (day).getDay();
    if (days === 0 || days === 6){
        return `Weekend`
    } else {
        return `Arbeitstag`
    }
    
}

console.log(freiOderNicht("12.15.2019")); //Weekend
console.log(freiOderNicht("2.16.2001")); //Arbeitstag
console.log(freiOderNicht("2.1.2020")); //Weekend
console.log(freiOderNicht("2.29.2020")); //Weekend


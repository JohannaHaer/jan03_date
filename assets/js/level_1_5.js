let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (name) =>{
    const month = new Date (name).getMonth();
    const monthName = list[month] // Weil der Wert aus month eine Zahl ist, kann sie hier als Index für die Liste verwendet werden
    return monthName
    }

console.log(monatsName("2001-3-4")); //März
console.log(monatsName("2019-12-24")); //Dezember
console.log(monatsName("1410-07-15")); //Juli





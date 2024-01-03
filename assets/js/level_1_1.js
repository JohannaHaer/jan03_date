
let body = document.querySelector("body")

const date1 = new Date()
body.innerHTML += `<p>${date1} = new Date</p>`

const date2 = new Date("September 2, 2019 09:00:00")
body.innerHTML += `<p>${date2} = September Date</p>`

const date3 = new Date(0)
body.innerHTML += `<p>${date3} = 0 Date</p>`

const date4 = new Date(31556908800)
body.innerHTML += `<p>${date4} = 31556908800 Date</p>`

const date5 = new Date(86400000)
body.innerHTML += `<p>${date5} = 86400000 Date</p>`
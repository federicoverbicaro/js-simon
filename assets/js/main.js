const spanHtml = document.getElementById("tempo")

const oreDiUnGiorno = 24
const minutiInUnOra = 60 
const secondiDiUnMinuto = 60
let millesecondiDiUnSecondo = 1000


let secondi = 0
let scandenza = "19/01/2024"
let oraScadenza = 9.30


//time ora reale
setInterval(myTimer)

function myTimer(tempo){
    const date = new Date()
    spanHtml.innerHTML = date.toLocaleTimeString()
}
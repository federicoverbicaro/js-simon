
const spanTempo = document.getElementById("tempo")
const spanScadenza = document.getElementById("scadenzaPrevista")
const spanRisultato = document.getElementById("risultato")

const oreInUnGiorno = 24
const minutiInUnOra = 60
const secondiInUnMinuto = 60
const millisecondiInUnSecondo = 1000




const millisecondiInUnGiorno = millisecondiInUnSecondo * secondiInUnMinuto * minutiInUnOra * oreInUnGiorno


const domaniAlle930 = new Date()
domaniAlle930.setDate(domaniAlle930.getDate() + 1)
domaniAlle930.setHours(9, 30, 0, 0)

function visualizzaContoAllaRovescia() {
    const oraCorrente = new Date()
    const millisecondiRimanenti = domaniAlle930 - oraCorrente

    if (millisecondiRimanenti <= 0) {
        clearInterval(intervalID)
        spanScadenza.innerHTML = "Correzione in corso!"
        spanRisultato.innerHTML = "Il tempo è scaduto!"
    } else {
        const oreRimanenti = Math.floor(millisecondiRimanenti / (millisecondiInUnSecondo * secondiInUnMinuto * minutiInUnOra))

        const minutiRimanenti = Math.floor((millisecondiRimanenti % (millisecondiInUnSecondo * secondiInUnMinuto * minutiInUnOra)) / (millisecondiInUnSecondo * secondiInUnMinuto))

        const secondiRimanenti = Math.floor((millisecondiRimanenti % (millisecondiInUnSecondo * secondiInUnMinuto)) / millisecondiInUnSecondo)

        spanScadenza.innerHTML = `Il conto alla rovescia scadrà alle ore: 9.30 di domani`

        spanTempo.innerHTML = `Tempo rimanente: ${oreRimanenti} ore, ${minutiRimanenti} minuti, ${secondiRimanenti} secondi`
    }
}

const intervalID = setInterval(visualizzaContoAllaRovescia, 1000)
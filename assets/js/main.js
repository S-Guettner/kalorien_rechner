const körpergröße = document.querySelector("#körpergröße")
const alter = document.querySelector("#alter")
const gewicht = document.querySelector("#gewicht")
const weiblich = document.querySelector("#weiblich")
const männlich = document.querySelector("#männlich")
const aktivitäten = document.querySelector("#aktivitäten")
const submitButton = document.querySelector("#submitButton")
const grundumsatzKalorien = document.querySelector("#grundumsatzKalorien")
const grundumsatzJoule = document.querySelector("#grundumsatzJoule")
const gesamtumsatzKalorien = document.querySelector("#gesamtumsatzKalorien")
const gesamtumsatzJoule = document.querySelector("#gesamtumsatzJoule")

submitButton.addEventListener('click', () => {
    if(männlich.checked){
        grundumsatzKalorien.textContent  = (664.7 + (13.7 * gewicht.value) + (5 * körpergröße.value) - (6.8 * alter.value))
        grundumsatzJoule.textContent = (grundumsatzKalorien.textContent * 4.184).toFixed(2)
        gesamtumsatzKalorien.textContent = (grundumsatzKalorien.textContent * aktivitäten.value).toFixed(2)
        gesamtumsatzJoule.textContent = (gesamtumsatzKalorien.textContent * 4.184).toFixed(2)
    }
    else if(weiblich.checked){
        grundumsatzKalorien.textContent = (655.1 + (9.6 * gewicht.value) + (1.8 * körpergröße.value) - (4.7 * alter.value))
        grundumsatzJoule.textContent = (grundumsatzKalorien.textContent * 4.184).toFixed(2)
        gesamtumsatzKalorien.textContent = (grundumsatzKalorien.textContent * aktivitäten.value).toFixed(2)
        gesamtumsatzJoule.textContent = (gesamtumsatzKalorien.textContent * 4.184).toFixed(2)
    }
    else{
        alert("Eingabe nicht vollständig")
    }
})
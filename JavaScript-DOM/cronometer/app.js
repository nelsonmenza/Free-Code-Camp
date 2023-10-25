const cronometer = document.getElementById("cronometer")
const btnStartPause = document.getElementById("btn-start-pause")
const btnRestart = document.getElementById("btn-restart")

let [hour, min, second] = [0, 0, 0]

let timeInterval
let cronometerStatus = 'Paused'

// time management 
function updateCronometer() {
    second++

    if (second / 60 === 1) {
        second = 0
        min++
        if (min / 60 === 1) {
            min = 0
            hour++
        }
    }
    const secondFormat = setFormat(second)
    const minFormat = setFormat(min)
    const hourFormat = setFormat(hour)
    cronometer.innerHTML = `${hourFormat}:${minFormat}:${secondFormat}`

}

function setFormat(timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit
}

// button functionality 

function startAndPause() {
    if (cronometerStatus === 'paused') {
        timeInterval = window.setInterval(updateCronometer, 1000)
        btnStartPause.innerHTML = '<i class="bi bi-pause-fill"></i>'
        btnStartPause.classList.remove('start')
        btnStartPause.classList.add('pause')
        cronometerStatus = "working"

    } else {
        window.clearInterval(timeInterval)
        btnStartPause.innerHTML = '<i class="bi bi-play-fill"></i>'
        btnStartPause.classList.remove('pause')
        btnStartPause.classList.add('start')
        cronometerStatus = "paused"

    }

}

btnStartPause.addEventListener('click', startAndPause)

btnRestart.addEventListener('click', function () {
    startAndPause()
    second = 0
    min = 0
    hour = 0

    cronometer.innerText = 'OO:00:00'

})




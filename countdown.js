function mais() {
    $('div.entrada').html(Number.parseInt($('div.entrada').html())+1)
}

function menos() {
    $('div.entrada').html(Number.parseInt($('div.entrada').html())-1)
}

function iniciar() {
    let seconds = getSeconds()
    let t = setInterval(timer, 1000) //occurs every 1 second
    setTimeout(() => {
        $('div.entrada').data('seconds', undefined)
        clearInterval(t)
    }, seconds*1000) //occurs after wait for N seconds
}

function getSeconds() {
    if ($('div.entrada').data('seconds') === undefined) {
        let m = Number.parseInt($('div.entrada').html())
        let s = m*60
        $('div.entrada').data('seconds', s)
    }
    return Number.parseInt($('div.entrada').data('seconds'))
}

function timer() {
    let seconds = getSeconds()
    $('div.entrada').data('seconds', --seconds)

    let minutes = Math.floor(seconds/60)
    let extraSeconds = seconds % 60
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    extraSeconds = extraSeconds< 10 ? "0" + extraSeconds : extraSeconds

    $('div.entrada').html(`${minutes}:${extraSeconds}`)
}
let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 20) {
        basic.showString("" + (distancia))
        if (distancia < 10) {
            basic.showString("" + (distancia))
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(5000)
        }
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
})

let distancia = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 15) {
        basic.showString("" + (distancia))
    }
    if (distancia < 6) {
        basic.showString("" + (distancia))
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(5000)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})

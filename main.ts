let distancia = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 9) {
        basic.showString("" + (distancia))
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    maqueen.motorStop(maqueen.Motors.All)
})

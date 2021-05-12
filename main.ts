let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(Distance)
    basic.pause(1000)
})

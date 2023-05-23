input.onButtonPressed(Button.A, function () {
    makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos1))
    makerbit.lcdShowCharacter1602(LcdChar.c4, makerbit.position1602(LcdPosition1602.Pos17))
    makerbit.showStringOnLcd1602("Temp: " + Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    100
    )) + " ºC", makerbit.position1602(LcdPosition1602.Pos17), 16)
    makerbit.showStringOnLcd1602("Luz: " + pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    100
    ) + " %", makerbit.position1602(LcdPosition1602.Pos3), 13)
})
input.onButtonPressed(Button.AB, function () {
    for (let cuadradito = 0; cuadradito <= cuadradito; cuadradito++) {
        makerbit.lcdShowCharacter1602(LcdChar.c4, cuadradito)
    }
})
input.onButtonPressed(Button.B, function () {
    makerbit.clearLcd1602()
})
let luzMedida = 0
makerbit.connectLcd(39)
makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    . . . . .
    . # # # .
    . # # # .
    . . # . .
    `))
makerbit.lcdMakeCharacter(LcdChar.c4, makerbit.lcdCharacterPixels(`
    # . # . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    `))
makerbit.lcdMakeCharacter(LcdChar.c5, makerbit.lcdCharacterPixels(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `))
basic.forever(function () {
    makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos17))
    luzMedida = Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    100
    ))
    makerbit.showStringOnLcd1602("Luz: " + luzMedida + " %", makerbit.position1602(LcdPosition1602.Pos19), 13)
    for (let index = 0; index <= 15; index++) {
        if (luzMedida > 0) {
            makerbit.lcdShowCharacter1602(LcdChar.c5, index + 1)
            luzMedida += -100 / 16
        } else {
            makerbit.lcdShowCharacter1602(LcdChar.c4, index + 1)
        }
    }
    basic.pause(100)
})

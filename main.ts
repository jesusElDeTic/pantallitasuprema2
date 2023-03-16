input.onButtonPressed(Button.A, function () {
    makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos1))
    makerbit.showStringOnLcd1602("Luz: " + pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    255,
    0,
    100
    ) + " %", makerbit.position1602(LcdPosition1602.Pos3), 4)
    makerbit.showStringOnLcd1602("Temperatura: " + Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    255,
    0,
    100
    )) + " ºC", makerbit.position1602(LcdPosition1602.Pos17), 16)
})
input.onButtonPressed(Button.AB, function () {
    for (let cuadradito = 0; cuadradito <= cuadradito; cuadradito++) {
        makerbit.lcdShowCharacter1602(LcdChar.c4, cuadradito)
    }
})
input.onButtonPressed(Button.B, function () {
    makerbit.clearLcd1602()
})
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
    makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos1))
    makerbit.showStringOnLcd1602("Temp: " + Math.round(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    100
    )) + " %", makerbit.position1602(LcdPosition1602.Pos17), 16)
})

function display() {
    strip.clear()
    strip.setPixelColor(angle / 30, neopixel.colors(NeoPixelColors.Red))
    strip.setBrightness(magnitude)
    strip.show()
}

function readJoystick() {
    
    x = pins.analogReadPin(AnalogPin.P0) - 500
    y = pins.analogReadPin(AnalogPin.P1) - 534
    angle = 180 + Math.atan2(x, y) * 180 / Math.PI
    magnitude = Math.sqrt(x * x + y * y) / 750 * 255
    serial.writeString("x=")
    serial.writeNumber(x)
    serial.writeString(", y=")
    serial.writeNumber(y)
    serial.writeString(", angle=")
    serial.writeNumber(angle)
    serial.writeString(", mag=")
    serial.writeNumber(magnitude)
    serial.writeLine("")
}

let y = 0
let x = 0
let magnitude = 0
let angle = 0
let strip : neopixel.Strip = null
strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    readJoystick()
    display()
})

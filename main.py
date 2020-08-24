def display():
    strip.clear()
    strip.set_pixel_color(angle / 30, neopixel.colors(NeoPixelColors.RED))
    strip.set_brightness(magnitude)
    strip.show()
def readJoystick():
    global x, y, angle, magnitude
    x = pins.analog_read_pin(AnalogPin.P0) - 500
    y = pins.analog_read_pin(AnalogPin.P1) - 534
    angle = 180 + Math.atan2(x, y) * 180 / Math.PI
    magnitude = Math.sqrt(x * x + y * y) / 750 * 255
    serial.write_string("x=")
    serial.write_number(x)
    serial.write_string(", y=")
    serial.write_number(y)
    serial.write_string(", angle=")
    serial.write_number(angle)
    serial.write_string(", mag=")
    serial.write_number(magnitude)
    serial.write_line("")
y = 0
x = 0
magnitude = 0
angle = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)

def on_forever():
    readJoystick()
    display()
basic.forever(on_forever)

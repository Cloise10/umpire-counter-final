// on button A, pitch goes up by 1
input.onButtonPressed(Button.A, function () {
    basic.showString("P")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    pitch += 1
    basic.showNumber(pitch)
})
// on screen down, pitch goes down by 1
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    pitch += -1
    basic.showNumber(pitch)
})
// on button A+B, resets program to 0
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    pitch = 0
    basic.showNumber(pitch)
    strike = 0
    basic.showNumber(strike)
})
// on button B, strike goes up by 1
input.onButtonPressed(Button.B, function () {
    basic.showString("S")
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    strike += 1
    basic.showNumber(strike)
})
// on logo down, strike goes down by 1
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    strike += -1
    basic.showNumber(strike)
})
// shows the name of program; sets both pitch & strike at 0
let strike = 0
let pitch = 0
basic.showString("Umpire")
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
pitch = 0
basic.showNumber(pitch)
strike = 0
basic.showNumber(strike)

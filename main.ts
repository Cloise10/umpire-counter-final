// when button A is pressed, prints B for balls & increase by 1
input.onButtonPressed(Button.A, function () {
    basic.showString("B")
    balls += 1
})
// when button B is pressed, prints S for strikes & increase by 1
input.onButtonPressed(Button.B, function () {
    basic.showString("S")
    strike += 1
})
// shake to reset to 0
input.onGesture(Gesture.Shake, function () {
    balls = 0
    strike = 0
})
// both balls and strike start at 0
let strike = 0
let balls = 0
balls = 0
strike = 0
// shows the numbers
basic.forever(function () {
    basic.showNumber(balls)
    basic.showNumber(strike)
})

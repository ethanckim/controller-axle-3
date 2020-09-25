// Button Mapping Constants
const LEFT = ArcadeButton.Left
const RIGHT = ArcadeButton.Right
const JUMP = ArcadeButton.B
const START_BTN = ArcadeButton.A

// Set switch direction in which arcade button is pressed
let SwitchTrigger = SwitchDirection.Right
if (input.switchRight())
	SwitchTrigger = SwitchDirection.Left

forever(function () {
    light.showRing(
    `black black white black black black black white black black`
    )
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    control.waitMicros(10)
    makerController.player1.press(LEFT)
    light.showRing(
    `red red red red red black black black black black`
    )
    console.log("Pressed LEFT")
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    control.waitMicros(10)
    makerController.player1.press(RIGHT)
    light.showRing(
    `black black black black black red red red red red`
    )
    console.log("Pressed RIGHT")
})
input.onGesture(Gesture.Shake, function () {
    makerController.player1.press(JUMP)
    light.showAnimation(light.runningLightsAnimation, 500)
    music.baDing.play()
    console.log("Shaked")
})
input.onSwitchMoved(SwitchTrigger, function () {
    control.waitMicros(10)
    makerController.player1.press(START_BTN)
    light.showAnimation(light.rainbowAnimation, 500)
    music.jumpUp.play()
    console.log("Switch Start")
})
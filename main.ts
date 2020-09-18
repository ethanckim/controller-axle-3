input.onGesture(Gesture.Shake, function () {
    music.baDing.play()
    light.showAnimation(light.rainbowAnimation, 500)
})
forever(function () {
    if (input.buttonA.isPressed()) {
        light.showRing(
        `red red red red red black black black black black`
        )
        makerController.player1.setButton(ArcadeButton.Left, true)
    } else if (input.buttonB.isPressed()) {
        light.showRing(
        `black black black black black red red red red red`
        )
        makerController.player1.setButton(ArcadeButton.Right, true)
    } else if (!(input.buttonA.isPressed()) && !(input.buttonB.isPressed())) {
        light.showRing(
        `black black black black black black black black black black`
        )
        makerController.player1.setButton(ArcadeButton.Left, false)
        makerController.player1.setButton(ArcadeButton.Right, false)
    }
})

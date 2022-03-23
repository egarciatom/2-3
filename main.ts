basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showString("Egun on")
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})

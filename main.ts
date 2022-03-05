namespace SpriteKind {
    export const tiro = SpriteKind.create()
    export const Fantasma = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(jogador.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 7 7 7 7 4 4 4 4 4 4 . . . 
        . . 4 7 7 7 7 2 2 2 1 1 4 4 . . 
        . . 7 7 7 7 7 2 2 2 1 1 5 4 . . 
        . 4 7 7 7 7 2 2 2 2 2 5 5 4 4 . 
        . 4 7 7 7 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 7 7 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 7 7 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `))) {
        Bala = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . 4 1 4 1 4 . . 
            . . . 1 3 5 3 1 . . 
            . . . 4 5 4 5 4 . . 
            . . . 1 3 5 3 1 . . 
            . . . 4 1 4 1 4 . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, jogador, direçãoX, direçãoY)
        Bala.setKind(SpriteKind.tiro)
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Fantasma, SpriteKind.Player, function (sprite, otherSprite) {
    Inimigo.destroy(effects.fire, 50)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.tiro, SpriteKind.Fantasma, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 50)
    sprite.destroy()
    music.smallCrash.play()
    info.changeScoreBy(1)
    VelocidadeEnimigo += 5
})
function Posições () {
    px = [
    10,
    80,
    150,
    0,
    10,
    80,
    150,
    160
    ]
    py = [
    0,
    0,
    0,
    60,
    120,
    120,
    120,
    60
    ]
}
let posição = 0
let py: number[] = []
let px: number[] = []
let Inimigo: Sprite = null
let direçãoY = 0
let direçãoX = 0
let Bala: Sprite = null
let jogador: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffffffffffffffffffffff
    fffffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcfffffffffffffffffffffffffffffffffffff
    fcffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffcffffffffffffffffffffffffff
    ffffffccffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcfffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffffffffffff
    fffffcbcffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffff
    ffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffff
    ffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffff
    fffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffff
    fffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffff3fff
    fffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffb3bff
    ffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffff33333f
    fffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffff3b3ff
    fffffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffbfbff
    ffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffff
    ffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffff
    ffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcfffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffc
    ffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffc
    ffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcfff
    fffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffff
    cfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffff
    cfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffff
    fffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffff
    fffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffbbbfffffffffffffff3ffffffffffffffffff
    ffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffcbcffffffffffffffb3bfffffffffffffffff
    fffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffffffffffffff3ffffffffffffccfffffffffffffffffffff33333ffffffffffffccff
    fffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffff3b3fffffffffffffccff
    ffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffff
    cfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffff
    ffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffff
    fffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffcffffffffffffffffffff
    fffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcfffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcff
    fffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffff
    fffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffbbfffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffff
    fffffcbcffffffffffffffb3bffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbfffffffffbbbfffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffff
    fffffffffffffffffffff33333ffffffffffffccffffffffffffffffffffffffffffffffffffffccffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffff
    ffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffff3fffffff
    ffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffff
    fffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffff
    ffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffff
    ffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffff
    fffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffcbcffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffff
    fffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffff
    ffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffff
    `)
jogador = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 7 7 7 7 4 4 4 4 4 4 . . . 
    . . 4 7 7 7 7 2 2 2 1 1 4 4 . . 
    . . 7 7 7 7 7 2 2 2 1 1 5 4 . . 
    . 4 7 7 7 7 2 2 2 2 2 5 5 4 4 . 
    . 4 7 7 7 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 7 7 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 7 7 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
jogador.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
let VelocidadeEnimigo = 10
Posições()
game.onUpdate(function () {
    if (controller.left.isPressed() && controller.up.isPressed()) {
        direçãoX = -150
        direçãoY = -150
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 . 4 4 4 4 . . . . . . 
            . . 1 1 1 1 4 5 5 4 4 4 . . . . 
            . . 1 1 1 1 1 4 4 4 4 4 4 . . . 
            . . 4 1 1 1 1 1 2 2 1 1 4 4 . . 
            . . 7 7 1 1 1 1 1 2 1 1 5 4 . . 
            . 4 7 7 7 1 1 1 1 1 2 5 5 4 4 . 
            . 4 7 7 7 2 1 1 1 1 4 4 5 4 4 . 
            . 4 4 7 7 2 2 1 1 1 4 4 4 4 4 . 
            . 4 2 7 7 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.left.isPressed() && controller.down.isPressed()) {
        direçãoX = -150
        direçãoY = 150
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
            . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
            . 4 2 7 7 2 2 4 4 4 4 4 4 4 4 . 
            . 4 4 7 7 2 2 1 1 1 4 4 4 4 4 . 
            . 4 7 7 7 2 1 1 1 1 4 4 5 4 4 . 
            . 4 7 7 7 1 1 1 1 1 2 5 5 4 4 . 
            . . 7 7 1 1 1 1 1 2 1 1 5 4 . . 
            . . 4 1 1 1 1 1 2 2 1 1 4 4 . . 
            . . 1 1 1 1 1 4 4 4 4 4 4 . . . 
            . . 1 1 1 1 4 5 5 4 4 4 . . . . 
            . . 1 1 1 . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.right.isPressed() && controller.up.isPressed()) {
        direçãoX = 150
        direçãoY = -150
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . 1 1 1 . . 
            . . . . 4 4 4 5 5 4 1 1 1 1 . . 
            . . . 4 4 4 4 4 4 1 1 1 1 1 . . 
            . . 4 4 1 1 2 2 1 1 1 1 1 4 . . 
            . . 4 5 1 1 2 1 1 1 1 1 7 7 . . 
            . 4 4 5 5 2 1 1 1 1 1 7 7 7 4 . 
            . 4 4 5 4 4 1 1 1 1 2 7 7 7 4 . 
            . 4 4 4 4 4 1 1 1 2 2 7 7 4 4 . 
            . 4 4 4 4 4 4 4 4 2 2 7 7 2 4 . 
            . . 4 2 4 4 4 4 4 2 7 7 2 4 . . 
            . . 4 4 2 4 4 4 2 2 7 2 2 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.right.isPressed() && controller.down.isPressed()) {
        direçãoX = 150
        direçãoY = 150
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . 4 4 2 4 4 4 2 2 7 2 2 4 . . 
            . . 4 2 4 4 4 4 4 2 7 7 2 4 . . 
            . 4 4 4 4 4 4 4 4 2 2 7 7 2 4 . 
            . 4 4 4 4 4 1 1 1 2 2 7 7 4 4 . 
            . 4 4 5 4 4 1 1 1 1 2 7 7 7 4 . 
            . 4 4 5 5 2 1 1 1 1 1 7 7 7 4 . 
            . . 4 5 1 1 2 1 1 1 1 1 7 7 . . 
            . . 4 4 1 1 2 2 1 1 1 1 1 4 . . 
            . . . 4 4 4 4 4 4 1 1 1 1 1 . . 
            . . . . 4 4 4 5 5 4 1 1 1 1 . . 
            . . . . . . 4 4 4 4 . 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.right.isPressed()) {
        direçãoX = 150
        direçãoY = 0
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . 4 4 2 4 4 4 2 2 7 2 2 4 . . 
            . . 4 2 4 4 4 4 4 2 7 7 2 4 . . 
            . 4 4 4 4 4 4 1 1 1 1 1 1 1 1 . 
            . 4 4 4 4 4 4 1 1 1 1 1 1 1 1 1 
            . 4 4 5 4 4 4 1 1 1 1 1 1 1 1 . 
            . 4 4 5 5 2 2 2 2 2 7 7 7 7 . . 
            . . 4 5 1 1 2 2 2 7 7 7 7 7 . . 
            . . 4 4 1 1 2 2 2 7 7 7 7 4 . . 
            . . . 4 4 4 4 4 4 7 7 7 7 . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.left.isPressed()) {
        direçãoX = -150
        direçãoY = 0
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
            . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
            . 1 1 1 1 1 1 1 1 4 4 4 4 4 4 . 
            1 1 1 1 1 1 1 1 1 4 4 4 4 4 4 . 
            . 1 1 1 1 1 1 1 1 4 4 4 5 4 4 . 
            . . 7 7 7 7 2 2 2 2 2 5 5 4 4 . 
            . . 7 7 7 7 7 2 2 2 1 1 5 4 . . 
            . . 4 7 7 7 7 2 2 2 1 1 4 4 . . 
            . . . 7 7 7 7 4 4 4 4 4 4 . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.up.isPressed()) {
        direçãoX = 0
        direçãoY = -150
        jogador.setImage(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . 4 4 1 1 1 7 7 4 . . . . 
            . . . 4 2 2 1 1 1 7 7 7 7 . . . 
            . . 4 2 2 7 1 1 1 7 7 7 7 4 . . 
            . . 4 2 7 7 1 1 1 7 7 7 7 4 . . 
            . 4 2 2 2 2 1 1 1 2 7 7 7 4 4 . 
            . 4 2 2 2 4 1 1 1 2 2 2 4 5 4 . 
            . 4 2 2 4 4 1 1 1 2 2 2 4 5 4 . 
            . 4 2 2 4 4 4 4 4 2 2 2 4 4 4 . 
            . . 4 2 4 4 4 4 4 2 1 1 4 4 . . 
            . . 4 2 2 4 4 4 4 5 1 1 4 4 . . 
            . . . 4 4 2 4 4 5 5 5 4 4 . . . 
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (controller.down.isPressed()) {
        direçãoX = 0
        direçãoY = 150
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . 4 4 2 4 4 5 5 5 4 4 . . . 
            . . 4 2 2 4 4 4 4 5 1 1 4 4 . . 
            . . 4 2 4 4 4 4 4 2 1 1 4 4 . . 
            . 4 2 2 4 4 4 4 4 2 2 2 4 4 4 . 
            . 4 2 2 4 4 1 1 1 2 2 2 4 5 4 . 
            . 4 2 2 2 4 1 1 1 2 2 2 4 5 4 . 
            . 4 2 2 2 2 1 1 1 2 7 7 7 4 4 . 
            . . 4 2 7 7 1 1 1 7 7 7 7 4 . . 
            . . 4 2 2 7 1 1 1 7 7 7 7 4 . . 
            . . . 4 2 2 1 1 1 7 7 7 7 . . . 
            . . . . 4 4 1 1 1 7 7 4 . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            `)
    } else {
        direçãoX = 0
        direçãoY = 0
        jogador.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 7 7 7 7 4 4 4 4 4 4 . . . 
            . . 4 7 7 7 7 2 2 2 1 1 4 4 . . 
            . . 7 7 7 7 7 2 2 2 1 1 5 4 . . 
            . 4 7 7 7 7 2 2 2 2 2 5 5 4 4 . 
            . 4 7 7 7 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 7 7 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 7 7 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 7 7 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 7 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
game.onUpdateInterval(2000, function () {
    posição = randint(0, 7)
    Inimigo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    Inimigo.setPosition(px[posição], py[posição])
    Inimigo.follow(jogador, VelocidadeEnimigo)
})

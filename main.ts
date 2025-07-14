controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    swordpunch = true
    k.setImage(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . e e e e . . f . . . . 
        . . . . . e e d f . . d f . . . 
        . . . . . d d d d . d . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . d . 9 9 9 9 9 . . . . . . . 
        . . d . 9 9 9 9 9 . . . . . . . 
        . . d . 9 9 9 9 9 . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . . 8 8 . 8 8 . . . . . . . 
        . . . . . d . d . . . . . . . . 
        . . . . . d . d . . . . . . . . 
        . . . . e e . e e . . . . . . . 
        `)
    pause(500)
    k.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . d . 9 9 9 9 9 . d . . . . . 
        . . d . 9 9 9 9 9 . d . . . . . 
        . . d . 9 9 9 9 9 . d . . . . . 
        . . . . 8 8 8 8 8 f d f 2 2 2 2 
        . . . . 8 8 . 8 8 . . . . . . . 
        . . . . . d . d . . . . . . . . 
        . . . . . d . d . . . . . . . . 
        . . . . e e . e e . . . . . . . 
        `)
    swordpunch = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (swordpunch == true) {
        sprites.destroy(enemy, effects.fire, 500)
    } else {
        pause(1000)
        info.changeLifeBy(-1)
    }
})
let swordpunch = false
let k: Sprite = null
let enemy: Sprite = null
info.setLife(3)
enemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . f f f 
    . . . . . f 1 f 1 1 . . 1 f f f 
    . . . . . 1 1 1 1 1 . 1 1 . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . f f f f f f 1 . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f f . f f f f f . . . . . . 
    . 1 1 1 . f f f f f . . . . . . 
    . 1 1 1 . . f f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
scene.setBackgroundColor(8)
k = sprites.create(img`
    . . . . e e e e . . . . . . . . 
    . . . . e e e d . . . . . . . . 
    . . . . d d d f . . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . d 9 9 9 9 d d . . . . . . 
    . . d . 9 9 9 9 . . d . . . . . 
    . . d . 9 9 9 9 . . d . . . . . 
    . . d . 9 9 9 9 . f d f 2 2 2 2 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 8 . . 8 . . . . . . . . 
    . . . . d . . d . . . . . . . . 
    . . . . d . . d . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scaling.scaleByPixels(k, 20, ScaleDirection.Vertically, ScaleAnchor.Middle)
scaling.scaleByPixels(k, 20, ScaleDirection.Horizontally, ScaleAnchor.Middle)
controller.moveSprite(k)
forever(function () {
    k.setBounceOnWall(true)
})
forever(function () {
    if (info.life() == 0) {
        game.gameOver(false)
    }
})

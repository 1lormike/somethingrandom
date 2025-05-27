namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Marcus.vy == 0) {
        Marcus.vy = -160
    }
})
let coin: Sprite = null
let Marcus: Sprite = null
scene.setBackgroundColor(9)
Marcus = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f c c c c c c f . . . . 
    . . . . f c c c c c c f . . . . 
    . . . . f c c 1 c 1 c f . . . . 
    . . . . f c c 1 c 1 c f . . . . 
    . . . . f c c c c c c f . . . . 
    . . . . f c c c c c c f . . . . 
    . . . f 8 c c c c c f . . . . . 
    . . f 8 8 c c c c c 2 f . . . . 
    . . f 8 8 c c c c c 2 2 f . . . 
    . . . f f 1 1 c c c 2 2 f . . . 
    . . 1 1 1 1 9 c c 3 3 f . . . . 
    . . . f 9 9 9 f f 3 3 f . . . . 
    . . . f 9 9 f . f 3 3 f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Marcus, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Marcus.ay = 350
scene.cameraFollowSprite(Marcus)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    coin = sprites.create(img`
        . . . b b b b b b . . . 
        . . . b b b b b b . . . 
        . . b 5 5 5 5 5 5 b b . 
        b b 5 d d 3 3 3 d 5 5 b 
        b b 5 d d 3 3 3 d 5 5 b 
        b b 5 3 3 5 5 5 1 5 5 b 
        c c 5 3 3 5 5 5 1 d d c 
        c c 5 3 3 5 5 5 1 d d c 
        c c d d d 1 1 1 d d d c 
        . . f d d d d d d f f . 
        . . f d d d d d d f f . 
        . . . f f f f f f . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . b b b b b b . . . 
        . . . b b b b b b . . . 
        . . b 5 5 5 5 5 5 b b . 
        b b 5 d d 3 3 3 d 5 5 b 
        b b 5 d d 3 3 3 d 5 5 b 
        b b 5 3 3 5 5 5 1 5 5 b 
        c c 5 3 3 5 5 5 1 d d c 
        c c 5 3 3 5 5 5 1 d d c 
        c c d d d 1 1 1 d d d c 
        . . f d d d d d d f f . 
        . . f d d d d d d f f . 
        . . . f f f f f f . . . 
        `,img`
        . . . . b b b b b . . . 
        . . . . b b b b b . . . 
        . . b b 5 5 5 5 5 b b . 
        b b 5 5 d d 3 d d 5 5 b 
        b b 5 5 d d 3 d d 5 5 b 
        b b 5 5 3 3 5 1 1 5 5 b 
        c c 5 5 3 3 5 1 1 d d c 
        c c 5 5 3 3 5 1 1 d d c 
        c c 5 5 d d 1 d d d d c 
        . . f f d d d d d f f . 
        . . f f d d d d d f f . 
        . . . . f f f f f . . . 
        `,img`
        . . . . . . b b b . . . 
        . . . . . . b b b . . . 
        . . . . b b 5 5 5 b b . 
        . . b b 5 5 d 1 1 5 5 b 
        . . b b 5 5 d 1 1 5 5 b 
        . . b b 5 5 3 1 1 5 5 b 
        . . c c 5 5 3 1 1 d d c 
        . . c c 5 5 3 1 1 d d c 
        . . c c 5 5 1 d d d d c 
        . . . . f f d d d f f . 
        . . . . f f d d d f f . 
        . . . . . . f f f . . . 
        `,img`
        . . . . . . b b b . . . 
        . . . . . . b b b . . . 
        . . . . b b 5 5 5 b b . 
        . . . . b b 1 1 1 b b . 
        . . . . b b 1 1 1 b b . 
        . . . . b b 5 5 5 b b . 
        . . . . b b d d d b b . 
        . . . . b b d d d b b . 
        . . . . c c d d d c c . 
        . . . . c c 3 3 3 c c . 
        . . . . c c 3 3 3 c c . 
        . . . . . . f f f . . . 
        `,img`
        . . . . . . b b b . . . 
        . . . . . . b b b . . . 
        . . . . b b 5 5 5 b b . 
        . . b b 5 5 1 d d 5 5 b 
        . . b b 5 5 1 d d 5 5 b 
        . . b b 5 5 1 3 3 5 5 b 
        . . c c d d 1 3 3 5 5 c 
        . . c c d d 1 3 3 5 5 c 
        . . c c d d d 1 1 5 5 c 
        . . . . f f d d d f f . 
        . . . . f f d d d f f . 
        . . . . . . f f f . . . 
        `,img`
        . . . . . b b b b . . . 
        . . . . . b b b b . . . 
        . . . b b 5 5 5 5 b b . 
        . . b 5 5 d 3 3 d 5 5 b 
        . . b 5 5 d 3 3 d 5 5 b 
        . . b 5 5 1 5 5 3 5 5 b 
        . . c d d 1 5 5 3 5 5 c 
        . . c d d 1 5 5 3 5 5 c 
        . . c d d d 1 1 d 5 5 c 
        . . . f f d d d d f f . 
        . . . f f d d d d f f . 
        . . . . . f f f f . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}

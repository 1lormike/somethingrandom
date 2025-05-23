controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Marcus.vy == 0) {
        Marcus.vy = -150
    }
})
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

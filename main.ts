controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Marcus.vy == 0) {
        Marcus.vy = -150
    }
})
let Marcus: Sprite = null
scene.setBackgroundColor(9)
Marcus = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(Marcus, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Marcus.ay = 350
scene.cameraFollowSprite(Marcus)

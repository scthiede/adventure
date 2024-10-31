enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const way = SpriteKind.create()
    export const platte = SpriteKind.create()
    export const lavalaufen = SpriteKind.create()
    export const goldprojektil = SpriteKind.create()
    export const anzeige = SpriteKind.create()
    export const gegnerprojektil = SpriteKind.create()
    export const Fisch = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    key = 1
    game.splash("Du hast einen Schlüssel gefunden.")
    tiles.setTileAt(location, assets.tile`myTile16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    leben += 1
    game.splash("Leben=" + leben)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (spitzhacke == 1) {
            info.changeScoreBy(1)
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`)) {
                tiles.setTileAt(location, assets.tile`myTile3`)
                tiles.setWallAt(location, false)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                tiles.setTileAt(location, assets.tile`myTile3`)
                tiles.setWallAt(location, false)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
            if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile5`)) {
                tiles.setTileAt(location, assets.tile`myTile3`)
                tiles.setWallAt(location, false)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
            if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile5`)) {
                tiles.setTileAt(location, assets.tile`myTile3`)
                tiles.setWallAt(location, false)
            }
        }
    }
    if (controller.B.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile25`)) {
            if (info.score() > 50) {
                for (let index = 0; index < 50; index++) {
                    timer.after(50, function () {
                        info.changeScoreBy(-1)
                    })
                }
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
            }
        }
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile26`)) {
            if (info.score() > 100) {
                for (let index = 0; index < 100; index++) {
                    timer.after(50, function () {
                        info.changeScoreBy(-1)
                    })
                }
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
            }
        }
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile30`)) {
            if (info.score() > 15) {
                for (let index = 0; index < 15; index++) {
                    timer.after(50, function () {
                        info.changeScoreBy(-1)
                    })
                }
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
            }
        }
    }
    if (controller.B.isPressed()) {
        if (sichel == 1) {
            if (mySprite.isHittingTile(CollisionDirection.Top)) {
                if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile28`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile28`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
                if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile28`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile28`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            }
        }
    }
    if (controller.B.isPressed()) {
        if (hammer == 1) {
            if (mySprite.isHittingTile(CollisionDirection.Top)) {
                if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile40`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile40`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
                if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile40`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile40`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            }
        }
    }
    if (controller.B.isPressed()) {
        if (axt == 1) {
            if (mySprite.isHittingTile(CollisionDirection.Top)) {
                if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile35`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile35`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
                if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile35`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile35`)) {
                    tiles.setTileAt(location, assets.tile`transparency16`)
                    tiles.setWallAt(location, false)
                }
            }
        }
    }
    if (controller.B.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile18`)) {
                tiles.setTileAt(location, assets.tile`myTile36`)
                info.changeScoreBy(10)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile18`)) {
                tiles.setTileAt(location, assets.tile`myTile36`)
                info.changeScoreBy(10)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
            if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile18`)) {
                tiles.setTileAt(location, assets.tile`myTile36`)
                info.changeScoreBy(10)
            }
        } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
            if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile18`)) {
                tiles.setTileAt(location, assets.tile`myTile36`)
                info.changeScoreBy(10)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
        mySprite.x += -50
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (schwert == 1) {
        controller.moveSprite(mySprite, 0, 0)
        if (seite == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                `, mySprite, 0, -50)
            timer.after(250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        } else if (seite == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . e . . . . . . . . . . . 
                . . . e e . . . . . . . . . . . 
                e e e e e 1 1 1 1 1 1 1 1 1 1 1 
                e e e e e 1 1 1 1 1 1 1 1 1 1 1 
                . . . e e . . . . . . . . . . . 
                . . . . e . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 50, 0)
            timer.after(250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        } else if (seite == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . e e e e e e . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                `, mySprite, 0, 50)
            timer.after(250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        } else if (seite == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . e . . . . 
                . . . . . . . . . . . e e . . . 
                1 1 1 1 1 1 1 1 1 1 1 e e e e e 
                1 1 1 1 1 1 1 1 1 1 1 e e e e e 
                . . . . . . . . . . . e e . . . 
                . . . . . . . . . . . e . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -50, 0)
            timer.after(250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            })
        }
        timer.after(500, function () {
            controller.moveSprite(mySprite, 100, 100)
        })
    }
    if (bogen == 1) {
        if (fliegt == 0) {
            fliegt = 1
            if (seite == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    f f f 
                    f f f 
                    f f f 
                    `, mySprite, 0, -50)
                timer.after(1000, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                    fliegt = 0
                })
            } else if (seite == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    f f f 
                    f f f 
                    f f f 
                    `, mySprite, 50, 0)
                timer.after(1000, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                    fliegt = 0
                })
            } else if (seite == 2) {
                projectile = sprites.createProjectileFromSprite(img`
                    f f f 
                    f f f 
                    f f f 
                    `, mySprite, 0, 50)
                timer.after(1000, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                    fliegt = 0
                })
            } else if (seite == 3) {
                projectile = sprites.createProjectileFromSprite(img`
                    f f f 
                    f f f 
                    f f f 
                    `, mySprite, -50, 0)
                timer.after(1000, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
                    fliegt = 0
                })
            }
        }
    } else if (bogen == 2) {
        if (seite == 0) {
            pfeil = sprites.createProjectileFromSprite(img`
                . 1 . 
                1 1 1 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . 2 . 
                2 2 2 
                `, mySprite, 0, -150)
        } else if (seite == 1) {
            pfeil = sprites.createProjectileFromSprite(img`
                2 . . . . . . . . . . . . . 1 . 
                2 2 e e e e e e e e e e e e 1 1 
                2 . . . . . . . . . . . . . 1 . 
                `, mySprite, 150, 0)
        } else if (seite == 2) {
            pfeil = sprites.createProjectileFromSprite(img`
                2 2 2 
                . 2 . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                1 1 1 
                . 1 . 
                `, mySprite, 0, 150)
        } else if (seite == 3) {
            pfeil = sprites.createProjectileFromSprite(img`
                . 1 . . . . . . . . . . . . . 2 
                1 1 e e e e e e e e e e e e 2 2 
                . 1 . . . . . . . . . . . . . 2 
                `, mySprite, -150, 0)
        }
    } else if (bogen == 3) {
        if (seite == 0) {
            pfeil = sprites.createProjectileFromSprite(img`
                . 5 . 
                5 5 5 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . 2 . 
                2 2 2 
                `, mySprite, 0, -150)
        } else if (seite == 1) {
            pfeil = sprites.createProjectileFromSprite(img`
                2 . . . . . . . . . . . . . 5 . 
                2 2 e e e e e e e e e e e e 5 5 
                2 . . . . . . . . . . . . . 5 . 
                `, mySprite, 150, 0)
        } else if (seite == 2) {
            pfeil = sprites.createProjectileFromSprite(img`
                2 2 2 
                . 2 . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                . e . 
                5 5 5 
                . 5 . 
                `, mySprite, 0, 150)
        } else if (seite == 3) {
            pfeil = sprites.createProjectileFromSprite(img`
                . 5 . . . . . . . . . . . . . 2 
                5 5 e e e e e e e e e e e e 2 2 
                . 5 . . . . . . . . . . . . . 2 
                `, mySprite, -150, 0)
        }
        pfeil.setKind(SpriteKind.goldprojektil)
        goldpfeilschuss += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    if (bogen < 1) {
        schwert = 1
        game.splash("Du hast ein Schwert gefunden.")
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    seite = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    if (bogen < 2) {
        schwert = 0
        bogen = 2
        game.splash("Du hast einen Bogen mit Pfeilen gefunden.")
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile23`)
    scene.cameraShake(4, 500)
    game.splash("Du hast den Schalter betätigt. Alle dunkle Lava wird zu Weg.")
    tileUtil.replaceAllTiles(assets.tile`myTile22`, assets.tile`myTile8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setWallAt(location, true)
    mySprite.y += 32
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    if (bogen < 1) {
        schwert = 0
        bogen = 1
        game.splash("Du hast eine Zwille mit Munitionen gefunden.")
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    seite = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function erstelleGegnerHorizontal () {
    for (let Wert of tiles.getTilesByType(assets.tile`myTile51`)) {
        mySprite2 = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, Wert)
        mySprite2.setVelocity(50, 0)
        mySprite2.setBounceOnWall(true)
    }
    tileUtil.replaceAllTiles(assets.tile`myTile51`, assets.tile`transparency8`)
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile52`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency8`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    seite = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (spitzhacke == 1) {
            info.changeScoreBy(5)
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
sprites.onOverlap(SpriteKind.goldprojektil, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(15)
})
scene.onOverlapTile(SpriteKind.Fisch, assets.tile`myTile21`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile58`)) {
            sprites.destroy(sprite)
            game.splash("Du hast einen Fisch gefangen. Vielleicht kauft ihn dir ja jemand ab?")
            Fischgefangen += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    hammer = 1
    game.splash("Du hast einen Hammer gefunden. Damit kannst du Steine zerstören.")
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    seite = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    spitzhacke = 1
    tiles.setTileAt(location, assets.tile`transparency16`)
    game.splash("Du hast Eine Spitzhacke gefunden. Damit kannst du an diesen")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tileUtil.replaceAllTiles(assets.tile`myTile7`, assets.tile`transparency16`)
    tiles.setTileAt(location, assets.tile`myTile7`)
})
scene.onOverlapTile(SpriteKind.Fisch, assets.tile`myTile55`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile58`)) {
            sprites.destroy(sprite)
            game.splash("Du hast einen Fisch gefangen. Vielleicht kauft ihn dir ja jemand ab?")
            Fischgefangen += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    timer.after(500, function () {
        tiles.setTileAt(location, assets.tile`myTile12`)
        timer.after(3000, function () {
            tiles.setTileAt(location, assets.tile`myTile44`)
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (spitzhacke == 1) {
            info.changeScoreBy(2)
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(5)
})
info.onLifeZero(function () {
    info.setLife(3)
    leben += -1
    if (leben == 0) {
        game.gameOver(false)
    } else if (leben > 0) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
        game.splash("leben=" + leben)
    }
})
scene.onOverlapTile(SpriteKind.goldprojektil, assets.tile`transparency16`, function (sprite, location) {
    timer.after(500, function () {
        tiles.setTileAt(location, assets.tile`myTile0`)
    })
})
function Fisch2 () {
    for (let Wert of tiles.getTilesByType(assets.tile`myTile56`)) {
        fisch = sprites.create(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . f f f f . . . 
            . . f f f f f f . . 
            . . f f f f f f . . 
            . . f f f f f f . . 
            . . f f f f f f . . 
            . . . f f f f . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.Fisch)
        tiles.placeOnTile(fisch, Wert)
        fisch.setVelocity(0, 70)
        fisch.setBounceOnWall(true)
    }
    tileUtil.replaceAllTiles(assets.tile`myTile56`, assets.tile`myTile27`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    sichel = 1
    game.splash("Du hast eine Sichel gefunden. Damit kannst du Unkraut entfernen.")
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (key == 1) {
            level += 1
            if (level == 1) {
                tiles.setCurrentTilemap(tilemap`Level26`)
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
                scene.setBackgroundColor(7)
            } else if (level == 2) {
                tiles.setCurrentTilemap(tilemap`Level28`)
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
                scene.setBackgroundColor(7)
            } else if (level == 3) {
                tiles.setCurrentTilemap(tilemap`Level19`)
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
                scene.setBackgroundColor(7)
            }
            key = 0
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        }
    }
})
function erstelleGegnerSenkrecht () {
    for (let Wert of tiles.getTilesByType(assets.tile`myTile50`)) {
        mySprite2 = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, Wert)
        mySprite2.setVelocity(0, 50)
        mySprite2.setBounceOnWall(true)
    }
    tileUtil.replaceAllTiles(assets.tile`myTile50`, assets.tile`transparency8`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    if (bogen < 3) {
        schwert = 0
        bogen = 3
        goldpfeilschuss = 0
        game.splash("Du hast Fünf Goldpfeile gefunden. Sie verwandeln Wiese in Münzen und bei jedem getroffenem Gegner bekommst du 15 Münzen. Achtung!!! Du kannst Sie nur 5 mal abfeuern. Gehe sparsam damit um.")
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if ((0 as any) == (1 as any)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
scene.onHitWall(SpriteKind.goldprojektil, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    axt = 1
    game.splash("Du hast eine Axt gefunden. Damit kannst du Holzblöcke")
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    randomHerzMünzeGegner = randint(1, 4)
    if (randomHerzMünzeGegner == 1) {
        tiles.setTileAt(otherSprite.tilemapLocation(), assets.tile`myTile0`)
    } else if (randomHerzMünzeGegner == 2) {
        tiles.setTileAt(otherSprite.tilemapLocation(), assets.tile`myTile9`)
    } else if (randomHerzMünzeGegner == 3) {
        tiles.setTileAt(otherSprite.tilemapLocation(), assets.tile`myTile0`)
    } else if (randomHerzMünzeGegner == 4) {
    	
    }
    randomHerzMünzeGegner = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.splash("Steinlabyrinth. Darin kannst du einen Hammer finden. Wenn du dich nicht verläufst!")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(2000, function () {
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
let randomHerzMünzeGegner = 0
let fisch: Sprite = null
let Fischgefangen = 0
let mySprite2: Sprite = null
let goldpfeilschuss = 0
let pfeil: Sprite = null
let fliegt = 0
let projectile: Sprite = null
let leben = 0
let spitzhacke = 0
let axt = 0
let bogen = 0
let sichel = 0
let hammer = 0
let schwert = 0
let key = 0
let seite = 0
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`Level0`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
info.setScore(0)
info.setLife(3)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
level = 0
seite = 0
key = 0
schwert = 0
hammer = 0
sichel = 0
bogen = 0
axt = 0
spitzhacke = 0
let waffe = 0
leben = 3
game.splash("Leben=" + leben)
erstelleGegnerHorizontal()
erstelleGegnerSenkrecht()
Fisch()
forever(function () {
    if (goldpfeilschuss == 5) {
        bogen = 2
        goldpfeilschuss = 0
    }
})

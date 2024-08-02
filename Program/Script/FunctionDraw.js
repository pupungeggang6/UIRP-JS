function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'Black'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
}

function drawBarTop() {
    context.strokeRect(UI.barTop.rect[0], UI.barTop.rect[1], UI.barTop.rect[2], UI.barTop.rect[3])

    context.drawImage(img.button.cube, UI.barTop.buttonCube[0], UI.barTop.buttonCube[1])
    context.drawImage(img.button.glass, UI.barTop.buttonGlass[0], UI.barTop.buttonGlass[1])
    context.drawImage(img.button.camera, UI.barTop.buttonCamera[0], UI.barTop.buttonCamera[1])
    context.drawImage(img.button.light, UI.barTop.buttonLight[0], UI.barTop.buttonLight[1])
}

function drawBarLeft() {
    context.strokeRect(UI.barLeft.rect[0], UI.barLeft.rect[1], UI.barLeft.rect[2], UI.barLeft.rect[3])

    for (let i = 0; i < space3D.length; i++) {
        context.fillText(`${space3D[i]['Name']}`, UI.barLeft.elementStart[0], UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * i)
    }
}

function drawBarRight() {
    context.strokeRect(UI.barRight.rect[0], UI.barRight.rect[1], UI.barRight.rect[2], UI.barRight.rect[3])
}

function drawBarBottom() {
    context.strokeRect(UI.barBottom.rect[0], UI.barBottom.rect[1], UI.barBottom.rect[2], UI.barBottom.rect[3])
}

function drawImageFull() {
    context.strokeRect(UI.imageFull[0], UI.imageFull[1], UI.imageFull[2], UI.imageFull[3])
}

function drawImageBackground() {
    context.strokeRect(UI.imageBackground[0], UI.imageBackground[1], UI.imageBackground[2], UI.imageBackground[3])
}

function drawImageReflection() {
    context.strokeRect(UI.imageReflection[0], UI.imageReflection[1], UI.imageReflection[2], UI.imageReflection[3])
}
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

    context.drawImage(img.button.fileNew, UI.barTop.buttonFileNew[0], UI.barTop.buttonFileNew[1], UI.barTop.buttonFileNew[2], UI.barTop.buttonFileNew[3])
    context.drawImage(img.button.save, UI.barTop.buttonSave[0], UI.barTop.buttonSave[1], UI.barTop.buttonSave[2], UI.barTop.buttonSave[3])
    context.drawImage(img.button.load, UI.barTop.buttonLoad[0], UI.barTop.buttonLoad[1], UI.barTop.buttonLoad[2], UI.barTop.buttonLoad[3])

    context.drawImage(img.button.convertImage, UI.barTop.buttonConvertImage[0], UI.barTop.buttonConvertImage[1], UI.barTop.buttonConvertImage[2], UI.barTop.buttonConvertImage[3])
    context.drawImage(img.button.download, UI.barTop.buttonDownload[0], UI.barTop.buttonDownload[1], UI.barTop.buttonDownload[2], UI.barTop.buttonDownload[3])
    context.drawImage(img.button.upload, UI.barTop.buttonUpload[0], UI.barTop.buttonUpload[1], UI.barTop.buttonUpload[2], UI.barTop.buttonUpload[3])
    context.drawImage(img.button.train, UI.barTop.buttonTrain[0], UI.barTop.buttonTrain[1], UI.barTop.buttonTrain[2], UI.barTop.buttonTrain[3])
    context.drawImage(img.button.removeReflection, UI.barTop.buttonRemoveReflection[0], UI.barTop.buttonRemoveReflection[1], UI.barTop.buttonRemoveReflection[2], UI.barTop.buttonRemoveReflection[3])

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

    if (state === '') {
        context.fillText('Idle', UI.barBottom.textState[0], UI.barBottom.textState[1])
    } else {
        context.fillText(`${state}`, UI.barBottom.textState[0], UI.barBottom.textState[1])
    }
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

function draw3DSpace() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.lineWidth(4)

    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)

    gl.uniform4f(glVar.location.color, 0.0, 0.0, 1.0, 1.0)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0]), gl.STATIC_DRAW)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array([0, 1, 2]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}
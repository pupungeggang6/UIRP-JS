function loopMain() {
    space.cube = rotateObject(space.cube, 0, 1)
    space.cube = rotateObject(space.cube, 1, 0.5)
    displayMain()
}

function displayMain() {
    drawSceneGInit()
    drawSceneBarInit()

    contextBar.drawImage(img.newFile, UI.barTop.buttonNewFile[0], UI.barTop.buttonNewFile[1])
    contextBar.drawImage(img.save, UI.barTop.buttonSave[0], UI.barTop.buttonSave[1])
    contextBar.drawImage(img.glass, UI.barTop.buttonGlass[0], UI.barTop.buttonGlass[1])
    contextBar.drawImage(img.cube, UI.barTop.buttonCube[0], UI.barTop.buttonCube[1])
    contextBar.drawImage(img.toImage, UI.barTop.buttonToImage[0], UI.barTop.buttonToImage[1])

    drawCube(space.cube)
}

function mouseUpBarMain(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.bar.buttonToImage)) {
                contextImage.drawImage(canvasGL, 0, 0)
            } else if (pointInsideRectArray(x, y, UI.bar.buttonSave)) {
                var link = document.createElement('a')
                link.download = 'test.png'
                link.href = canvasImage.toDataURL()
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }
        }
    }
}

function mouseUpGLMain(x, y, button) {
    
}

function mouseUpImageMain(x, y, button) {

}

function keyDownMain(key) {
    if (state === '') {

    }
}

function keyUpMain(key) {

}
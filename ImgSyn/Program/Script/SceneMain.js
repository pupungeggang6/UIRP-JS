function loopMain() {
    displayMain()
}

function displayMain() {
    drawSceneGInit()
    drawSceneBarInit()

    contextBar.drawImage(img.newFile, UI.bar.buttonNewFile[0], UI.bar.buttonNewFile[1])
    contextBar.drawImage(img.save, UI.bar.buttonSave[0], UI.bar.buttonSave[1])
    contextBar.drawImage(img.glass, UI.bar.buttonGlass[0], UI.bar.buttonGlass[1])
    contextBar.drawImage(img.cube, UI.bar.buttonCube[0], UI.bar.buttonCube[1])
    contextBar.drawImage(img.toImage, UI.bar.buttonToImage[0], UI.bar.buttonToImage[1])
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
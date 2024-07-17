function loopMain() {
    displayMain()
}

function displayMain() {
    drawSceneGInit()
}

function mouseUpBarMain(x, y, button) {

}

function mouseUpGLMain(x, y, button) {
    
}

function mouseUpImageMain(x, y, button) {

}

function keyDownMain(key) {
    if (state === '') {
        if (key === 'd') {
            contextImage.drawImage(canvasGL, 0, 0)
            var link = document.createElement('a')
            link.download = 'test.png'
            link.href = canvasImage.toDataURL()
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

function keyUpMain(key) {

}
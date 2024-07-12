function loopMain() {
    displayMain()
}

function displayMain() {
    contextGL.clearRect(0, 0, 640, 640)
    contextGL.fillRect(0, 0, 320, 320)
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
        }
    }
}

function keyUpMain(key) {

}
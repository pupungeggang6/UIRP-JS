window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvasBar = document.getElementById('Bar')
    canvasGL = document.getElementById('ScreenGL')
    canvasImage = document.getElementById('ScreenImage')

    contextBar = canvasBar.getContext('2d')
    contextGL = canvasGL.getContext('webgl')
    contextImage = canvasImage.getContext('2d')

    canvasBar.addEventListener('mouseup', mouseUpBar, false)
    canvasGL.addEventListener('mouseup', mouseUpGL, false)
    canvasImage.addEventListener('mouseup', mouseUpImage, false)

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    loadImage()
    glInit()

    programFrameCurrent = Date.now()
    programFramePrevious = Date.now() - 16

    programInstance = requestAnimationFrame(loop)
}

function glInit() {
    let shaderCodeVertex = `
    `

    let shaderCodeFragment = `
    `

    shaderProgram = gl.createProgram()
}

function loop() {
    programFrameCurrent = Date.now()
    delta = programFrameCurrent - programFramePrevious

    loopMain()

    programFramePrevious = Date.now()
    programInstance = requestAnimationFrame(loop)
}

function mouseUpBar(event) {
    let targetRect = canvasBar.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    mouseUpBarMain(x, y, button)
}

function mouseUpGL(event) {
    let targetRect = canvasGL.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    mouseUpGLMain(x, y, button)
}

function mouseUpImage(event) {
    let targetRect = canvasImage.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
    let button = event.button

    mouseUpImageMain(x, y, button)
}

function keyDown(event) {
    let key = event.key

    keyDownMain(key)
}

function keyUp(event) {
    let key = event.key

    keyUpMain(key)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(programInstance)
    }
}

function rightClick() {
    return false
}
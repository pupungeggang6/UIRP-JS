window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('ScreenUI')
    canvasG = document.getElementById('Screen3D')
    context = canvas.getContext('2d')
    gl = canvasG.getContext('webgl2')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()

    programFrameCurrent = Date.now()
    programFramePrevious = Date.now() - 16
    programLoop = requestAnimationFrame(loop)
}

function loop() {
    programFrameCurrent = Date.now()

    if (scene === 'Main') {
        loopMain()
    }

    programFramePrevious = Date.now()
    programLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let x = event.clientX
    let y = event.clientY
    let button = event.button

    if (scene === 'Main') {
        mouseUpMain(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowLeft' || key === 'ArrowRight' || key === ' ') {
        event.preventDefault()
    }

    if (scene === 'Main') {
        keyDownMain()
    }
}

function keyUp(event) {
    let key = event.key

    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowLeft' || key === 'ArrowRight' || key === ' ') {
        event.preventDefault()
    }

    if (scene === 'Main') {
        keyUpMain()
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(programLoop)
    }
}

function rightClick() {
    return false
}
window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvasBar = document.getElementById('Bar')
    canvasGL = document.getElementById('ScreenGL')
    canvasImage = document.getElementById('ScreenImage')

    contextBar = canvasBar.getContext('2d')
    gl = canvasGL.getContext('webgl', {preserveDrawingBuffer : true})
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
        attribute vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `

    let shaderCodeFragment = `
        precision mediump float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
        }
    `

    shaderProgram = gl.createProgram()
    shaderVertex = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(shaderVertex, shaderCodeVertex)
    gl.compileShader(shaderVertex)

    shaderFragment = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(shaderFragment, shaderCodeFragment)
    gl.compileShader(shaderFragment)

    gl.attachShader(shaderProgram, shaderVertex)
    gl.attachShader(shaderProgram, shaderFragment)
    gl.linkProgram(shaderProgram)
    gl.useProgram(shaderProgram)

    gl.enable(gl.DEPTH_TEST)

    locationVertex = gl.getAttribLocation(shaderProgram, 'a_position')
    bufferVertex = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.enableVertexAttribArray(locationVertex)
    gl.vertexAttribPointer(locationVertex, 3, gl.FLOAT, false, 0, 0)
    bufferIndex = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferIndex)
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
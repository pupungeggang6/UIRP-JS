window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('ScreenUI')
    canvasG = document.getElementById('Screen3D')
    editor.textName = document.getElementById('TextName')
    context = canvas.getContext('2d')
    gl = canvasG.getContext('webgl2')

    canvasImageFull = document.createElement('canvas')
    contextImageFull = canvasImageFull.getContext('2d')
    canvasImageFull.width = 320
    canvasImageFull.height = 320

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)
    window.addEventListener('touchend', touchEnd, false)
    editor.textName.addEventListener('change', onTextNameChange, false)

    imageLoad()
    glInit()

    programFrameCurrent = Date.now()
    programFramePrevious = Date.now() - 16
    programLoop = requestAnimationFrame(loop)
}

function glInit() {
    glVar.shader.vertexSource = `
        attribute vec4 a_position;
        uniform mat4 u_camera;

        void main() {
            gl_Position = u_camera * a_position;
        }
    `

    glVar.shader.fragmentSource = `
        precision mediump float;

        uniform vec4 u_color;

        void main() {
            gl_FragColor = u_color;
        }
    `

    glVar.shader.vertex = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(glVar.shader.vertex, glVar.shader.vertexSource)
    gl.compileShader(glVar.shader.vertex)

    glVar.shader.fragment = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(glVar.shader.fragment, glVar.shader.fragmentSource)
    gl.compileShader(glVar.shader.fragment)

    glVar.program = gl.createProgram()
    gl.attachShader(glVar.program, glVar.shader.vertex)
    gl.attachShader(glVar.program, glVar.shader.fragment)
    gl.linkProgram(glVar.program)
    gl.useProgram(glVar.program)

    glVar.location.color = gl.getUniformLocation(glVar.program, 'u_color')
    glVar.location.position = gl.getAttribLocation(glVar.program, 'a_position')
    glVar.location.camera = gl.getUniformLocation(glVar.program, 'u_camera')

    glVar.buffer.vertex = gl.createBuffer(gl.ARRAY_BUFFER)
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
    gl.enableVertexAttribArray(glVar.location.position)
    gl.vertexAttribPointer(glVar.location.position, 3, gl.FLOAT, false, 0, 0)

    gl.enable(gl.DEPTH_TEST)
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
    let targetRect = canvas.getBoundingClientRect()
    let x = event.clientX - targetRect.left
    let y = event.clientY - targetRect.top
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

function touchEnd(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = event.changedTouches[0].pageX - targetRect.left
    let y = event.changedTouches[0].pageY - targetRect.top

    if (scene === 'Main') {
        mouseUpMain(x, y, 0)
    }
}

function onTextNameChange(event) {
    if (scene === 'Main') {
        if (state === 'SelectedSpace3D') {
            space3D[selected.space3DThing]['Name'] = editor.textName.value
        }
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
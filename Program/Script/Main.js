window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('ScreenUI')
    canvasG = document.getElementById('Screen3D')
    context = canvas.getContext('2d')
    gl = canvasG.getContext('webgl2')

    canvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    glInit()

    programFrameCurrent = Date.now()
    programFramePrevious = Date.now() - 16
    programLoop = requestAnimationFrame(loop)
}

function glInit() {
    glVar.shader.vertexSource = `#version 300 es

        in vec4 a_position;

        void main() {
            gl_Position = a_position;
        }
    `

    glVar.shader.fragmentSource = `#version 300 es

        precision highp float;

        out vec4 outColor;
        uniform vec4 u_color;

        void main() {
            outColor = u_color;
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

    glVar.buffer.vertex = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
    gl.enableVertexAttribArray(glVar.location.vertex)
    gl.vertexAttribPointer(glVar.location.vertex, 3, gl.FLOAT, false, 0, 0)

    glVar.buffer.index = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.buffer.index)

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
window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

const loadPromise = new Promise(function(resolve, reject) {
    try {
        imageLoad()
        resolve('Load success')
    } catch {
        reject('Load failed')
    }
})

function main() {
    loadPromise.then(function () {
        console.log('Load success')
        canvas = document.getElementById('ScreenUI')
        canvasG = document.getElementById('Screen3D')
        editor.textName = document.getElementById('TextName')
        context = canvas.getContext('2d')
        gl = canvasG.getContext('webgl2')
        fileDOM = document.getElementById('ImageUpload')

        canvasImageFull = document.createElement('canvas')
        contextImageFull = canvasImageFull.getContext('2d')
        canvasImageFull.width = 320
        canvasImageFull.height = 320

        test = document.getElementById('Test')
        testContext = test.getContext('2d')

        window.addEventListener('mouseup', mouseUp, false)
        window.addEventListener('keydown', keyDown, false)
        window.addEventListener('keyup', keyUp, false)
        editor.textName.addEventListener('change', onTextNameChange, false)

        glInit()

        programFrameCurrent = Date.now()
        programFramePrevious = Date.now() - 16
        programLoop = requestAnimationFrame(loop)
    }).catch(function () {
        alert('Load failed')
    })
}

function glInit() {
    glVar.shader.vertexSource = `
        attribute vec4 a_position;
        uniform mat4 u_camera;
        attribute vec2 a_texcoord;
        varying vec2 v_texcoord;

        void main() {
            gl_Position = u_camera * a_position;
            v_texcoord = a_texcoord;
        }
    `

    glVar.shader.fragmentSource = `
        precision mediump float;
        uniform vec4 u_color;
        varying vec2 v_texcoord;
        uniform sampler2D u_texture;
        uniform int u_mode;
        uniform vec4 u_brightness;

        void main() {
            if (u_mode == 1) {
                gl_FragColor = u_brightness * texture2D(u_texture, v_texcoord);
            } else if (u_mode == 0) {
                gl_FragColor = u_brightness * u_color;
            } else {
                gl_FragColor = u_color;
            }
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

    glVar.location.color = gl.getUniformLocation(glVar.program, 'u_color')
    glVar.location.position = gl.getAttribLocation(glVar.program, 'a_position')
    glVar.location.camera = gl.getUniformLocation(glVar.program, 'u_camera')
    glVar.location.texture = gl.getAttribLocation(glVar.program, 'a_texcoord')
    glVar.location.mode = gl.getUniformLocation(glVar.program, 'u_mode')
    glVar.location.brightness = gl.getUniformLocation(glVar.program, 'u_brightness')
    gl.enableVertexAttribArray(glVar.location.position)
    gl.enableVertexAttribArray(glVar.location.texture)

    glVar.buffer.vertex = gl.createBuffer(gl.ARRAY_BUFFER)
    glVar.buffer.texture = gl.createBuffer(gl.ARRAY_BUFFER)

    glVar.texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, glVar.texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
}

function loop() {
    programFramePrevious = programFrameCurrent
    programFrameCurrent = Date.now()
    delta = programFrameCurrent - programFramePrevious

    if (scene === 'Main') {
        loopMain()
    }

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
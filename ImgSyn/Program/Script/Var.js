let canvasBar
let canvasGL
let canvasImage
let contextBar
let gl
let contextImage

let shaderProgram
let shaderVertex
let shaderFragment

let locationVertex
let locationColor
let locationMatrix
let bufferVertex
let bufferIndex
let matrixView = [
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 1
]

let space = {
    cube : [[0, 0, 0], [0.5, 0, 0], [0.5, 0, -0.5], [0, 0, -0.5], [0, 0.5, 0], [0.5, 0.5, 0], [0.5, 0.5, -0.5], [0, 0.5, -0.5]]
}

let state = ''

let programInstance
let programFrameCurrent
let programFramePrevious
let delta
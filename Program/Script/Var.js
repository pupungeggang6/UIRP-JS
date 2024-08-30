let canvas
let canvasG

let context
let gl
let test
let testContext

let canvasImageFull
let contextImageFull
let canvasGenerate = []
let contextGenerate = []
let canvasSpaceBackground
let contextSpaceBackground

let fileDOM
let textDOM
let imageTestDOM
let imageBackgroundDOM
let imageModelRefDOM
let imageModelRefNoDOM

let glVar = {
    program : null,

    shader : {
        vertex : null,
        vertexSource : null,
        fragment : null,
        fragmentSource : null,
    },

    buffer : {
        vertex : null,
        index : null,
        texture : null,
    },

    location : {
        position : null,
        color : null,
        camera : null,
        texture : null,
        mode : null,
        brightness : null,
    },

    texture : null,
}

let programLoop
let programFrameCurrent
let programFramePrevious
let delta

let scene = 'Main'
let state = ''

let selected = {
    space3DThing : -1,
}

let space3DBackground = new Image()

let space3D = [
    
]

let space3DTexture = [
    
]

let camera = {
    position : [0, 0, 1],
    rotation : [0, 0, 0]
}

let light = {
    direction : [0, 0, -1]
}

let cameraMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]

let editor = {
    textName : null,
}

let space3DGenerated = []
let imageGenerated = []
let reflectionMode = false
let downloadedNum = 0
let downloadedNumRef = 0

let testImage = new Image()
let imageModelRef = []
let imageModelRefNo = []

let model
let modelTrain = []
let modelTest = []
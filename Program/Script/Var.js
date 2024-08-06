let canvas
let canvasG

let context
let gl

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
        color : null
    },
}

let glTexture = {

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

let space3D = [
    {'Name' : 'Cuboid', 'Type' : 'Cuboid', 'Geometry' : [0, 0, 0, 1, 1, 1, 0, 0, 0]}
]
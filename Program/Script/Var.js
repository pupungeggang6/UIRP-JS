let canvas
let canvasG

let context
let gl

let glVar = {
    shader : {

    },

    buffer : {
        
    },

    location : {

    }
}

let glTexture = {
    
}

let programLoop
let programFrameCurrent
let programFramePrevious
let delta

let scene = 'Main'
let state = ''

let space3D = [
    {'Name' : 'Cube1', 'Type' : 'Cube', 'Geometry' : [0, 1, 0, 1, 0, 1]}
]
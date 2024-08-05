function loopMain() {
    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawBarTop()
    drawBarBottom()
    drawBarLeft()
    drawBarRight()
    draw3DSpace()
    drawImageFull()
    drawImageBackground()
    drawImageReflection()
}

function mouseUpMain(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.barTop.buttonCube)) {
                space3D.push({'Name' : 'Cube', 'Type' : 'Cube', 'Geometry' : [0, 0, 0, 1, 1, 1]})
            }
        }
    }
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}
function loopMain() {
    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawBarTop()
    drawBarBottom()
    drawBarLeft()
    drawBarRight()
    drawImageFull()
    drawImageBackground()
    drawImageReflection()
    draw3DSpace()
}

function mouseUpMain(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.barTop.buttonCube)) {
                space3D.push({'Name' : 'Cuboid', 'Type' : 'Cuboid', 'Geometry' : [0, 0, 0, 1, 1, 1, 0, 0, 0]})
            }

            for (let i = 0; i < space3D.length; i++) {
                if (pointInsideRect(x, y, UI.barLeft.elementStart[0] + UI.barLeft.elementInterval[0] * i,  UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * i, UI.barLeft.elementRect[0], UI.barLeft.elementRect[1])) {
                    state = 'SelectedSpace3D'
                    selected.space3DThing = i
                }
            }
        } else if (state === 'SelectedSpace3D') {
            if (pointInsideRectArray(x, y, UI.barRight.buttonFinish)) {
                selected.space3DThing = -1
                state = ''
            }

            for (let i = 0; i < 6; i++) {
                if (pointInsideRectArray(x, y, UI.barRight.buttonPosition[i])) {
                    if (i === 0) {
                        space3D[selected.space3DThing]['Geometry'][0] += 0.1
                    } else if (i === 1) {
                        space3D[selected.space3DThing]['Geometry'][0] -= 0.1
                    } else if (i === 2) {
                        space3D[selected.space3DThing]['Geometry'][1] += 0.1
                    } else if (i === 3) {
                        space3D[selected.space3DThing]['Geometry'][1] -= 0.1
                    } else if (i === 4) {
                        space3D[selected.space3DThing]['Geometry'][2] += 0.1
                    } else if (i === 5) {
                        space3D[selected.space3DThing]['Geometry'][2] -= 0.1
                    }
                }

                if (pointInsideRectArray(x, y, UI.barRight.buttonRotation[i])) {
                    if (i === 0) {
                        space3D[selected.space3DThing]['Geometry'][6] += 5
                    } else if (i === 1) {
                        space3D[selected.space3DThing]['Geometry'][6] -= 5
                    } else if (i === 2) {
                        space3D[selected.space3DThing]['Geometry'][7] += 5
                    } else if (i === 3) {
                        space3D[selected.space3DThing]['Geometry'][7] -= 5
                    } else if (i === 4) {
                        space3D[selected.space3DThing]['Geometry'][8] += 5
                    } else if (i === 5) {
                        space3D[selected.space3DThing]['Geometry'][8] -= 5
                    }
                }
            }
        }
    }
}

function keyDownMain(key) {

}

function keyUpMain(key) {

}
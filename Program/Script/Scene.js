function loopMain() {
    if (state === 'SelectedSpace3D') {
        editor.textName.style.visibility ='visible'
        if (space3D[selected.space3DThing]['Type'] != 'Glass') {
            fileDOM.style.visibility = 'visible'
        } else {
            fileDOM.style.visibility = 'hidden'
        }
    } else {
        editor.textName.style.visibility ='hidden'
        fileDOM.style.visibility = 'hidden'
    }
   
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
    draw3DSpaceFull(space3D, space3DTexture, camera, light.direction)
}

function mouseUpMain(x, y, button) {
    if (button === 0) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.barTop.buttonFileNew)) {
                camera.position = [0, 0, 0]
                camera.rotation = [0, 0, 0]
                light.direction = [0, 0, 1]
                space3D = []
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonSave)) {
                saveFile()
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonLoad)) {
                textDOM.click()
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonConvertImage)) {
                drawGlassTexture(space3D, space3DTexture, camera, light.direction)
                draw3DSpaceFull(space3D, space3DTexture, camera, light.direction)
                contextImageFull.clearRect(0, 0, 320, 320)
                contextImageFull.fillRect(0, 0, 320, 320)
                contextImageFull.drawImage(canvasG, 0, 0)
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonDownload)) {
                downloadImage()
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonUpload)) {
                imageTestDOM.click()
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonGenerateImage)) {
                generateSpace(5)
                generateImages()
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonDownloadMultiple)) {
                downloadImageGenerated()
            }

            if (pointInsideRectArray(x, y, UI.barTop.buttonCube)) {
                space3D.push({'Name' : 'Cuboid', 'Type' : 'Cuboid', 'Geometry' : [0, 0, 0, 1, 1, 1, 0, 0, 0]})
                space3DTexture.push(null)
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonGlass)) {
                space3D.push({'Name' : 'Glass', 'Type' : 'Glass', 'Geometry' : [0, 0, 0, 1, 1, 0, 0, 180, 0]})
                space3DTexture.push(null)
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonCamera)) {
                state = 'Camera'
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonLight)) {
                state = 'Light'
            } else if (pointInsideRectArray(x, y, UI.barTop.buttonReflection)) {
                if (reflectionMode === false) {
                    drawGlassTexture(space3D, space3DTexture, camera, light.direction)
                    reflectionMode = true
                } else {
                    reflectionMode = false
                }
            }

            for (let i = 0; i < space3D.length; i++) {
                if (pointInsideRect(x, y, UI.barLeft.elementStart[0] + UI.barLeft.elementInterval[0] * i,  UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * i, UI.barLeft.elementRect[0], UI.barLeft.elementRect[1])) {
                    state = 'SelectedSpace3D'
                    selected.space3DThing = i
                    editor.textName.value = space3D[selected.space3DThing]['Name']
                }
            }
        } else if (state === 'SelectedSpace3D') {
            if (pointInsideRectArray(x, y, UI.barRight.buttonDone)) {
                selected.space3DThing = -1
                state = ''
                editor.textName.value = ''
            }

            if (pointInsideRectArray(x, y, UI.barRight.buttonDelete)) {
                space3D.splice(selected.space3DThing, 1)
                space3DTexture.splice(selected.space3DThing, 1)
                selected.space3DThing = -1
                state = ''
                editor.textName.value = ''
            }

            for (let i = 0; i < space3D.length; i++) {
                if (pointInsideRect(x, y, UI.barLeft.elementStart[0] + UI.barLeft.elementInterval[0] * i,  UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * i, UI.barLeft.elementRect[0], UI.barLeft.elementRect[1])) {
                    selected.space3DThing = i
                    editor.textName.value = space3D[selected.space3DThing]['Name']
                }
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

                if (pointInsideRectArray(x, y, UI.barRight.buttonSize[i])) {
                    if (i === 0) {
                        space3D[selected.space3DThing]['Geometry'][3] += 0.1
                    } else if (i === 1) {
                        space3D[selected.space3DThing]['Geometry'][3] -= 0.1
                    } else if (i === 2) {
                        space3D[selected.space3DThing]['Geometry'][4] += 0.1
                    } else if (i === 3) {
                        space3D[selected.space3DThing]['Geometry'][4] -= 0.1
                    } else if (i === 4) {
                        space3D[selected.space3DThing]['Geometry'][5] += 0.1
                    } else if (i === 5) {
                        space3D[selected.space3DThing]['Geometry'][5] -= 0.1
                    }
                }
            }
        } else if (state === 'Camera') {
            if (pointInsideRectArray(x, y, UI.barRight.buttonDone)) {
                state = ''
            }

            for (let i = 0; i < 6; i++) {
                if (pointInsideRectArray(x, y, UI.barRight.buttonPosition[i])) {
                    if (i === 0) {
                        camera.position[0] += 0.1
                    } else if (i === 1) {
                        camera.position[0] -= 0.1
                    } else if (i === 2) {
                        camera.position[1] += 0.1
                    } else if (i === 3) {
                        camera.position[1] -= 0.1
                    } else if (i === 4) {
                        camera.position[2] += 0.1
                    } else if (i === 5) {
                        camera.position[2] -= 0.1
                    }
                }

                if (pointInsideRectArray(x, y, UI.barRight.buttonRotation[i])) {
                    if (i === 0) {
                        camera.rotation[0] += 5
                    } else if (i === 1) {
                        camera.rotation[0] -= 5
                    } else if (i === 2) {
                        camera.rotation[1] += 5
                    } else if (i === 3) {
                        camera.rotation[1] -= 5
                    } else if (i === 4) {
                        camera.rotation[2] += 5
                    } else if (i === 5) {
                        camera.rotation[2] -= 5
                    }
                }
            }
        } else if (state === 'Light') {
            if (pointInsideRectArray(x, y, UI.barRight.buttonDone)) {
                state = ''
            }
            
            for (let i = 0; i < 6; i++) {
                if (pointInsideRectArray(x, y, UI.barRight.buttonPosition[i])) {
                    if (i === 0) {
                        light.direction[0] += 0.1
                    } else if (i === 1) {
                        light.direction[0] -= 0.1
                    } else if (i === 2) {
                        light.direction[1] += 0.1
                    } else if (i === 3) {
                        light.direction[1] -= 0.1
                    } else if (i === 4) {
                        light.direction[2] += 0.1
                    } else if (i === 5) {
                        light.direction[2] -= 0.1
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
function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.fillStyle = 'White'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    
    context.clearRect(0, 0, 1280, 720)

    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'

    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.lineWidth(4)
    gl.enable(gl.DEPTH_TEST)
    gl.useProgram(glVar.program)
    
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
    gl.vertexAttribPointer(glVar.location.position, 3, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.texture)
    gl.vertexAttribPointer(glVar.location.texture, 2, gl.FLOAT, false, 0, 0)
}

function drawBarTop() {
    context.strokeRect(UI.barTop.rect[0], UI.barTop.rect[1], UI.barTop.rect[2], UI.barTop.rect[3])

    context.drawImage(img.button.fileNew, UI.barTop.buttonFileNew[0], UI.barTop.buttonFileNew[1])
    context.drawImage(img.button.save, UI.barTop.buttonSave[0], UI.barTop.buttonSave[1])
    context.drawImage(img.button.load, UI.barTop.buttonLoad[0], UI.barTop.buttonLoad[1])

    context.drawImage(img.button.convertImage, UI.barTop.buttonConvertImage[0], UI.barTop.buttonConvertImage[1])
    context.drawImage(img.button.download, UI.barTop.buttonDownload[0], UI.barTop.buttonDownload[1])
    context.drawImage(img.button.upload, UI.barTop.buttonUpload[0], UI.barTop.buttonUpload[1])
    context.drawImage(img.button.generateImage, UI.barTop.buttonGenerateImage[0], UI.barTop.buttonGenerateImage[1])
    context.drawImage(img.button.downloadMultiple, UI.barTop.buttonDownloadMultiple[0], UI.barTop.buttonDownloadMultiple[1])
    context.drawImage(img.button.train, UI.barTop.buttonTrain[0], UI.barTop.buttonTrain[1])
    context.drawImage(img.button.removeReflection, UI.barTop.buttonRemoveReflection[0], UI.barTop.buttonRemoveReflection[1])

    context.drawImage(img.button.cube, UI.barTop.buttonCube[0], UI.barTop.buttonCube[1])
    context.drawImage(img.button.glass, UI.barTop.buttonGlass[0], UI.barTop.buttonGlass[1])
    context.drawImage(img.button.camera, UI.barTop.buttonCamera[0], UI.barTop.buttonCamera[1])
    context.drawImage(img.button.light, UI.barTop.buttonLight[0], UI.barTop.buttonLight[1])
}

function drawBarLeft() {
    context.strokeRect(UI.barLeft.rect[0], UI.barLeft.rect[1], UI.barLeft.rect[2], UI.barLeft.rect[3])

    for (let i = 0; i < space3D.length; i++) {
        context.fillText(`${space3D[i]['Name']}`, UI.barLeft.elementStart[0] + UI.barLeft.elementInterval[0] * i + UI.barLeft.elementText[0], UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * i + UI.barLeft.elementText[1])
    }

    if (selected.space3DThing != -1) {
        context.strokeRect(UI.barLeft.elementStart[0] + UI.barLeft.elementInterval[0] * selected.space3DThing, UI.barLeft.elementStart[1] + UI.barLeft.elementInterval[1] * selected.space3DThing, UI.barLeft.elementRect[0], UI.barLeft.elementRect[1])
    }
}

function drawBarRight() {
    context.strokeRect(UI.barRight.rect[0], UI.barRight.rect[1], UI.barRight.rect[2], UI.barRight.rect[3])

    if (state === 'SelectedSpace3D') {
        let xyz = ['X', 'Y', 'Z']

        context.fillText(`Position`, UI.barRight.textPosition[0], UI.barRight.textPosition[1])
        context.fillText(`Rotation`, UI.barRight.textRotation[0], UI.barRight.textRotation[1])
        context.fillText(`Size`, UI.barRight.textSize[0], UI.barRight.textSize[1])

        for (let i = 0; i < 3; i++) {
            context.fillText(`${xyz[i]}${space3D[selected.space3DThing]['Geometry'][i].toFixed(1)}`, UI.barRight.textPositions[i][0], UI.barRight.textPositions[i][1])
            context.fillText(`${xyz[i]}${space3D[selected.space3DThing]['Geometry'][i + 6].toFixed(1)}`, UI.barRight.textRotations[i][0], UI.barRight.textRotations[i][1])
            context.fillText(`${xyz[i]}${space3D[selected.space3DThing]['Geometry'][i + 3].toFixed(1)}`, UI.barRight.textSizes[i][0], UI.barRight.textSizes[i][1])
        }

        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0) {
                context.drawImage(img.button.up, UI.barRight.buttonPosition[i][0], UI.barRight.buttonPosition[i][1])
                context.drawImage(img.button.up, UI.barRight.buttonRotation[i][0], UI.barRight.buttonRotation[i][1])
                context.drawImage(img.button.up, UI.barRight.buttonSize[i][0], UI.barRight.buttonSize[i][1])
            } else {
                context.drawImage(img.button.down, UI.barRight.buttonPosition[i][0], UI.barRight.buttonPosition[i][1])
                context.drawImage(img.button.down, UI.barRight.buttonRotation[i][0], UI.barRight.buttonRotation[i][1])
                context.drawImage(img.button.down, UI.barRight.buttonSize[i][0], UI.barRight.buttonSize[i][1])
            }
        }

        context.drawImage(img.button.delete, UI.barRight.buttonDelete[0], UI.barRight.buttonDelete[1])
        context.drawImage(img.button.done, UI.barRight.buttonDone[0], UI.barRight.buttonDone[1])
    }

    if (state === 'Camera') {
        let xyz = ['X', 'Y', 'Z']
        context.fillText(`Position`, UI.barRight.textPosition[0], UI.barRight.textPosition[1])
        context.fillText(`Rotation`, UI.barRight.textRotation[0], UI.barRight.textRotation[1])

        for (let i = 0; i < 3; i++) {
            context.fillText(`${xyz[i]}${camera.position[i].toFixed(1)}`, UI.barRight.textPositions[i][0], UI.barRight.textPositions[i][1])
            context.fillText(`${xyz[i]}${camera.rotation[i].toFixed(1)}`, UI.barRight.textRotations[i][0], UI.barRight.textRotations[i][1])
        }

        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0) {
                context.drawImage(img.button.up, UI.barRight.buttonPosition[i][0], UI.barRight.buttonPosition[i][1])
                context.drawImage(img.button.up, UI.barRight.buttonRotation[i][0], UI.barRight.buttonRotation[i][1])
            } else {
                context.drawImage(img.button.down, UI.barRight.buttonPosition[i][0], UI.barRight.buttonPosition[i][1])
                context.drawImage(img.button.down, UI.barRight.buttonRotation[i][0], UI.barRight.buttonRotation[i][1])
            }
        }

        context.drawImage(img.button.done, UI.barRight.buttonDone[0], UI.barRight.buttonDone[1])
    }
}

function drawBarBottom() {
    context.strokeRect(UI.barBottom.rect[0], UI.barBottom.rect[1], UI.barBottom.rect[2], UI.barBottom.rect[3])

    if (state === '') {
        context.fillText('Idle', UI.barBottom.textState[0], UI.barBottom.textState[1])
    } else {
        context.fillText(`${state}`, UI.barBottom.textState[0], UI.barBottom.textState[1])
    }
}

function drawImageFull() {
    context.strokeRect(UI.imageFull[0], UI.imageFull[1], UI.imageFull[2], UI.imageFull[3])
    context.drawImage(canvasImageFull, UI.imageFull[0], UI.imageFull[1])
}

function drawImageBackground() {
    context.strokeRect(UI.imageBackground[0], UI.imageBackground[1], UI.imageBackground[2], UI.imageBackground[3])
}

function drawImageReflection() {
    context.strokeRect(UI.imageReflection[0], UI.imageReflection[1], UI.imageReflection[2], UI.imageReflection[3])
}

function draw3DSpace() {
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
    gl.vertexAttribPointer(glVar.location.position, 3, gl.FLOAT, false, 0, 0)

    cameraMatrix = matrixIdentity()
    cameraMatrix = matrixMultiply(matrixRotate(2, camera.rotation[2]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixRotate(1, camera.rotation[1]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixRotate(0, camera.rotation[0]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixTranslate(-camera.position[0], -camera.position[1], -camera.position[2]), cameraMatrix)

    gl.uniformMatrix4fv(glVar.location.camera, false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1])

    for (let i = 0; i < space3D.length; i++) {
        if (space3D[i]['Type'] === 'Cuboid') {
            drawCuboid(space3D[i]['Geometry'], space3D[i]['Texture'])
        }
    }
}

function draw3DSpaceGenerated(index) {
    gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
    gl.vertexAttribPointer(glVar.location.position, 3, gl.FLOAT, false, 0, 0)

    let tempSpace = space3DGenerated[index]

    cameraMatrix = matrixIdentity()
    cameraMatrix = matrixMultiply(matrixRotate(2, tempSpace['CameraRotation'][2]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixRotate(1, tempSpace['CameraRotation'][1]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixRotate(0, tempSpace['CameraRotation'][0]), cameraMatrix)
    cameraMatrix = matrixMultiply(matrixTranslate(-tempSpace['CameraPosition'][0], -tempSpace['CameraPosition'][1], -tempSpace['CameraPosition'][2]), cameraMatrix)

    gl.uniformMatrix4fv(glVar.location.camera, false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1])

    for (let i = 0; i < tempSpace['Thing'].length; i++) {
        if (tempSpace['Thing'][i]['Type'] === 'Cuboid') {
            drawCuboid(tempSpace['Thing'][i]['Geometry'], tempSpace['Thing'][i]['Texture'])
        }
    }
}

function drawCuboid(geometry, texture) {
    vertice = [
        [-geometry[3] / 2, -geometry[4] / 2, -geometry[5] / 2],
        [-geometry[3] / 2, -geometry[4] / 2, geometry[5] / 2],
        [geometry[3] / 2, -geometry[4] / 2, geometry[5] / 2],
        [geometry[3] / 2, -geometry[4] / 2, -geometry[5] / 2],
        [-geometry[3] / 2, geometry[4] / 2, -geometry[5] / 2],
        [-geometry[3] / 2, geometry[4] / 2, geometry[5] / 2],
        [geometry[3] / 2, geometry[4] / 2, geometry[5] / 2],
        [geometry[3] / 2, geometry[4] / 2, -geometry[5] / 2],
    ]

    for (let i = 0; i < 8; i++) {
        vertice[i] = matrixVectorTransform(matrixRotate(2, geometry[8]), vertice[i])
        vertice[i] = matrixVectorTransform(matrixRotate(1, geometry[7]), vertice[i])
        vertice[i] = matrixVectorTransform(matrixRotate(0, geometry[6]), vertice[i])
        vertice[i] = matrixVectorTransform(matrixTranslate(geometry[0], geometry[1], geometry[2]), vertice[i])
        vertice[i] = matrixVectorTransform(cameraMatrix, vertice[i])
    }

    face = [[0, 2, 1, 0, 3, 2], [0, 1, 5, 0, 5, 4], [0, 4, 7, 0, 7, 3], [5, 6, 7, 5, 7, 4], [2, 3, 7, 2, 7, 6], [1, 2, 6, 1, 6, 5]]
    edge = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7], [7, 4]]

    if (texture === null) {
        gl.uniform1i(glVar.location.mode, 0)
        gl.uniform4f(glVar.location.color, 0.0, 1.0, 0.0, 1.0)

        for (let i = 0; i < 6; i++) {
            gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([vertice[face[i][0]][0], vertice[face[i][0]][1], vertice[face[i][0]][2], vertice[face[i][1]][0], vertice[face[i][1]][1], vertice[face[i][1]][2], vertice[face[i][2]][0], vertice[face[i][2]][1], vertice[face[i][2]][2], vertice[face[i][3]][0], vertice[face[i][3]][1], vertice[face[i][3]][2], vertice[face[i][4]][0], vertice[face[i][4]][1], vertice[face[i][4]][2], vertice[face[i][5]][0], vertice[face[i][5]][1], vertice[face[i][5]][2]]), gl.STATIC_DRAW)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
    } else {
        gl.uniform1i(glVar.location.mode, 1)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture)

        for (let i = 0; i < 6; i++) {
            gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([vertice[face[i][0]][0], vertice[face[i][0]][1], vertice[face[i][0]][2], vertice[face[i][1]][0], vertice[face[i][1]][1], vertice[face[i][1]][2], vertice[face[i][2]][0], vertice[face[i][2]][1], vertice[face[i][2]][2], vertice[face[i][3]][0], vertice[face[i][3]][1], vertice[face[i][3]][2], vertice[face[i][4]][0], vertice[face[i][4]][1], vertice[face[i][4]][2], vertice[face[i][5]][0], vertice[face[i][5]][1], vertice[face[i][5]][2]]), gl.STATIC_DRAW)
            gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.texture)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
    }

    gl.uniform1i(glVar.location.mode, 0)
    gl.uniform4f(glVar.location.color, 0.0, 0.0, 1.0, 1.0)

    for (let i = 0; i < 12; i++) {
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.vertex)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([vertice[edge[i][0]][0], vertice[edge[i][0]][1], vertice[edge[i][0]][2], vertice[edge[i][1]][0], vertice[edge[i][1]][1], vertice[edge[i][1]][2]]), gl.STATIC_DRAW)
        gl.drawArrays(gl.LINES, 0, 2)
    }
}

function applyTexture() {
   
}
function drawSceneGInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.enable(gl.DEPTH_TEST)
    gl.uniformMatrix4fv(locationMatrix, false, matrixView)
    gl.lineWidth(4)

    /*
    gl.uniform4f(locationColor, 0.0, 0.0, 1.0, 1.0)
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, 0, 1, -1, 0, 1, 1, 0]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferIndex)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    */
}

function drawCube(point) {
    //gl.uniform1i(locationMode, 1)

    let face = [
        [0, 2, 1], [0, 3, 2], [3, 6, 2], [3, 7, 6], [0, 7, 3], [0, 4, 7], [4, 5, 6], [4, 6, 7], [0, 1, 5], [0, 5, 4], [1, 2, 6], [1, 6, 5]
    ]

    let edge = [
        [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]
    ]

    for (let i = 0; i < 12; i++) {
        let tempPoint = [point[face[i][0]][0], point[face[i][0]][1], point[face[i][0]][2], point[face[i][1]][0], point[face[i][1]][1], point[face[i][1]][2], point[face[i][2]][0], point[face[i][2]][1], point[face[i][2]][2]]

        let normal = vec3Cross([point[face[i][1]][0] - point[face[i][0]][0], point[face[i][1]][1] - point[face[i][0]][1], point[face[i][1]][2] - point[face[i][0]][2]], [point[face[i][2]][0] - point[face[i][0]][0], point[face[i][2]][1] - point[face[i][0]][1], point[face[i][2]][2] - point[face[i][0]][2]])
        let brightness = vec3AngleCos([0, 0, 1], normal)

        if (brightness < 0.1) {
            brightness = 0
        }

        gl.uniform4f(locationColor, 0.0 * brightness, 1.0 * brightness, 0.0 * brightness, 1.0)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tempPoint), gl.STATIC_DRAW)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    gl.uniform4f(locationColor, 1.0, 1.0, 1.0, 1.0)

    for (let i = 0; i < 12; i++) {
        let tempPoint = [point[edge[i][0]][0], point[edge[i][0]][1], point[edge[i][0]][2], point[edge[i][1]][0], point[edge[i][1]][1], point[edge[i][1]][2]]
        
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tempPoint), gl.STATIC_DRAW)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1]), gl.STATIC_DRAW)
        gl.drawArrays(gl.LINES, 0, 2)
    }
}

function drawPlane() {
    
}

function drawSceneBarInit() {
    contextBar.font = '32px neodgm'
    contextBar.textAlign = 'left'
    contextBar.textBaseline = 'top'
    contextBar.fillStyle = 'Black'
    contextBar.strokeStyle = 'Black'
    contextBar.lineWidth = 2
    contextBar.clearRect(0, 0, 640, 40)
}
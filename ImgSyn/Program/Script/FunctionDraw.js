function drawSceneGInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.uniform4f(locationColor, 0.0, 0.0, 1.0, 1.0)
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, 0, 1, -1, 0, 1, 1, 0]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferIndex)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
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
function drawSceneGInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferIndex)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
}
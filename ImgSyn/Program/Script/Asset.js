let img = {
    newFile : new Image(),
    save : new Image(),
    toImage : new Image(),

    cube : new Image(),
    glass : new Image(),

    textureSample : new Image(),
}

let texture = {
    sample : {
        canvas : document.createElement('canvas'),
        context : null,
        texture : null
    }
}

function loadImage() {
    img.save.src = 'Image/Save.png'
    img.newFile.src = 'Image/New.png'
    img.toImage.src = 'Image/ToImage.png'

    img.cube.src = 'Image/Cube.png'
    img.glass.src = 'Image/Glass.png'
    img.textureSample.src = 'Image/TextureSample.png'

    /*
    texture.sample.context = texture.sample.canvas.getContext('2d')
    texture.sample.context.width = 80
    texture.sample.context.height = 80
    texture.sample.context.drawImage(img.textureSample, 0, 0)

    texture.sample.texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture.sample.texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.sample.canvas)*/
}
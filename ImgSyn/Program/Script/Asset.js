let img = {
    newFile : new Image(),
    save : new Image(),
    toImage : new Image(),

    cube : new Image(),
    glass : new Image()
}

function loadImage() {
    img.save.src = 'Image/Save.png'
    img.newFile.src = 'Image/New.png'
    img.toImage.src = 'Image/ToImage.png'

    img.cube.src = 'Image/Cube.png'
    img.glass.src = 'Image/Glass.png'
}
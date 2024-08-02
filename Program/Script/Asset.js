let img = {
    button : {
        fileNew : new Image(),
        fileSave : new Image(),
        fileOpen : new Image(),

        cube : new Image(),
        glass : new Image(),
        camera : new Image(),
        light : new Image(),
    }
}

function imageLoad() {
    img.button.cube.src = 'Image/ButtonCube.png'
    img.button.glass.src = 'Image/ButtonGlass.png'
    img.button.camera.src = 'Image/ButtonCamera.png'
    img.button.light.src = 'Image/ButtonLight.png'
}
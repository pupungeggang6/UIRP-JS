let img = {
    button : {
        fileNew : new Image(),
        save : new Image(),
        load : new Image(),

        download : new Image(),
        upload : new Image(),
        convertImage : new Image(),
        train : new Image(),
        removeReflection : new Image(),

        cube : new Image(),
        glass : new Image(),
        camera : new Image(),
        light : new Image(),

        up : new Image(),
        down : new Image(),
    }
}

function imageLoad() {
    img.button.fileNew.src = 'Image/ButtonFileNew.png'
    img.button.save.src = 'Image/ButtonSave.png'
    img.button.load.src = 'Image/ButtonLoad.png'

    img.button.download.src = 'Image/ButtonDownload.png'
    img.button.upload.src = 'Image/ButtonUpload.png'
    img.button.convertImage.src = 'Image/ButtonConvertImage.png'
    img.button.train.src = 'Image/ButtonTrain.png'
    img.button.removeReflection.src = 'Image/ButtonRemoveReflection.png'

    img.button.cube.src = 'Image/ButtonCube.png'
    img.button.glass.src = 'Image/ButtonGlass.png'
    img.button.camera.src = 'Image/ButtonCamera.png'
    img.button.light.src = 'Image/ButtonLight.png'

    img.button.up.src = 'Image/ButtonUp.png'
    img.button.down.src = 'Image/ButtonDown.png'
}
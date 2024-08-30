let img = {
    button : {
        fileNew : new Image(),
        save : new Image(),
        load : new Image(),

        background : new Image(),
        cube : new Image(),
        glass : new Image(),
        camera : new Image(),
        light : new Image(),
        reflection : new Image(),

        download : new Image(),
        convertImage : new Image(),
        train : new Image(),
        removeReflection : new Image(),

        upload : new Image(),
        uploadRef : new Image(),
        uploadRefNo : new Image(),
        generateImage : new Image(),
        downloadMultiple : new Image(),

        up : new Image(),
        down : new Image(),
        done : new Image(),
        delete : new Image(),
    }
}

function imageLoad() {
    img.button.fileNew.src = 'Image/ButtonFileNew.png'
    img.button.save.src = 'Image/ButtonSave.png'
    img.button.load.src = 'Image/ButtonLoad.png'

    img.button.background.src = 'Image/ButtonBackground.png'
    img.button.cube.src = 'Image/ButtonCube.png'
    img.button.glass.src = 'Image/ButtonGlass.png'
    img.button.camera.src = 'Image/ButtonCamera.png'
    img.button.light.src = 'Image/ButtonLight.png'
    img.button.reflection.src = 'Image/ButtonReflection.png'

    img.button.download.src = 'Image/ButtonDownload.png'
    img.button.convertImage.src = 'Image/ButtonConvertImage.png'
    img.button.generateImage.src = 'Image/ButtonGenerateImage.png'

    img.button.upload.src = 'Image/ButtonUpload.png'
    img.button.uploadRef.src = 'Image/ButtonUploadRef.png'
    img.button.uploadRefNo.src = 'Image/ButtonUploadRefNo.png'
    img.button.downloadMultiple.src = 'Image/ButtonDownloadMultiple.png'
    img.button.train.src = 'Image/ButtonTrain.png'
    img.button.removeReflection.src = 'Image/ButtonRemoveReflection.png'

    img.button.up.src = 'Image/ButtonUp.png'
    img.button.down.src = 'Image/ButtonDown.png'
    img.button.done.src = 'Image/ButtonDone.png'
    img.button.delete.src = 'Image/ButtonDelete.png'

    space3DBackground.src = 'Image/Empty.png'
}
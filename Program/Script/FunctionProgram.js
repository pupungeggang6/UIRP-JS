function generateSpace(num) {
    space3DGenerated = []
    
    for (let i = 0; i < num; i++) {
        let tempSpace = {
            'Thing' : JSON.parse(JSON.stringify(space3D)),
            'Camera' : {
                position : [camera.position[0] - 0.2 + Math.random() * 0.4, camera.position[1] - 0.2 + Math.random() * 0.4, camera.position[2] - 0.2 + Math.random() * 0.4],
                rotation : [camera.rotation[0] - 20 + Math.random() * 40, camera.rotation[1] - 20 + Math.random() * 40, camera.rotation[2] - 20 + Math.random() * 40]
            },
            'LightDirection' : [0, 0, -1],
        }

        if (i === 0) {
            tempSpace['Camera'].position = [camera.position[0], camera.position[1], camera.position[2]]
            tempSpace['Camera'].rotation = [camera.rotation[0], camera.rotation[1], camera.rotation[2]]
        }

        space3DGenerated.push(tempSpace)
    }
}

function generateImages() {
    imageGenerated = []
    canvasGenerate = []
    contextGenerate = []
    imageName = []
    
    reflectionMode = false
    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 224
        tempCanvas.height = 224
        drawGlassTexture(space3DGenerated[i]['Thing'], space3DTexture, space3DGenerated[i]['Camera'], light.direction)
        draw3DSpaceFull(space3DGenerated[i]['Thing'], space3DTexture, space3DGenerated[i]['Camera'], light.direction)
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.drawImage(canvasG, 0, 0, 224, 224)
        canvasGenerateBackground.push(tempCanvas)
        contextGenerateBackground.push(tempContext)
    }

    reflectionMode = true
    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 224
        tempCanvas.height = 224
        tempContext.fillStyle = 'White'
        drawGlassTexture(space3DGenerated[i]['Thing'], space3DTexture, space3DGenerated[i]['Camera'], light.direction)
        draw3DSpaceFull(space3DGenerated[i]['Thing'], space3DTexture, space3DGenerated[i]['Camera'], light.direction)
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.fillRect(0, 0, 224, 224)
        tempContext.drawImage(canvasG, 0, 0, 224, 224)
        canvasGenerateReflection.push(tempCanvas)
        contextGenerateReflection.push(tempContext)
    }

    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 448
        tempCanvas.height = 224
        tempCanvas.fillStyle = 'White'
        tempContext.clearRect(0, 0, 448, 224)
        tempContext.fillRect(0, 0, 448, 224)
        tempContext.drawImage(canvasGenerateReflection[i], 0, 0, 224, 224)
        tempContext.drawImage(canvasGenerateBackground[i], 224, 0, 224, 224)
        canvasGenerateFull.push(tempCanvas)
        contextGenerateFull.push(tempContext)
    }
}

function changeTexture(input) {
    let file = input.files[0]
    space3DTexture[selected.space3DThing] = new Image()
    space3DTexture[selected.space3DThing].src = URL.createObjectURL(file)
}

function uploadFile(input) {
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.addEventListener('load',function () {
        let tempSpace = JSON.parse(reader.result)
        space3D = tempSpace.space
        camera = tempSpace.camera
        light = tempSpace.light

        space3DTexture = []
        for (let i = 0; i < space3D.length; i++) {
            space3DTexture.push(null)
        }
    }, false)
}

function uploadTestImage(input) {
    let file = input.files[0]
    testImage.src = URL.createObjectURL(file)
}

function uploadBackgroundImage(input) {
    let file = input.files[0]
    space3DBackground.src = URL.createObjectURL(file)
}

function uploadModelRefImage(input) {
    imageModelRef = []
    for (let i = 0; i < input.files.length; i++) {
        let tempImage = new Image()
        tempImage.src = URL.createObjectURL(input.files[i])
        imageModelRef.push(tempImage)
    }
}

function uploadModelRefNoImage(input) {
    imageModelRefNo = []
    for (let i = 0; i < input.files.length; i++) {
        let tempImage = new Image()
        tempImage.src = URL.createObjectURL(input.files[i])
        imageModelRefNo.push(tempImage)
    }
}
function generateSpace(num) {
    space3DGenerated = []
    
    for (let i = 0; i < num; i++) {
        let tempSpace = {
            'Thing' : JSON.parse(JSON.stringify(space3D)),
            'Camera' : {
                position : [camera.position[0] - 0.2 + Math.random() * 0.4, camera.position[1] - 0.2 + Math.random() * 0.4, camera.position[2] - 0.2 + Math.random() * 0.4],
                rotation : [camera.rotation[0] - 10 + Math.random() * 20, camera.rotation[1] - 10 + Math.random() * 20, camera.rotation[2] - 10 + Math.random() * 20]
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
        canvasGenerate.push(tempCanvas)
        contextGenerate.push(tempContext)
        imageName.push(`GeneratedNoReflection${i}.png`)
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
        canvasGenerate.push(tempCanvas)
        contextGenerate.push(tempContext)
        imageName.push(`GeneratedReflection${i}.png`)
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

    reader.onload = function () {
        let tempSpace = JSON.parse(reader.result)
        space3D = tempSpace.space
        camera = tempSpace.camera
        light = tempSpace.light

        space3DTexture = []
        for (let i = 0; i < space3D.length; i++) {
            space3DTexture.push(null)
        }
    }
}

function uploadTestImage(input) {
    let file = input.files[0]
    testImage.src = URL.createObjectURL(file)
}
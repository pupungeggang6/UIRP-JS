function generateSpace(num) {
    space3DGenerated = []
    
    for (let i = 0; i < num; i++) {
        let tempThing = JSON.parse(JSON.stringify(space3D))

        for (let j = 0; j < tempThing.length; j++) {
            tempThing[j]['Geometry'][0] += -0.05 + Math.random() * 0.1
            tempThing[j]['Geometry'][1] += -0.05 + Math.random() * 0.1
            tempThing[j]['Geometry'][2] += -0.05 + Math.random() * 0.1
        }

        let tempSpace = {
            'Thing' : tempThing,
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

function findGlass(index) {
    let tempGlass = {}
    let space3DTemp = space3DGenerated[index]['Thing']
    for (let i = 0; i < space3DTemp.length; i++) {
        if (space3DTemp[i]['Type'] === 'Glass') {
            let normal = [0, 0, -1]
            normal = matrixVectorTransform(matrixRotate(2, space3DTemp[i]['Geometry'][8]), normal)
            normal = matrixVectorTransform(matrixRotate(1, space3DTemp[i]['Geometry'][7]), normal)
            normal = matrixVectorTransform(matrixRotate(0, space3DTemp[i]['Geometry'][6]), normal)
            tempGlass = {
                position : [space3DTemp[i]['Geometry'][0] + normal[0] * 0.4, space3DTemp[i]['Geometry'][1] + normal[1] * 0.4, space3DTemp[i]['Geometry'][2] + normal[2] * 0.4],
                rotation : [space3DTemp[i]['Geometry'][6], space3DTemp[i]['Geometry'][7], space3DTemp[i]['Geometry'][8]],
            }
        }
    }
    return tempGlass
}

async function generateImages() {
    canvasGenerateBg = []
    contextGenerateBg = []
    canvasGenerateRef = []
    contextGenerateRef = []
    canvasGenerateFull = []
    contextGenerateFull = []
    
    reflectionMode = false
    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 224
        tempCanvas.height = 224
        tempContext.fillStyle = 'White'
        camera = findGlass(i)
        drawGlassTexture(space3DGenerated[i]['Thing'], space3DTexture, camera, light.direction)
        draw3DSpaceFull(space3DGenerated[i]['Thing'], space3DTexture, camera, light.direction)
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.fillRect(0, 0, 224, 224)
        tempContext.drawImage(canvasG, 0, 0, 224, 224)
        canvasGenerateBg.push(tempCanvas)
        contextGenerateBg.push(tempContext)
    }

    reflectionMode = true
    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 224
        tempCanvas.height = 224
        tempContext.fillStyle = 'White'
        camera = findGlass(i)
        await drawGlassTexture(space3DGenerated[i]['Thing'], space3DTexture, camera, light.direction)
        await draw3DSpaceFull(space3DGenerated[i]['Thing'], space3DTexture, camera, light.direction)
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.fillRect(0, 0, 224, 224)
        tempContext.drawImage(canvasG, 0, 0, 224, 224)
        canvasGenerateRef.push(tempCanvas)
        contextGenerateRef.push(tempContext)
    }

    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 448
        tempCanvas.height = 224
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.drawImage(canvasGenerateRef[i], 0, 0, 224, 224)
        tempContext.drawImage(canvasGenerateBg[i], 224, 0, 224, 224)
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
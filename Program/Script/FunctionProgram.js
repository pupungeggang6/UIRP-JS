function generateSpace(num) {
    space3DGenerated = []
    
    for (let i = 0; i < num; i++) {
        let tempSpace = {
            'Thing' : JSON.parse(JSON.stringify(space3D)),
            'CameraPosition' : [-0.5 + Math.random(), -0.5 + Math.random(), -0.5 + Math.random()],
            'CameraRotation' : [-15 + Math.random() * 30, -15 + Math.random() * 30, -15 + Math.random() * 30],
            'LightDirection' : [0, 0, -1],
        }

        if (i === 0) {
            tempSpace['CameraPosition'] = [0, 0, 0]
            tempSpace['CameraRotation'] = [0, 0, 0]
        }

        space3DGenerated.push(tempSpace)
    }
}

function generateImages() {
    imageGenerated = []
    canvasGenerate = []
    contextGenerate = []
    
    for (let i = 0; i < space3DGenerated.length; i++) {
        let tempCanvas = document.createElement('canvas')
        let tempContext = tempCanvas.getContext('2d')
        tempCanvas.width = 224
        tempCanvas.height = 224
        draw3DSpaceGenerated(i)
        tempContext.clearRect(0, 0, 224, 224)
        tempContext.drawImage(canvasG, 0, 0, 224, 224)
        canvasGenerate.push(tempCanvas)
        contextGenerate.push(tempContext)
    }
}

function changeTexture(input) {
    let file = input.files[0]
    space3D[selected.space3DThing]['Texture'] = new Image()
    space3D[selected.space3DThing]['Texture'].src = URL.createObjectURL(file)
}
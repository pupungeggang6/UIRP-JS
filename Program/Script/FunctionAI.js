const IMAGE_SIZE = 150528

async function TFGetData() {
    for (let i = 0; i < canvasGenerateBackground.length; i++) {
        modelImageDataBackground.push(contextGenerateBackground[i].getImageData(0, 0, 224, 224))
        modelImageDataReflection.push(contextGenerateReflection[i].getImageData(0, 0, 224, 224))
    }

    for (let i = 0; i < canvasGenerateBackground.length; i++) {
        modelImageDataReflection[i] = tf.browser.fromPixels(modelImageDataReflection[i])
        modelImageDataBackground[i] = tf.browser.fromPixels(modelImageDataBackground[i])
    }
}

async function TFDownSample(filters, size) {
    let initializer = tf.initializers.randomNormal(0, 0.02)

    result = tf.sequential()
    result.add(tf.layers.conv2d({
        inputShape : [224, 224, 3],
        kernelSize : size,
        filters : filters,
        strides : 2,
        padding : 'same',
        kernelInitializer : initializer,
        useBias : false
    }))
}

function TFInit() {
    
}

async function TFTrain() {
    
}

async function TFTest() {

}

async function TFRun() {
    
}
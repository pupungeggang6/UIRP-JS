const IMAGE_SIZE = 200704

function TFGetData() {
    for (let i = 0; i < 5; i++) {
        modelImageDataBackground[i] = contextGenerate[i].getImageData(0, 0, 224, 224)
        modelImageDataReflection[i] = contextGenerate[i + 5].getImageData(0, 0, 224, 224)
    }
}

function TFInit() {
    
}

async function TFTrain() {
    
}

async function TFTest() {

}

async function TFRun() {
    
}
function saveFile() {
    let saveObject = {
        space : space3D,
        camera : camera,
        light : light
    }
    const blob = new Blob([JSON.stringify(saveObject)], {type: 'text/plain'})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `test.3drefl`
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
}

function downloadImage() {
    var link = document.createElement('a')
    link.download = 'test.png'
    link.href = canvasImageFull.toDataURL()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

function downloadImageGenerated() {
    for (let i = 0; i < canvasGenerate.length; i++) {
        var link = document.createElement('a')
        if (reflectionMode === true) {
            link.download = `generatedReflection${i}.png`
        } else {
            link.download = `generatedNoReflection${i}.png`
        }
        link.href = canvasGenerate[i].toDataURL()
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}

function uploadFile() {

}
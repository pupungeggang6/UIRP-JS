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
    a.download = `test`
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
        if (i < 5) {
            link.download = `ImageRefNo${downloadedNum.toString().padStart(3, '0')}.png`
            downloadedNum += 1
        } else {
            link.download = `ImageRef${downloadedNumRef.toString().padStart(3, '0')}.png`
            downloadedNumRef += 1
        } 
        link.href = canvasGenerate[i].toDataURL()
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}
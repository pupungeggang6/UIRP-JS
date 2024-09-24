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
    for (let i = 0; i < 5; i++) {
        var link = document.createElement('a')
        link.download = `ImageBg${i}.png`
        link.href = canvasGenerateBackground[i].toDataURL()
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    for (let i = 0; i < 5; i++) {
        var link = document.createElement('a')
        link.download = `ImageRef${i}.png`
        link.href = canvasGenerateReflection[i].toDataURL()
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}
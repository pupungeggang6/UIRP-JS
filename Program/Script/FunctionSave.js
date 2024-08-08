function saveFile() {
    alert(1)
    let saveObject = {
        space : space3D,
        camera : camera,
        light : light
    }
    const blob = new Blob([JSON.stringify(saveObject) + JSON.stringify], {type: 'text/plain'})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `test.3drefl`
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
}

function uploadFile() {

}
function matrixIdentity() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

function matrixMultiply(mat1, mat2) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            result[i * 4 + j] = mat1[i * 4 + 0] * mat2[j + 0] + mat1[i * 4 + 1] * mat2[j + 4] + mat1[i * 4 + 2] * mat2[j + 8] + mat1[i * 4 + 3] * mat2[j + 12]
        }
    }

    return result
}

function matrixRotate(axis, angle) {
    let s = Math.sin(angle / 180 * Math.PI)
    let c = Math.cos(angle / 180 * Math.PI)
    
    if (axis === 0) {
        return [
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        ]
    } else if (axis === 1) {
        return [
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1
        ]
    } else {
        return [
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    }
}

function matrixTranslate(x, y, z) {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    ]
}

function matrixVectorMul(mat, vec) {
    return [
        mat[0] * vec[0] + mat[1] * vec[1] + mat[2] * vec[2] + mat[3] * vec[3],
        mat[4] * vec[0] + mat[5] * vec[1] + mat[6] * vec[2] + mat[7] * vec[3],
        mat[8] * vec[0] + mat[9] * vec[1] + mat[10] * vec[2] + mat[11] * vec[3],
        mat[12] * vec[0] + mat[13] * vec[1] + mat[14] * vec[2] + mat[15] * vec[3]
    ]
}

function matrixVectorTransform(mat, vec) {
    let vecHomo = [vec[0], vec[1], vec[2], 1]
    vecHomo = matrixVectorMul(mat, vecHomo)
    return [vecHomo[0] / vecHomo[3], vecHomo[1] / vecHomo[3], vecHomo[2] / vecHomo[3]]
}
function mat4vec4Mul(mat, vec) {
    return [
        mat[0] * vec[0] + mat[1] * vec[1] + mat[2] * vec[2] + mat[3] * vec[3],
        mat[4] * vec[0] + mat[5] * vec[1] + mat[6] * vec[2] + mat[7] * vec[3],
        mat[8] * vec[0] + mat[9] * vec[1] + mat[10] * vec[2] + mat[11] * vec[3],
        mat[12] * vec[0] + mat[13] * vec[1] + mat[14] * vec[2] + mat[15] * vec[3]
    ]
}

function vec4Rotate(vec, axis, angle) {
    let rotMat = []
    let s = Math.sin(angle * Math.PI / 180)
    let c = Math.cos(angle * Math.PI / 180)
    
    if (axis === 0) {
        rotMat = [
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        ]
    } else if (axis === 1) {
        rotMat = [
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1
        ]
    } else {
        rotMat = [
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    }

    return mat4vec4Mul(rotMat, vec)
}

function rotateObject(point, axis, angle) {
    let pointRotated = point
    let rotMat = []
    let s = Math.sin(angle * Math.PI / 180)
    let c = Math.cos(angle * Math.PI / 180)
    
    if (axis === 0) {
        rotMat = [
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        ]
    } else if (axis === 1) {
        rotMat = [
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1
        ]
    } else {
        rotMat = [
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    }
    
    for (let i = 0; i < pointRotated.length; i++) {
        pointRotated[i] = [pointRotated[i][0], pointRotated[i][1], pointRotated[i][2], 1]
        pointRotated[i] = mat4vec4Mul(rotMat, pointRotated[i])
        pointRotated[i] = [pointRotated[i][0] / pointRotated[i][3], pointRotated[i][1] / pointRotated[i][3], pointRotated[i][2] / pointRotated[i][3]]
    }

    return pointRotated
}

function vec3Cross(vec1, vec2) {
    return [vec1[1] * vec2[2] - vec1[2] * vec2[1], vec1[2] * vec2[0] - vec1[0] * vec2[2], vec1[0] * vec2[1] - vec1[1] * vec2[0]]
}

function vec3Norm(vec) {
    return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2])
}

function vec3AngleCos(vec1, vec2) {
    let dot = vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2]

    return dot / (vec3Norm(vec1) * vec3Norm(vec2))
}
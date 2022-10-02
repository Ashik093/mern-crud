import axios from 'axios'
export function Create(body) {
    let URL = "/api/v1/InsertProduct"
    return axios.post(URL, body).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error)
        return false
    })
}
export function Read() {
    let URL = "/api/v1/GetProduct"
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            return res.data.message
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error)
        return false
    })
}
export function ReadById(id) {
    let URL = "/api/v1/GetProductById/" + id
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            return res.data.message
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error)
        return false
    })
}

export function Update(id, body) {
    let URL = "/api/v1/UpdateProduct/" + id
    return axios.post(URL, body).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error)
        return false
    })
}
export function Delete(id) {
    let URL = "/api/v1/DeleteProduct/" + id
    return axios.post(URL, {}).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error)
        return false
    })
}
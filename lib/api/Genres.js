import { getJSON, BASE_URL, putJSON, postJSON, deleteJSON } from "."

const URL = `${BASE_URL}/genres`

const GenresAPI = {
    readAll() {
        return getJSON(`${URL}`)
    },

    read(id) {
        return getJSON(`${URL}/${id}`)
    }
}

export default GenresAPI 
import { getJSON, BASE_URL, putJSON, postJSON, deleteJSON } from "."

const URL = `${BASE_URL}/genres`

const GenresAPI = {
    readAll() {
        return getJSON(`${URL}`)
    },

    read(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(genre, token) {
        const data = postJSON(`${URL}`, { body: genre, token })
        return data
    },
    update(genre, token) {
        const data = putJSON(`${URL}/${genre.id}`, { body: genre, token })
        return data
    },
    delete(genre, token) {
        let data = null;
        if (genre != null) {
            data = deleteJSON(`${URL}/${genre.id}`, { token })
        }
        return data
    }
}

export default GenresAPI 
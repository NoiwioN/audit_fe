import { getJSON, BASE_URL, putJSON, postJSON, deleteJSON } from "."

const URL = `${BASE_URL}/audiobuecher`

const AudiobooksAPI = {
    readAll() {
        return getJSON(`${URL}`)
    },

    read(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(audiobook, token) {
        const data = postJSON(`${URL}`, { body: audiobook, token }, true)
        return data
    },
    update(audiobook, token) {
        const data = putJSON(`${URL}`, { body: audiobook, token }, true)
        return data
    },
    delete(audiobookId, token) {
        let data = null;
        if (audiobookId != null) {
            data = deleteJSON(`${URL}/${audiobookId}`, { token }, true)
        }
        return data
    }
}

export default AudiobooksAPI 
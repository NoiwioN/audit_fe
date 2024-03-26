import {BASE_URL, deleteJSON, getJSON, postJSON, putJSON} from "@/lib/api/index";

const URL = `${BASE_URL}/ausleihen`
const AusleihenAPI = {

     readAll(){
         return getJSON(`${URL}`)
},
    read(id){
         return getJSON(`${URL}/${id}`)
    },
    create(ausleihe, token){
         return postJSON(`${URL}`, {body:ausleihe, token}, true)
    },
    update(ausleihe, id, token){
         return putJSON(`${URL}`, {body:ausleihe, token}, true)
    },
    delete (id, token){
         return deleteJSON(`${URL}/${id}`,{token}, true)
    },
    readByUserId(userId){
         return getJSON(`${URL}?userId=${userId}`)
    }

}
export default AusleihenAPI;
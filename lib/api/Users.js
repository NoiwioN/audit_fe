import {BASE_URL, deleteJSON, getJSON, postJSON, putJSON, getJSONByUserName} from "@/lib/api/index";

const USER_URL = `${BASE_URL}/users`
const UsersAPI = {
    getUserByUsername(userName, token){
        return getJSONByUserName(`${USER_URL}?username=${userName}`,{token})
    },
    login(user) {
        const data = postJSON("http://localhost:8080/login", {body: user})
        return data;
    },
    create(user) {
        return postJSON(`${USER_URL}/sign-up`, {body: user},true)
    },
    update(user, userId) {
        return putJSON(USER_URL, {body: user},true)
    },
    delete(userId,token) {
        return deleteJSON(`${USER_URL}/${userId}`,{token},true)
    },
    findAll(token) {
        return getJSON(USER_URL,{token})
    },
    findById(userId) {
        return getJSON(`${USER_URL}/${userId}`,{})
    }
}
export default UsersAPI
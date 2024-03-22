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
    create(user, token) {
        return postJSON(`${USER_URL}/sign-up`, {body: user, token},true)
    },
    update(user, userId, token) {
        console.log("update was tried")
        return putJSON(USER_URL, {body: user,token},true)
    },
    delete(userId,token) {
        return deleteJSON(`${USER_URL}/${userId}`,{token},true)
    },
    findAll() {
        return getJSON(USER_URL)
    },
    findById(userId) {
        return getJSON(`${USER_URL}/${userId}`,{})
    }
}
export default UsersAPI
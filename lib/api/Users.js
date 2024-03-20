import {BASE_URL, postJSON} from "@/lib/api/index";

const USER_URL = `${BASE_URL}/users`
 const UsersAPI = {
    AuthenticationAPI(user){
        const data = postJSON("http://localhost:8080/login",{body: user})
        return data;
    },
    signUp (user){
        return postJSON({USER_URL},{body:user})
    }
}
export default UsersAPI
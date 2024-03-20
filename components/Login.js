import {useState} from "react";
import {useGlobalContext} from "@/store";
import UsersAPI from "/lib/api/Users"
import {useRouter} from "next/router";

export default function Login() {
    const {login} = useGlobalContext();
    const [user, setUser] = useState({benutzername: "", passwort: ""})
    const [errors, setErrors] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prevState => ({...prevState, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const handleLogin = async () => {
            setIsLoading(true)
            validateUser()
            console.log("Benutzer: ")
            console.log(JSON.stringify(user))
            const session = await UsersAPI.AuthenticationAPI(user)
            login(session)
            await router.push("/")
        }
        handleLogin().then(() => {
            setIsLoading(false)
        })
    }

    const validateUser = () => {
        if (!user.password) setErrors("Kein Passwort angegeben")
        if (!user.email) setErrors("Keine E-mail angegeben")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input onChange={handleChange} type="text"
                           name="benutzername" placeholder="Benutzername" value={user.benutzername}/>
                </div>

                <div>
                    <input onChange={handleChange} type="password"
                           name="passwort" placeholder="Passwort" value={user.password}/>
                </div>
                <button disabled={isLoading} onClick={handleSubmit}>
                    {isLoading ? "...Loading" : "Login"}
                </button>
            </form>
        </div>
    )

}
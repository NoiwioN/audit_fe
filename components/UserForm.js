import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import UsersAPI from "@/lib/api/Users";

export default function UserForm() {
    const {session} = useGlobalContext();
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const emptyUser = {vorname: "", nachname: "", email: "", benutzername: "", passwort: ""}

    useEffect(() => {
        const getUser = async () => {
            const user = await UsersAPI.findById(router.query.id)
            setUser(user)
        }

        if (router.query.id) {
            getUser().then(() => setLoading(false))
        } else {
            setUser(emptyUser)
            setLoading(false)
        }
    }, [router]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (router.query.id) {
            await UsersAPI.update(user, router.query.id, session.accessToken).then(() => setLoading(false))
        } else {
            await UsersAPI.create(user, session.accessToken).then(() => setLoading(false))
        }
        router.push("/users")
    }
    return !isLoading ? (<div>
        <form>
            <div>

                <label htmlFor="Benutzername">Benutzername</label>
                <div>
                    <input value={user.benutzername}
                           type="text" name="benutzername" id="benutzername" placeholder="benutzername"
                           onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="Vorname">Vorname</label>
                <div>
                    <input value={user.vorname}
                           type="text" name="vorname" id="vorname" placeholder="vorname"
                           onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="Nachname">Nachname</label>
                <div>
                    <input value={user.nachname}
                           type="text" name="nachname" id="nachname" placeholder="nachname"
                           onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="E-Mail">E-Mail</label>
                <div>
                    <input value={user.email}
                           type="email" name="email" id="email" placeholder="email"
                           onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="Passwort">Passwort</label>
                <div>
                    <input value={user.passwort}
                           type="password" name="passwort" id="passwort" placeholder="passwort"
                           onChange={handleChange}/>
                </div>
            </div>
            <button className={"button"} onClick={handleSubmit}>Submit</button>
        </form>
    </div>) : <p>Request is being loaded</p>

}
import Link from "next/link";
import {useGlobalContext} from "@/store";
import UsersAPI from "@/lib/api/Users";
import {useRouter} from "next/router";

export default function UserDetail({user}) {
    const {session} = useGlobalContext();
    const router = useRouter()

    const handleDelete = async ()=>{
        await UsersAPI.delete(user.id,session.accessToken);
        router.push("/users")
    }
    return !user ? <p>User...</p> : (
        <div>
            <div>
                <h1>Benutzername: {user.benutzername}</h1>
                <p>Vorname: {user.vorname}</p>
                <p>Nachname: {user.nachname}</p>
                <p>Email: {user.email}</p>
                {session&&(<Link href={`edit/${user.id}`}>Bearbeiten</Link>)}
                {session&&(<button onClick={()=>{handleDelete()}}>Löschen</button>)}
            </div>
        </div>)
}


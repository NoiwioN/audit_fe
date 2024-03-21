import {useGlobalContext} from "@/store";
import Link from "next/link";
import UsersAPI from "@/lib/api/Users";

export default function Users ({nachname, name, email, benutzername, id}) {

    const {session} = useGlobalContext();
    const handleDelete = async ()=>{
        await UsersAPI.delete(id,session.accessToken);
    }

    return (
        <div>
            <h2>{benutzername}</h2>
            <p>{email}</p>
            <p>{nachname} {nachname}</p>
            <Link href={`users/${id}`}>Mehr Details</Link>
            {session&&(<Link href={`users/edit/${id}`}>Bearbeiten</Link>)}
            {session&&(<button onClick={()=>{handleDelete().then(window.location.reload)}}>Bearbeiten</button>)}
        </div>
    )
}
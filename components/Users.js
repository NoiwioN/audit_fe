import {useGlobalContext} from "@/store";
import Link from "next/link";

export default function Users ({nachname, name, email, benutzername, id}) {

    const {session} = useGlobalContext();

    return (
        <div>
            <h1>{benutzername}</h1>
            <p>{email}</p>
            <p>{nachname} {nachname}</p>
            <Link href={`users/${id}`}>Mehr Details</Link>
            {session&&(<Link href={`users/edit/${id}`}>Bearbeiten</Link>)}
            {session&&(<Link href={`users/edit/${id}`}>Bearbeiten</Link>)}
        </div>
    )
}
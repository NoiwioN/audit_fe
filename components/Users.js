import { useGlobalContext } from "@/store";
import Link from "next/link";
import UsersAPI from "@/lib/api/Users";
import styles from "@/styles/Home.module.css";

export default function Users({ nachname, name, email, benutzername, id }) {

    const { session } = useGlobalContext();
    const handleDelete = async () => {
        await UsersAPI.delete(id, session.accessToken);
    }

    return (
        <div>
            <h2>{benutzername}</h2>
            <p>{email}</p>
            <p>{nachname} {name}</p>
            <Link className={styles.link} href={`users/${id}`}>Mehr Details</Link>
            {session && (<Link className={styles.link} href={`users/edit/${id}`}>Bearbeiten</Link>)}
            {session && (<button className={styles.link} onClick={() => { handleDelete().then(window.location.reload()) }}>Löschen</button>)}
        </div>
    )
}
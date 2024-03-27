import { useGlobalContext } from "@/store";
import Link from "next/link";
import UsersAPI from "@/lib/api/Users";
import styles from "@/styles/Home.module.css";

export default function Users({ nachname, name, email, benutzername, id }) {

    const {session} = useGlobalContext();

    return (
        <div>
            <h2>{benutzername}</h2>
            <p>{email}</p>
            <p>{nachname} {name}</p>
            <Link href={`users/${id}`}>Mehr Details</Link>
        </div>
    )
}
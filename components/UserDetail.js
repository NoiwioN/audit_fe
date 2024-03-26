import { useGlobalContext } from "@/store";
import Link from "next/link";
import UsersAPI from "@/lib/api/Users";

export default function UserDetail({ user }) {

    const { session } = useGlobalContext();
    const handleDelete = async () => {
        await UsersAPI.delete(user.id, session.accessToken);
    }
    return !user ? <p>User...</p> : (
        <div>
            <div>
                <h1>Benutzername: {user.benutzername}</h1>
                <p>Vorname: {user.vorname}</p>
                <p>Nachname: {user.nachname}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>)
}


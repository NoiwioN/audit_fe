import { useGlobalContext } from "@/store";
import { useEffect } from "react"
import BorrowByUser from "@/components/BorrowByUser";

export default function profilePage() {
    const { session } = useGlobalContext()

    return (
        <div>
            <h1>Dein Profile</h1>
            <p>Username: {session.userForSession.benutzername} </p>
            {
                session.userForSession.email ? <p>Vorname: {session.userForSession.vorname} </p> : <p> Vorname: Keine Angaben </p>
            }
            {
                session.userForSession.email ? <p>Nachname: {session.userForSession.nachname}</p> : <p> Nachname: Keine Angaben </p>
            }
            {
                session.userForSession.email ? <p>Email: {session.userForSession.email}</p> : <p> Email: Keine Angaben </p>
            }
            <BorrowByUser userId={session.userForSession.id} />
        </div>
    )
}
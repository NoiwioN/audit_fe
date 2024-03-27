import { getUserObject } from "../components/Login"
export default function profilePage() {
    const userobject = getUserObject()

    console.log(`userobject   ${userobject}`)
    return (
        <div>
            <h1>Dein Profile</h1>
            <p>Username: {userobject.benutzername}</p>
            <p>Passwort: {userobject.passwort}</p>
        </div>
    )
}
import { getUserObject } from "../components/Login"
import styles from "./profile.module.css"
export default function profilePage() {
    const userobject = getUserObject()

    console.log(`userobject   ${userobject}`)
    return (
        <div>
            <h1>Dein Profile</h1>
            <p>Username: {userobject.benutzername}</p>
            <p className={styles.foot}>Passwort: {userobject.passwort}</p>
        </div>
    )
}
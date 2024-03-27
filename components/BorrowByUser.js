import { useEffect, useState } from "react";
import AusleihenAPI from "@/lib/api/Ausleihen";
import styles from "./BorrowByUser.module.css";

export default function BorrowByUser({ userId }) {

    const [borrowsByUser, setBorrowsByUser] = useState()
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        const getBorrows = async () => {
            const borrows = await AusleihenAPI.readByUserId(userId);
            setBorrowsByUser(borrows)
        }
        getBorrows().then(() => setIsLoading(false))
    }, []);

    return loading ? <p>Ausleihen werden geladen</p> : (<div>
        <table>
            <tbody>
                <tr className={styles.grid}>
                    <th>Buch</th>
                    <th>Autor</th>
                    <th>Benutzer</th>
                    <th>Ausleihe von</th>
                    <th>Ausleihe Bis</th>
                </tr>
                {borrowsByUser.map(borrowByUser => {
                    return (
                        <tr className={styles.grid} key={borrowByUser.id}>
                            {
                                borrowByUser.audiobuch.titel ? <td>{borrowByUser.audiobuch.titel}</td> : <td>Keine Angabe</td>
                            }
                            <td>{borrowByUser.audiobuch.autor}</td>
                            <td>{borrowByUser.user.benutzername}</td>
                            <td>{borrowByUser.ausleihdatum}</td>
                            <td>{borrowByUser.rueckgabedatum}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>)
}
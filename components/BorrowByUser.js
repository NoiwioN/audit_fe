import { useEffect, useState } from "react";
import AusleihenAPI from "@/lib/api/Ausleihen";
import styles from "./BorrowByUser.module.css";

export default function BorrowByUser({ userId }) {

    const [borrowsByUser, setBorrowsByUser] = useState(null)
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        const getBorrows = async () => {
            const borrows = await AusleihenAPI.readByUserId(userId);
            setBorrowsByUser(borrows)
        }
        getBorrows().then(() => setIsLoading(false))
    }, []);

    return loading ? <p>Ausleihen werden geladen</p> : (
        <div>

            <div className={styles.grid}>
                <h3>Buch</h3>
                <h3>Autor</h3>
                <h3>Benutzer</h3>
                <h3>Ausleihe von</h3>
                <h3>Ausleihe Bis</h3>
            </div>
            {
                borrowsByUser[0] ?
                    borrowsByUser.map(borrowByUser => {
                        return (
                            <div className={styles.grid} key={borrowByUser.id}>
                                {
                                    borrowByUser.audiobuch.titel ? <p>{borrowByUser.audiobuch.titel}</p> : <p>Keine Angabe</p>
                                }
                                {
                                    borrowByUser.audiobuch.autor ? <p>{borrowByUser.audiobuch.autor}</p> : <p>Keine Angabe</p>
                                }
                                {
                                    borrowByUser.user.benutzername ? <p>{borrowByUser.user.benutzername}</p> : <p>Keine Angabe</p>
                                }
                                {
                                    borrowByUser.ausleihdatum ? <p>{borrowByUser.ausleihdatum}</p> : <p>Keine Angabe</p>
                                }
                                {
                                    borrowByUser.rueckgabedatum ? <p>{borrowByUser.rueckgabedatum}</p> : <p>Keine Angabe</p>
                                }
                            </div>
                        )
                    })
                    :
                    <div className={styles.grid}>
                        <p>Keine Angabe</p>
                        <p>Keine Angabe</p>
                        <p>Keine Angabe</p>
                        <p>Keine Angabe</p>
                        <p>Keine Angabe</p>
                    </div>
            }


        </div>)
}
import styles from "./impressum.module.css"

export default function impressumPage() {
    return (
        <div>
            <h1 className={styles.div}>Impressum</h1>
            <div className={styles.div}>
                <p className={styles.big}>Audit</p>
                <p>ICT Campus Post</p>
                <p>Engehaldenstrasse 26</p>
                <p>3030 Bern</p>
            </div>
            <div className={styles.div}>
                <p className={styles.big}>Kontakt</p>
                <p>Telefonnr: +41 079 196 64 90</p>
                <p>E-Mail-Adresse: julia.ebner@ict-campus.net</p>
            </div>
            <div className={styles.div}>
                <p className={styles.big}>Vertretung</p>
                <p>Julia Ebner</p>
                <p>Mattias Zurbuchen</p>
            </div>
            <div className={styles.div}>
                <p className={styles.big}>Icon</p>
                <p>Generiert mit looka.com</p>
            </div>
        </div>
    )
}
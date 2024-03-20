import Navigation from "@/components/Navigation";
import styles from "@/components/Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.links}>
            <img src="/logo.png" alt="Yo where is the logo" className={styles.img}/>
            <h1>CAMPUS NEWS</h1>
        </div>
        <div className={styles.rechts}>
            <Navigation/>
        </div>

    </header>
}
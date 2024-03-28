import Navigation from "@/components/Navigation";
import styles from "@/components/Header.module.css"
//TODO Logo ???
export default function Header() {
    return <header className={styles.header}>
        <div className={styles.links}>
            <img src="Logo.png" alt="Yo where is the logo" className={styles.img}/>
        </div>
        <div className={styles.rechts}>
            <Navigation/>
        </div>

    </header>
}
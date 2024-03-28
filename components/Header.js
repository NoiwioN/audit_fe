import Navigation from "@/components/Navigation";
import styles from "@/components/Header.module.css"

export default function Header() {
    return (
        <div className={styles.div}>
            <div className={styles.links}>
                <img src="Logo.png" alt="Yo where is the logo" className={styles.img} />
            </div>
            <div className={styles.rechts}>
                <Navigation />
            </div>
        </div>)
}
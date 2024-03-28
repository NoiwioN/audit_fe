import Header from "@/components/Header"
import Link from "next/link"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={styles.div}>
            <Header />
            <main className={styles.main}>
                <div>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                <Link className={styles.link} href="/impressum">Impressum</Link>
            </footer>
        </div>
    )
} 
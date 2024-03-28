import Link from "next/link";
import styles from "@/components/Navigation.module.css"
import { useGlobalContext } from "@/store";
import { useState } from "react";

import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();
    const { session, logout, login } = useGlobalContext();
    const [sessionState, setSessionState] = useState(session)
    const handleClick = () => {
        logout();
        router.push("/login")
    }
    function Topnav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += "responsive";
        } else {
            x.className = "topnav";
        }
    }
    function myFunction(x) {
        x.classList.toggle("change");
    }
    return !session ? (
        <header className={styles.header}>
            <nav className={styles.topnav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/" className={styles.links}>Audiobücher</Link></li>
                    <li className={styles.li}><Link href="/login" className={styles.links}>Login</Link></li>
                    <li className={styles.li}><Link href="/signUp" className={styles.links}>Sign-Up</Link></li>
                </ul>
                <div className={styles.menuicon} onclick={() => { myFunction(this); Topnav(); }}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </nav>
        </header>

    ) : (
        <header className={styles.header}>
            <nav className={styles.topnav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/profile" className={styles.links}>Profil</Link></li>
                    <li className={styles.li}><Link href="/login" onClick={handleClick} className={styles.links}>Logout</Link></li>
                    <li className={styles.li}><Link href="/users" className={styles.links}>Users</Link></li>
                    <li className={styles.li}><Link href="/" className={styles.links}>Audiobücher</Link></li>
                </ul>
                <div className={styles.menuicon} onclick={() => { myFunction(this); Topnav(); }}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </nav>
        </header>)
}
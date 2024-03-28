import Link from "next/link";
import styles from "@/components/Navigation.module.css"
import { useGlobalContext } from "@/store";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();
    const { session, logout } = useGlobalContext();
    const handleClick = () => {
        logout();
        router.push("/login")
    }
    return !session ? (
        <nav >
            <Link href="/" className={styles.links}>Audiobücher</Link>
            <Link href="/login" className={styles.links}>Login</Link>
            <Link href="/signUp" className={styles.links}>Sign-Up</Link>
        </nav>
    ) : (<nav>
        <Link href="/profile" className={styles.links}>Profil</Link>
        <Link href="/login" onClick={handleClick} className={styles.links}>Logout</Link>
        <Link href="/users" className={styles.links}>Users</Link>
        <Link href="/" className={styles.links}>Audiobücher</Link>
    </nav>)
}
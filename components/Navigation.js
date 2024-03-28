import Link from "next/link";
import styles from "@/components/Navigation.module.css"
import { useGlobalContext } from "@/store";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Navigation() {
    const router = useRouter()
    const { session, logout, login } = useGlobalContext();
    const [sessionState, setSessionState] = useState(session)
    const [transform, setTransform] = useState("none")
    const [transform2, setTransform2] = useState("none")
    const [opacity, setOpacity] = useState("1")
    const [display, setDisplay] = useState("inline-block")
    const [visibility, setVisibility] = useState("hidden")
    const [fontsize, setFontsize] = useState("17px")

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1024) {
                setVisibility("visible");
            } else {
                setVisibility("hidden");
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        logout();
        router.push("/login")
    }

    function change() {
        if (opacity === "1") {
            setOpacity("0")
            setTransform("translate(0, 11px) rotate(-45deg)")
            setTransform2("translate(0, -11px) rotate(45deg)")
            setDisplay("block")
            setVisibility("visible")
            setFontsize("30px")
            console
        }
        else {
            setOpacity("1")
            setTransform("none")
            setTransform2("none")
            setDisplay("inline-block")
            setVisibility("hidden")
            setFontsize("17px")
        }
    }
    return (
        <header className={styles.header}>
            <nav className={styles.topnav}>

                {
                    !session ? (
                        <ul className={styles.ul}>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Audiobücher</Link></li>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/login" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Login</Link></li>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/signUp" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Sign-Up</Link></li>
                        </ul>
                    ) : (
                        <ul className={styles.ul}>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/profile" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Profil</Link></li>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/login" onClick={handleClick} className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Logout</Link></li>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/users" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Users</Link></li>
                            <li className={styles.li} style={{ display: display, visibility: visibility }}><Link href="/" className={styles.links} style={{ visibility: visibility, fontSize: fontsize }}>Audiobücher</Link></li>
                        </ul>
                    )
                }
                <div className={styles.menuicon} onClick={change}>
                    <div className={styles.bar} style={{ transform: transform }}></div>
                    <div className={styles.bar} style={{ opacity: opacity }}></div>
                    <div className={styles.bar} style={{ transform: transform2 }}></div>
                </div>
            </nav>
        </header >

    )
}
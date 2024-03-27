import UsersAPI from "@/lib/api/Users";
import Users from "@/components/Users";
import { useGlobalContext } from "@/store";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function users({ users }) {
    const {session} = useGlobalContext();
    const router = useRouter();
    useEffect(() => {
        if(session) return;
        router.push("/login")
    }, []);
    return (
        <div>
            <h1>Users</h1>
            <Link className={styles.link} href={"/users/create"}>Erstellen</Link>
            {users.map(user => {
                return <Users key={user.id}
                    name={user.vorname}
                    id={user.id}
                    benutzername={user.benutzername}
                    email={user.email}
                    nachname={user.nachname}></Users>

            })}
        </div>
    )
}

export async function getStaticProps() {
    const users = await UsersAPI.findAll()
    return {
        props: { users }, revalidate: 10
    }
}
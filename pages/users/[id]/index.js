import UsersAPI from "@/lib/api/Users";
import UserDetail from "@/components/UserDetail";
import BorrowByUser from "@/components/BorrowByUser";
import Link from "next/link";
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import styles from "@/styles/Home.module.css"

export default function index({user}) {
    const {session} = useGlobalContext();
    const router = useRouter()

    const handleDelete = async () => {
        await UsersAPI.delete(user.id, session.accessToken);
        router.push("/users")
    }
    return (<div>
        <UserDetail user={user}/>
        <BorrowByUser userId={user.id}></BorrowByUser>
        <Link className={styles.link} href={`/users`}>Zurück</Link>
        {session && (<Link className={styles.link} href={`edit/${user.id}`}>Bearbeiten</Link>)}
        {session && (<button className={styles.link} onClick={() => {
            handleDelete()
        }}>Löschen</button>)}

    </div>)
}

export async function getStaticProps(context) {
    const user = await UsersAPI.findById(context.params.id)
    return {
        props: {user}, revalidate: 10
    }
}

export async function getStaticPaths() {
    const users = await UsersAPI.findAll();
    //Klammern wegen implizitem return
    const paths = users.map((user) => (
        {
            params: {id: user.id.toString()}
        })
    )
    return {paths, fallback: true}
}
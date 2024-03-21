import UsersAPI from "@/lib/api/Users";
import Users from "@/components/Users";
import {useGlobalContext} from "@/store";
import Link from "next/link";

export default function users({users}){
    return (
        <div>
            <h1>Users</h1>
            <Link href={"/users/create"}>Create User</Link>
            {users.map(user =>{
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

export async function getStaticProps () {
    const users= await UsersAPI.findAll()
    return {
        props: {users}, revalidate :10
    }
}
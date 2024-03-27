export default function UserDetail({ user }) {

    return !user ? <p>User...</p> : (
        <div>
            <div>
                <h1>Benutzername: {user.benutzername}</h1>
                <p>Vorname: {user.vorname}</p>
                <p>Nachname: {user.nachname}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>)
}


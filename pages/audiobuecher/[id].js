import AudiobooksAPI from "@/lib/api/Audiobooks";
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function DetailAudiobuecherPage({audiobook}) {
    const {session} = useGlobalContext()
    const router = useRouter();

    const deleteAudiobook = async () => {
        await AudiobooksAPI.delete(audiobook.id, session.accessToken)
        router.push("/")
    }
    return !audiobook ? null : (
        <div>
            <div>
                <h1>{audiobook.titel}</h1>
                <p>Autor: {audiobook.autor}</p>
                <p>Länge: {audiobook.laenge}</p>
                <p>Genre: {audiobook.genre.name}</p>
                <p>Erscheinungsjahr: {audiobook.erscheinungsjahr}</p>
            </div>
            <div>
                <Link className={styles.link} href={`/`}>Zurück</Link>
                {
                    session ? <Link className={styles.link}
                                    href={`/audiobuecher/edit/${audiobook.id}`}>Bearbeiten</Link> : null
                }
                {
                    session ? <button className={styles.link} onClick={deleteAudiobook}>Löschen</button> : null
                }

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const audiobooks = await AudiobooksAPI.readAll()
    const paths = audiobooks.map(audiobook => (
        {
            params: {id: audiobook.id.toString()}
        })
    )
    return {paths, fallback: true}
}

export async function getStaticProps(context) {
    const id = context.params.id
    const audiobook = await AudiobooksAPI.read(id)
    return {
        props: {audiobook}, revalidate: 10
    }
}
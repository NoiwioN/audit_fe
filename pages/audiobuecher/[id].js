import AudiobooksAPI from "@/lib/api/Audiobooks";
import { useGlobalContext } from "@/store";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DetailAudiobuecherPage({ audiobook }) {
    const { loading } = useGlobalContext()
    const router = useRouter();

    const deleteAudiobook = async () => {
        await AudiobooksAPI.delete(audiobook)
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
                <Link href={`/`}>Zurück</Link>
                <Link href={`/audiobuecher/edit/${audiobook.id}`}>Bearbeiten</Link>
                <Link onClick={deleteAudiobook} href={`/`}>Löschen</Link>

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const audiobooks = await AudiobooksAPI.readAll()
    const paths = audiobooks.map(audiobook => (
        {
            params: { id: audiobook.id.toString() }
        })
    )
    return { paths, fallback: true }
}

export async function getStaticProps(context) {
    const id = context.params.id
    console.log(id)
    const audiobook = await AudiobooksAPI.read(id)
    return {
        props: { audiobook }, revalidate: 10
    }
}
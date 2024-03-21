import AudiobooksAPI from "@/lib/api/Audiobooks"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"

export default function AudiobookForm({ editedAudiobook = null }) {

    const defaultAudiobook = {
        titel: "",
        laenge: 0,
        autor: "",
        genre_id: 0,
        erscheinungsjahr: ""
    }
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [audiobook, setAudiobook] = useState(defaultAudiobook)

    useEffect(() => {
        if (editedAudiobook != null) {
            setAudiobook(editedAudiobook)
        }
    }, [editedAudiobook])

    const handleChange = (e) => {// e = event
        const name = e.target.name
        const text = e.target.value
        setAudiobook({
            ...audiobook,
            ...{ [name]: text }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (audiobook.id) {
            const updatedAudiobook = await AudiobooksAPI.update(audiobook)
            setAudiobook(updatedAudiobook)
        } else {
            const newAudiobook = await AudiobooksAPI.create(audiobook);
            setAudiobook(newAudiobook)
        }
        setIsLoading(false)
        router.push(`/`)

    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titel</label>
                    <div>
                        <input defaultValue={audiobook.titel}
                            type="text" name="title" id="title" placeholder="Title" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="length">Länge</label>
                    <div>
                        <input defaultValue={audiobook.laenge}
                            type="number" name="length" id="length" placeholder="Länge" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="author">Autor</label>
                    <div>
                        <input defaultValue={audiobook.autor}
                            type="text" name="author" id="author" placeholder="Autor" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <div>
                        <input defaultValue={audiobook.genre_id}
                            type="number" name="genre" id="genre" placeholder="Genre" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="release_year">Erscheinungsjahr</label>
                    <div>
                        <input defaultValue={audiobook.erscheinungsjahr}
                            type="number" name="release_year" id="release_year" placeholder="Erscheinungsjahr" rows="1" onChange={handleChange} />
                    </div>
                </div>

                <button href={`/`} className={"button"}>submit</button>
                <Link href={`/`} >Back</Link>
            </form>

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
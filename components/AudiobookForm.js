import AudiobooksAPI from "@/lib/api/Audiobooks"
import GenresAPI from "@/lib/api/Genres"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import Dropdown from 'react-dropdown'
import styles from "./AudiobookForm.module.css"

export default function AudiobookForm() {

    const defaultAudiobook = {
        titel: "",
        laenge: 0,
        autor: "",
        genre_id: 0,
        erscheinungsjahr: ""
    }
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [audiobook, setAudiobook] = useState(defaultAudiobook)
    const [genres, setGenres] = useState(null)

    const options= []
    const defaultOption = options[0]

    useEffect(() => {
        const getGenres= async ()=>{
            const genres= await GenresAPI.read();
            setGenres(genres)
        }
        const getAudiobook = async () => {
            const audiobook = await AudiobooksAPI.read(router.query.id)
            setAudiobook(audiobook)
        }
        if(router.query.id){
            getAudiobook()
            getGenres().then(()=>)
        }else{
            getGenres().then(()=>{
                setAudiobook(defaultAudiobook)
            })
        }
        setIsLoading(false)


    }, [router])

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
                        <Dropdown options={options} value={defaultOption} placeholder="Wähle ein Genre" />;
                    </div>
                </div>
                <div>
                    <label htmlFor="release_year">Erscheinungsjahr</label>
                    <div>
                        <input defaultValue={audiobook.erscheinungsjahr}
                            type="number" name="release_year" id="release_year" placeholder="Erscheinungsjahr" rows="1" onChange={handleChange} />
                    </div>
                </div>

                <button className={"button"}>Erstellen</button>
                <Link href={`/`} >Zurück</Link>
            </form>

        </div>
    )
}


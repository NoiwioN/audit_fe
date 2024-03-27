import AudiobooksAPI from "@/lib/api/Audiobooks"
import GenresAPI from "@/lib/api/Genres"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Dropdown from 'react-dropdown'
import styles from "@/styles/Home.module.css";
import genres from "@/lib/api/Genres";
import { useGlobalContext } from "@/store"

export default function AudiobookForm() {
    const { session } = useGlobalContext();

    const defaultAudiobook = {
        titel: "",
        laenge: 0,
        autor: "",
        genre: {
            id: 0,
            name: ""
        },
        erscheinungsjahr: 0
    }
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [audiobook, setAudiobook] = useState(defaultAudiobook)
    const [genres, setGenres] = useState()
    const [options, setOptions] = useState([])

    const fillOptions = () => {
        if (!genres) return;
        const temp = []
        for (let g of genres) {
            temp.push({ value: g.id, label: g.name })
        }
        setOptions(temp)
    }
    const defaultOption = options[0]

    const getGenres = async () => {
        return await GenresAPI.readAll();

    }
    const getAudiobook = async () => {
        return await AudiobooksAPI.read(router.query.id)
    }
    const getData = async () => {
        getAudiobook().then(a => {
            setAudiobook(a)
        })
        getGenres().then(g => {
            setGenres(g)
        })
    }


    const handleChange = (e) => {// e = event
        let name = "";
        let text;
        if (e.target) {
            name = e.target.name
            text = e.target.value
            if (name === "laenge" || name === "erscheinungsjahr") {
                text = parseInt(text)
            }
        } else {

            text = { id: parseInt(e.value), name: e.label }
            name = "genre"
        }
        setAudiobook({
            ...audiobook,
            ...{ [name]: text }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (audiobook.id) {
            await AudiobooksAPI.update(audiobook, session.accessToken).then(() => { setIsLoading(false) })
        } else {
            await AudiobooksAPI.create(audiobook, session.accessToken).then(() => { setIsLoading(false) })
        }
        setIsLoading(false)
        router.push(`/`)

    }
    useEffect(() => {
        fillOptions();
    }, [genres]);

    useEffect(() => {

        if (router.query.id) {
            getData()
        } else {
            getGenres().then((g) => {
                setGenres(g)
            })
            fillOptions()
        }
        fillOptions()
        setIsLoading(false)


    }, [router])
    return isLoading ? <p>Loading page....</p> : (
        <div>
            <form>
                <div>
                    <label htmlFor="title">Titel</label>
                    <div>
                        <input value={audiobook.titel}
                            type="text" name="titel" id="title" placeholder="Title" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="length">Länge</label>
                    <div>
                        <input value={audiobook.laenge}
                            type="number" name="laenge" id="length" placeholder="Länge" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="author">Autor</label>
                    <div>
                        <input value={audiobook.autor}
                            type="text" name="autor" id="author" placeholder="Autor" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="genre">Wähle ein Genre:</label>
                    <div>
                        <Dropdown onChange={handleChange} options={options} value={audiobook.genre.name} placeholder="Genre" />;
                    </div>
                </div>
                <div>
                    <label htmlFor="release_year">Erscheinungsjahr</label>
                    <div>
                        <input value={audiobook.erscheinungsjahr}
                            type="number" name="erscheinungsjahr" id="release_year" placeholder="Erscheinungsjahr"
                            rows="1" onChange={handleChange} />
                    </div>
                </div>

                <button className={styles.link} onClick={handleSubmit}>Erstellen</button>
                <Link className={styles.link} href={`/`}>Zurück</Link>
            </form>

        </div>
    )
}


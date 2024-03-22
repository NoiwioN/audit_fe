import Link from "next/link"

export default function Post(props) {
    return (
        <div key={props.key}>
            <h1>{props.titel}</h1>
            <p>Autor: {props.autor}</p>
            <Link href={`/audiobuecher/${props.id}`}>Mehr Details</Link>
            <hr />
        </div>
    )
}
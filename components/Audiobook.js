import Link from "next/link"
import styles from "@/styles/Home.module.css";

export default function Post(props) {
    return (
        <div key={props.key}>
            <h1>{props.titel}</h1>
            <p>Autor: {props.autor}</p>
            <Link className={styles.link} href={`audiobuecher/${props.id}`}>Mehr Details</Link>
            <hr/>
        </div>
    )
}
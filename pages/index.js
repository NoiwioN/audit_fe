
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useGlobalContext } from "@/store";
import Audiobook from "../components/Audiobook"
import AudiobooksAPI from "@/lib/api/Audiobooks";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ audiobooks }) {
  const { session } = useGlobalContext()
  return (
    <div>
      <h1>Audiobücher</h1>
      {
        session ? <Link className={styles.link} href={`/audiobuecher/create`}>Erstellen</Link> : null
      }
      {
        audiobooks.map(audiobook => {
          return (
            <div key={audiobook.id}>
              <Audiobook id={audiobook.id} titel={audiobook.titel} autor={audiobook.autor} laenge={audiobook.laenge} erscheinungsjahr={audiobook.erscheinungsjahr} />
            </div>
          )
        })
      }
    </div>
  )
}
export async function getStaticProps() {
  const audiobooks = await AudiobooksAPI.readAll();

  return {
    props: { audiobooks }, revalidate: 10
  }
}

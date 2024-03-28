import AudiobookForm from "@/components/AudiobookForm"
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function createPage() {
    const {session, loading} = useGlobalContext()
    const router = useRouter();

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push('/login');
        }
    }, [session, router, loading]);

    return (
        <div>
            <h2>Erstelle ein neues Audiobuch</h2>
            <AudiobookForm/>
        </div>
    )
}
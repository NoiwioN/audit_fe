import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/store";
import AudiobooksAPI from "@/lib/api/Audiobooks";
import AudiobookForm from "@/components/AudiobookForm"

export default function editPage() {

    const router = useRouter();
    const { session, loading } = useGlobalContext()
    const id = router.query.id;

    const [audiobook, setAudiobook] = useState(null)

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push('/login');
        }

        let isMounted = true;
        if (!router.isReady) return
        const loadAudiobook = async () => {
            const audiobook = await AudiobooksAPI.read(id)
            if (isMounted) {
                setAudiobook(audiobook)
            }
        }
        loadAudiobook()
        return () => (isMounted = false)

    }, [session, router, loading])


    return (
        <div>
            <h1>Bearbeite das Audiobuch</h1>
            <AudiobookForm />
        </div>
    );
}

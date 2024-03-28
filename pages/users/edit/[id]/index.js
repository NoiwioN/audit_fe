import UserForm from "@/components/UserForm";
import {useGlobalContext} from "@/store";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function index() {
    const {session, loading} = useGlobalContext()
    const router = useRouter();

    useEffect(() => {
        if (!session && !loading && router.isReady) {
            router.push('/login');
        }
    }, [session, router, loading]);
    return <UserForm></UserForm>
}
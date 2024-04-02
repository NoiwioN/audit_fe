import styles from "./CustomNotFound.module.css"
import {useEffect, useState} from "react";

export default function CustomNotFound() {
    const [image, setImage] = useState(1)
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment seconds state by 1 every second
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 5000); // 1000 milliseconds = 1 second

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setImage((prev => (prev % 7 + 1)))
    }, [seconds]);


    return (
        <>
            <audio autoPlay={false}>
                <source src="/peace.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <div className={`${styles.imageContainer} ${styles.div}`}>
                <img className={`${styles.imageOne} ${styles.image}`} src={`Baum${image}.jpg`} alt={"Tree"}/>
                <h1 className={styles.h1}>"You may not have found what you wanted,<br/> but you found what you needed"
                </h1>
            </div>
        </>

    )
}
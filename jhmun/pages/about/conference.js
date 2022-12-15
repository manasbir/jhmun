import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export default function Conference() {
    const apikey = "AIzaSyB9I3dAJiKh73tOgUtQeTdHAn7lNEYfRFo"


    return (
        <div className={styles.container}>
        <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            About the Conference
        </h1>
        </main>
        </div>
    )
}
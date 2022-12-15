import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'


export default function Conference() {


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
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/General.module.scss'
import Footer from '../../../components/footer'
import { useRouter } from 'next/router'

export default function Backgrounder() {
    const router = useRouter();
    const { committee } = router.query;
    return (
        <div className={styles.container}>
        <Head>
        <title>Backgrounder</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Backgrounder
        </h1>
        <div className={styles.text}>
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
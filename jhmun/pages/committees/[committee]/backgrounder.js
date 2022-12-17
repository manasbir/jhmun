import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/general.module.scss'
import Footer from '../../../components/footer'
import { useRouter } from 'next/router'

export default function Backgrounder() {
    const router = useRouter();
    const { committee } = router.query;

    let pdf;
    let title = "Backgrounder";
    if (committee == "hcc") {
        title = "HCC Backgrounder";
        pdf = "/backgrounders/hcc.pdf";
    } else if (committee == "sochum") {
        title = "SOCHUM Backgrounder";
        pdf = "/backgrounders/sochum.pdf";
    } else if (committee == "unodc") {
        title = "UNODC Backgrounder";
        pdf = "/backgrounders/unodc.pdf";
    } else if (committee == "undp") {
        title = "UNDP Backgrounder";
        pdf = "/backgrounders/undp.pdf";
    }

    return (
        <div className={styles.container}>
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            {title}
        </h1>
        <div className={styles.frameholder}>
            <iframe src={pdf}></iframe>
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
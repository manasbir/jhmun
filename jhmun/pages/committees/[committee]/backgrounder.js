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
        <link rel="icon" href="//design/Icons & Buttons/MUN Eagle Green.svg" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            {title}
        </h1>
        <div className={styles.pdf}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR4B6K7zjPwelstXyFv_dDF6k9aHcARmmlxk64U0uALd7IVitanDs0supxLCfl4ugBdZzIYGWG4yGvq/pub?embedded=true"></iframe>
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
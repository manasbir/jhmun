import Head from 'next/head'
import styles from '../../styles/general.module.scss'
import Footer from '../../components/footer'


export default function Conference() {


    return (
        <div className={styles.container}>
        <Head>
        <title>Conference Details</title>
        <link rel="icon" href="//design/Icons & Buttons/MUN Eagle Green.svg" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Conference Details
        </h1>
        <div className={styles.deets}>
        <p>Johnston Heights Secondary School | 15350 99 Ave, Surrey, BC V3R 0R9</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.85937114348!2d-122.79846870860364!3d49.182104588745425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d74048d730e3%3A0xf4ea6ac459ca5f91!2sJohnston%20Heights%20Secondary%20School!5e0!3m2!1sen!2sca!4v1671271717267!5m2!1sen!2sca"
         className={styles.map}></iframe>
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'

export default function Secretariat() {

    return (
        <div className={styles.container}>
        <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Secretariat
        </h1>
        <div className={styles.sec}>
            <div className={styles.people}>
                <div className={styles.person}>
                    <img src={"/design/Images/people/manas.png"}/>
                    <h1>Krishna Verma</h1>
                    <h2>Secretary General</h2>
                    <p>Shout out my big dawg krishna verma, organizing and what not</p>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.person}>
                    <img src={"/design/Images/people/manas.png"}/>
                    <h1>Krishna Verma</h1>
                    <h2>Secretary General</h2>
                    <p>Shout out my big dawg krishna verma, organizing and what not</p>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.person}>
                    <img src={"/design/Images/people/manas.png"}/>
                    <h1>Krishna Verma</h1>
                    <h2>Secretary General</h2>
                    <p>Shout out my big dawg krishna verma, organizing and what not</p>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.person}>
                    <img src={"/design/Images/people/manas.png"}/>
                    <h1>Krishna Verma</h1>
                    <h2>Secretary General</h2>
                    <p>Shout out my big dawg krishna verma, organizing and what not</p>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.person}>
                    <img src={"/design/Images/people/manas.png"}/>
                    <h1>Krishna Verma</h1>
                    <h2>Secretary General</h2>
                    <p>Shout out my big dawg krishna verma, organizing and what not</p>
                </div>
            </div>
        </div>
        </main>
        </div>
    )
}
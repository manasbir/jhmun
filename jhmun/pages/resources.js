import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/general.module.scss'
import Footer from "../components/footer.js"

export default function Resources() {
    return (
        <div className={styles.container}>
        <Head>
        <title>Resources</title>
        <link rel="icon" href="//design/Icons & Buttons/MUN Eagle Green.svg" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Resources
        </h1>
        <div className={styles.group}>
            <div className={styles.resources}>
                <div className={styles.resource}>
                    <h1>Position Paper Guide</h1>
                    <p>To be eligible for an award, the delegate must write a position paper summarizing their position, past actions, solutions, and more. The guide can be accessed here.
                        <br></br>
                        <br></br>
                        Once you are done, please submit your paper to the form on your respective committees email.
                    </p>
                </div>
            </div>
            <div className={styles.resources}>
                <div className={styles.resource}>
                    <h1>Resolution Paper Guide</h1>
                    <p>
                        Towards the end of the committee, delegates are expected to create a Resolution Paper for solutions and ideas to be added to. The guide to how to create, format, and what to include in this paper can be seen here.
                    </p>
                </div>
            </div>
            <div className={styles.resources}>
                <div className={styles.resource}>
                    <h1>Rules of Procedure</h1>
                    <p>
                        In a Model UN conference, debates flows through the Rules of Procedure. The Chair should guide each committee through debate, but to be prepared beforehand, please visit the link attached here.
                    </p>
                </div>
            </div>
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
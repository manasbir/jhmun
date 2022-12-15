import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/general.module.scss'
import people from "../../texts/sec.json"

export default function Secretariat() {
    const getPeople = () => {
        console.log(people.people.length);
        let sec = [];
        for (let i = 0; i < people.people.length; i++) {
            sec.push(
                <Link href={"/about/secretariat/" + people.people[i].name.toLowerCase().replace(" ", "-")}>
                <div className={styles.people}>
                    <div className={styles.person}>
                        <img src={people.people[i].image}/>
                        <h1>{people.people[i].name}</h1>
                        <h2>{people.people[i].role}</h2>
                        <p>{people.people[i].description}</p>
                    </div>
                </div>
                </Link>
            )
        }
        console.log(sec);
        return sec;
    }
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
            {getPeople()}
        </div>
        </main>
        </div>
    )
}
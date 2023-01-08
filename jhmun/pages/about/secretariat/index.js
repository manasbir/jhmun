import Head from 'next/head'
import styles from '../../../styles/general.module.scss'
import people from "../../../public/jsons/sec.json"
import Footer from "../../../components/footer"
import Image from "next/image"

export default function Secretariat() {
    const getPeople = () => {
        console.log(people.people.length);
        let sec = [];
        for (let i = 0; i < people.people.length; i++) {
            sec.push(
                <div className={styles.people}>
                    <div className={styles.person}>
                        <Image src={people.people[i].image} width={500} height={500} priority={true} loading={"eager"}/>
                        <h1>{people.people[i].name}</h1>
                        <h2>{people.people[i].role}</h2>
                        <p>{people.people[i].description}</p>
                    </div>
                </div>
            )
        }
        console.log(sec);
        return sec;
    }
    return (
        <div className={styles.container}>
        <Head>
        <title>Secretariat</title>
        <link rel="icon" href="//design/Icons & Buttons/MUN Eagle Green.svg" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Secretariat
        </h1>
        <div className={styles.sec}>
            {getPeople()}
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
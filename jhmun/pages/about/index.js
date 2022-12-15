import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'

export default function About() {
return (
    <div className={styles.container}>
    <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
        <h1 className={styles.title}>
            About Johnston Heights MUN
        </h1>
        <div className={styles.text}>
            <h2>What is Model United Nations</h2>
            <p>
                Model United Nations are academic simulations where students take the role of delegates from different countries to solve real world issues with the policies and perspectives of their assigned country. Model UN conferences are meant to be a accessible avenues for students wishing to formulate debates and foster conversation whilst participating in a competitive but collectively minded environment. 
                <br></br>
                <br></br>
                Model United Nations committees follow a format that is meant to uphold its universal principal of academic rigour. Delegates choose a available delegation through the <b>Country Matrix</b>. It is then beneficial to write Position Papers on your delegations stance. Position Papers are mandatory for award considerations and are also a opportunity for delegates to become accustomed to their delegations stance. During committees sessions, students are upheld to timed speeches and follow the mandates of the chair. For guidance regarding Rules of Procedures, go to our <b>Resources Page</b>.  
            </p>
            </div>
        <div className={styles.text2}>
            <h2>Our Mission</h2>
            <p>
                The secretariat is excited to host the first annual session of JHMUN on February 11th, 2023. Our mission is to facilitate the development of public speaking, efficient researching, and critical thinking skills. Designed especially with the developing delegate in mind, we understand that this is a learning experience. JHMUN is an excellent opportunity for delegates to discuss past and present geopolitical issues in an academically stimulating environment. 
                <br></br>
                <br></br>
                Through fierce debate and persuasive negotiation, delegates will deepen their understanding of the multifaceted relationships that link states, expand their perspectives on global conflicts and construct comprehensive and applicable Resolution Papers. The skills, experiences, and networks nurtured through JHMUN will supplement everyone&#39;s growth as global citizens. Our conference prioritizes accessibility and is completely free to every prospective high-school delegate.
            </p>
        </div>
        <div className={styles.text}>
            <h2>Contact Us</h2>
            <a href="https://www.instagram.com/jhmun2023/" target="_blank" rel="noreferrer">
            <div className={styles.socials}>
                <img src="/design/Icons & Buttons/insta.svg"/>
                @jhmun2023
                </div>
            </a>
            <a href="mailto:jhmun@gmail.com" target="_blank" rel="noreferrer">
            <div className={styles.socials}>
                <img src="/design/Icons & Buttons/gmail.svg"/>
                jhmun@gmail.com
                </div>
            </a>
            <a href="https://www.google.com/maps/place/Johnston+Heights+Secondary+School/@49.1799062,-122.8010459,17z/data=!4m10!1m2!2m1!1sjohnston+heights!3m6!1s0x5485d74048d730e3:0xf4ea6ac459ca5f91!8m2!3d49.1822047!4d-122.7970244!15sChBqb2huc3RvbiBoZWlnaHRzkgELaGlnaF9zY2hvb2zgAQA!16zL20vMGRoNHdn" target="_blank" rel="noreferrer">
            <div className={styles.socials}>
                <img src="/design/Icons & Buttons/maps.svg"/>
                Johnston Heights, 15350 99 Ave, Surrey, BC V3R 0R9
                </div>
            </a>

        </div>
    </main>
    </div>
)
}
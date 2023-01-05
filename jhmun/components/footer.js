import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer ({color}) {
    if (color.color == "white") {
    return(
        <footer className={styles.footer1}>
            <h2>Developed by the leaders of today, for the leaders of tomorrow</h2>
            <Image src={"/design/Icons & Buttons/MUN Eagle Green.svg"} width={500} height={100}/>
            <Link href={"https://www.instagram.com/jhmun2023/"}>
            <div className={styles.socials}>
                <Image src={"/design/Icons & Buttons/insta.svg"} width={500} height={40}/>@jhmun2023
            </div>
            </Link>
            <p> Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir" target="_blank" rel="noreferrer">Manasbir Bagri</a>, Designed by Gordon Li</p>
        </footer>
    )
    } else {
        return(
            <footer className={styles.footer2}>
                <h2>Developed by the leaders of today, for the leaders of tomorrow</h2>
                <Image src={"/design/Icons & Buttons/MUN Eagle White.svg"}width={500} height={100}/>
                <a href={"https://www.instagram.com/jhmun2023/"}>
                <div className={styles.socials2}>
                    <Image src={"/design/Icons & Buttons/insta.svg"} width={500} height={40}/>@jhmun2023
                </div>
                </a>
                <p> Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir" target="_blank" rel="noreferrer">Manasbir Bagri</a>, Designed by Gordon Li</p>
            </footer>
        )
    }
}
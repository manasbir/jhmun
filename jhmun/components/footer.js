import styles from '../styles/Footer.module.scss'
export default function Footer ({color}) {
    if (color.color == "white") {
    return(
        <footer className={styles.footer1}>
            <h2>Developed by the leaders of today, for the leaders of tomorrow</h2>
            <img src={"/design/Icons & Buttons/MUN Eagle Green.svg"}></img>
            <a href={"https://www.instagram.com/jhmun2023/"}>
            <div className={styles.socials}>
                <img src={"/design/Icons & Buttons/insta.svg"}></img>@jhmun2023
            </div>
            </a>
            <p> Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir">Manasbir Bagri</a>, Designed by Gordon Li</p>
        </footer>
    )
    } else {
        return(
            <footer className={styles.footer2}>
                <h2>Developed by the leaders of today, for the leaders of tomorrow</h2>
                <img src={"/design/Icons & Buttons/MUN Eagle White.svg"}></img>
                <a href={"https://www.instagram.com/jhmun2023/"}>
                <div className={styles.socials2}>
                    <img src={"/design/Icons & Buttons/insta.svg"}></img>@jhmun2023
                </div>
                </a>
                <p> Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir" target="_blank" >Manasbir Bagri</a>, Designed by Gordon Li</p>
            </footer>
        )
    }
}
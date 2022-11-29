import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Committess.module.scss'
import committeeName from '../texts/committees.js';

export default function Committees() { 
    const router = useRouter()
    const { committee } = router.query

    let title;
    let text = committeeName(committee);
    console.log(committee);
    let names = [];
    let images = [];
    let descriptions = [];
    let image;
    let image2;

    if (committee == "hcc") {
        title = "Historical Crisis Committee";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Soviet Union Committees Background.png"
        image2 = "/design/Images/Soviet Union background.png"
    } else if (committee == "sochum") {
        title = "Social Humanitarian Cultural Committee";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Rohingya Committees Background.png";
        image2 = "/design/Images/Rohingya Muslims background.png";
    } else if (committee == "unodc") {
        title = "United Nations Office on Drugs and Crime";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Doctors Committee Background.png";
        image2 = "/design/Images/MUN doctors background.png";
    } else if (committee == "undp") {
        title = "United Nations Development Programme";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Palestine Israel Committees Background.png";
        image2 = "/design/Images/Palestine Israel Committees Background.png";
    }


    const staff = () => {
        let staff = [];
        for (let i = 0; i < names.length; i++) {
            staff.push(
            <div className={styles.card}>
                <div>
                    <img src={images[i]}/>
                </div>
                <div className={styles.cardText}>
                <h1>{names[i]}</h1>
                <p>{descriptions[i]}</p>
                </div>
            </div>
            )
        }

        return (
            <div className={styles.staff}>
                {staff}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="JHMUN HCC" />
                <link rel="icon" href={"/design/Icons & Buttons/MUN EAGLE.svg"} />
            </Head>
            <div className={"background"}>
                <style jsx>{`
                    @keyframes loadIn2 {
                        0% { 
                        background-position: 00 00;
                        }
                        100% { 
                        background-position: 100 100;
                        }
                    
                    }

                    .background {
                        margin-top: -1.25rem;
                        background-color: #1A3A16;
                        animation: loadIn2 2s;
                        z-index: 0;
                        
                        position: relative;
                        width: 100vw;
                        
                        color: $white;
                        flex-direction: column;
                        display: flex;
                        align-items: center;
                        
                        background-image: url("${image}");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                    
                        padding: 10%;
                        white-space: nowrap;
                    }
                    h1 {
                        color: white;
                        animation: loadIn 2s;
                        font-family: 'DIN Condensed';
                        font-style: normal;
                        font-weight: 750;
                        font-size: 4rem;
                        line-height: 60px;
                        text-align: center;
                        letter-spacing: 0.05em;
                    }
                `}</style>
                <h1>{title}</h1>
            </div>
            <div className={styles.background}>
                <div className={"text"}>
                    <style jsx>{`
                    .text {
                        background-image: url("${image2}");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        position: relative;
                        left: 15%;
                        width: 70%;
                        color: $white;
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        border-radius: 1rem;
                      }
                      h1 {
                        padding-top: 50px;
                        text-align: left;
                        width: 90%;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.75rem;
                        line-height: 40px;
                        font-family: "Din Condensed", "Lato";
                      }

                      p {
                        align-items: center;
                        width: 90%;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 1.1rem;
                        line-height: 35px;
                        font-family: "Lato";
                        padding-bottom: 18px;
                      }

                      hr {
                        width: 100%;
                        border: 1px solid $white;
                        }

                      ::selection {
                        background-color: $primary-color;
                        color: $white;
                      }

                    `}</style>
                    <h1>Committee Description:</h1>
                    {text}
                    <div className={styles.buttons}>
                    <Link href={`/committess/${committee}/matrix`}><button>COUNTRY MATRIX</button></Link>
                    <Link href={`/committess/${committee}/backgrounder`}><button>BACKGROUNDER</button></Link>
                    </div>
                </div>
            <div className={styles.background}>
            {staff()}
            </div>

                
            </div>
        </div>
    )
    
}
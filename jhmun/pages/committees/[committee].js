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
    let images2 = [];
    let descriptions = [];
    let image;
    let image2;

    if (committee == "hcc") {
        title = "Historical Crisis Committee";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        images2 = ["/design/Images/Text backgrounds.png", "/design/Images/Text backgrounds.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Dark Berline Wall.png"
        image2 = "/design/Images/Green Berlin.png"
    } else if (committee == "sochum") {
        title = "Social Humanitarian Cultural Committee";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        images2 = ["/design/Images/Text backgrounds.png", "/design/Images/Text backgrounds.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Rohingya Committees Background.png";
        image2 = "/design/Images/Rohingya Muslims background.png";
    } else if (committee == "unodc") {
        title = "United Nations Office on Drugs and Crime";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        images2 = ["/design/Images/Text backgrounds.png", "/design/Images/Text backgrounds.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Doctors Committee Background.png";
        image2 = "/design/Images/MUN doctors background.png";
    } else if (committee == "undp") {
        title = "United Nations Development Programme";
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        images2 = ["/design/Images/Text backgrounds.png", "/design/Images/Text backgrounds.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/Palestine Israel Committees Background.png";
        image2 = "/design/Images/Palestine Israel Committees Background.png";
    }


    const staff = () => {
        let staff = [];
        for (let i = 0; i < names.length; i++) {
            staff.push(
            <div className={"card"}>
                <style jsx>{`
                    .card {
                        width: 70vw;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 5%;
                        text-align: left;
                        background: url("${images2[i]}");  
                        background-position: center;
                        background-size: auto 100%;
                        background-attachment: fixed;
                        margin-top: 2rem;
                        border-radius: 1rem;
                    }
                    img {
                        width: 20vw;
                        object-fit: cover;
                    }
                    h1 {
                        text-align: left;
                        font-size: 2rem;
                    }
                `}</style>
                <img src={images[i]}/>
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
                        animation: loadIn2 2s;
                        z-index: 0;
                        
                        position: relative;
                        width: 100vw;
                        
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
                        font-family: 'Roboto Condensed';
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
                        margin-top: 2rem;
                        background-image: url("${image2}");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        position: relative;
                        width: 70%;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
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
                        font-family: "Roboto";
                      }

                      p {
                        align-items: center;
                        width: 90%;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 1.1rem;
                        line-height: 35px;
                        font-family: "Roboto";
                        padding-bottom: 18px;
                      }

                      .text::selection {
                        background-color: $primary-color;
                        color: white;
                      }
                    `}</style>
                    <h1>Committee Description:</h1>
                    {text}
                    <div className={styles.buttons}>
                    <Link href={`/committess/${committee}/matrix`}><button>COUNTRY MATRIX</button></Link>
                    <Link href={`/committess/${committee}/backgrounder`}><button>BACKGROUNDER</button></Link>
                    </div>
                </div>
                {staff()}
            </div>
        </div>
    )
    
}
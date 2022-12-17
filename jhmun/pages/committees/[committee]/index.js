import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Committess.module.scss'
import committeeName from '../../texts/committees.js';
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";

export default function Committees() {
    const router = useRouter();
    const { committee } = router.query;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const setMobile = () => {
            if (window.innerWidth < 1000) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener('resize', setMobile);
    }, [])

    const handleMobile = () => {
        if (!isMobile) {
            return (
            <div className={styles.submenu}>
                <Link href={"/committees/hcc"}>Historical Crisis Committee</Link>
                <Link href={"/committees/sochum"}>Social, Humanitarian & Cultural Committee</Link>
                <Link href={"/committees/unodc"}>United Nations Office on Drugs and Crime</Link>
                <Link href={"/committees/undp"}>United Nations Development Programme</Link>
            </div>
            )
        }
    }

    let title;
    let subTitle;
    let text = committeeName(committee);
    console.log(committee);
    let roles = [];
    let names = [];
    let images = [];
    let descriptions = [];
    let image;

    if (committee == "hcc") {
        title = "Historical Crisis Committee";
        subTitle = "Berlin Crisis of 1960";
        roles = ["Director", "Co-Director"];
        names = ["Manasbir Bagri", "ma friend"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love food, touching grass etc. im also a pretty good programmer, and progamer iykykwim. Did I tell you about green eggs and ham, I don't like them", "hello madam"];
        image = "/design/Images/Dark Berline Wall.png";
    } else if (committee == "sochum") {
        title = "Social Humanitarian Cultural Committee";
        subTitle = "Uyghur Muslims Disenfranchisement";
        roles = ["Director", "Co-Director"];
        names = ["Manasbir Bagri", "ma friend"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
        image = "/design/Images/sochum.png";
    } else if (committee == "unodc") {
        title = "United Nations Office on Drugs and Crime";
        subTitle = "Organ Trafficking";
        roles = ["Director", "Co-Director"];
        names = ["Manasbir Bagri", "ma friend"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"];
        image = "/design/Images/Dark Doctors.png";
    } else if (committee == "undp") {
        title = "United Nations Development Programme";
        subTitle = "Palestine, Israel Dispute";
        roles = ["Director", "Co-Director"];
        names = ["Gordon Li", "ma friend"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"];
        image = "/design/Images/Palestine Israel.png";
    }


    const staff = () => {
        let staff = [];
        for (let i = 0; i < names.length; i++) {
            staff.push(
            <div className={isMobile ? styles.cardMobile: styles.card}>
                <div className={styles.cardText}>
                    <h1>{names[i]}</h1>
                    <h2><i>{roles[i]}</i></h2>
                    <p>{descriptions[i]}</p>
                </div>
                <img src={images[i]}/>
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
                    @keyframes loadIn {
                        0% { 
                          opacity: 0; 
                          transform: translateY(-0.5em);
                        }
                        100% { 
                          opacity: 1; 
                          transform: translateY(0);
                        }
                      }

                    

                    @keyframes loadIn2 {
                        0% { 
                        background-position: 00 00;
                        }
                        100% { 
                        background-position: 100 100;
                        }
                    
                    }

                    .background {
                        animation: loadIn2 2s;
                        z-index: 0;
                        background-color: #10451D;
                        
                        position: relative;
                        width: 100%;
                        height: 110vh;
                        
                        flex-direction: column;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        ${!isMobile ? 
                        `
                        margin-top: -1.25rem;
                        background-image: url("${image}");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        `
                        :
                        `
                        margin-top: 2rem;
                        background-image: url("${image}") !important;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        background-size: cover;
                        background-repeat: no-repeat;
                        -moz-appearace:none;
                        -webkit-appearace:none;
                        appearance:none;
                        `
                        }
                    }
                    h1 {
                        color: white;
                        animation: loadIn 2s ease-in-out;
                        font-family: 'Roboto Bold';
                        font-style: normal;
                        font-weight: 750;
                        font-size: 3rem;
                        line-height: 60px;
                        text-align: center;
                        letter-spacing: 0.05em;
                        margin: 0;
                        overflow-wrap: break-word;
                    }
                    hr {
                        animation: loadIn 2s ease-in-out;
                        width: 60vw;
                        height: 0px;
                        border: 1px solid white;
                    }
                    p {
                        margin: 0;
                        text-align: center;
                        color: white;
                        animation: loadIn 2s ease-in-out;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.5rem;
                        line-height: 30px;
                        font-style: italic;
                    }
                `}</style>
                <h1>{title}</h1>
                <hr></hr>
                <p>{subTitle}</p>
                <div className={styles.button}>
                    <Link
                    href={`/committees/${committee}/backgrounder`}
                    ><button>Backgrounder</button>
                    </Link>
                    <Link
                    href={`/committees/${committee}/country-matrix`}
                    ><button>Country Matrix</button>
                    </Link>
                </div>
            </div>
                <div className={styles.description}>
                    {handleMobile()}
                <div className={styles.text}>
                    <h1>Committee Description:</h1>
                    {text}
                    </div>
                </div>
                {staff()}
                <Footer color = {{ color : "white"}}/>
            </div>
    )
    
}
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Committess.module.scss'
import committeeDesc from '../../texts/committees.js';
import { useEffect, useState,useReducer } from "react";
import Footer from "../../../components/footer";
import committees from "../../../public/jsons/committees.json";

export default function Committees() {
    const router = useRouter();
    const { committee } = router.query;
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.innerwidth < 800 ? setIsMobile(true) : setIsMobile(false);
    }, []);

    let currCommittee;
    let image;
    let title;
    let subTitle;
    let numOfMembers;

    if (committee == "hcc") {
        currCommittee = committees.hcc;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "sochum") {
        currCommittee = committees.sochum;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "unodc") {
        currCommittee = committees.unodc;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "undp") {
        currCommittee = committees.undp;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }


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


    const staff = () => {
        let staff = [];
        for (let i = 0; i < numOfMembers; i++) {
            staff.push(
            <div className={isMobile ? styles.cardMobile: styles.card}>
                <div className={styles.cardText}>
                    <h1>{currCommittee.members[i].name}</h1>
                    <h2><i>{currCommittee.members[i].position}</i></h2>
                    <p>{currCommittee.members[i].description}</p>
                </div>
                <img src={currCommittee.members[i].image}/>
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
                        width: 100vw;
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
                        background-image: url("${image}");

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
                    href={`/committees/${committee}/matrix`}
                    ><button>Delegate Matrix</button>
                    </Link>
                </div>
            </div>
                <div className={styles.description}>
                    {handleMobile()}
                <div className={styles.text}>
                    <h1>Committee Description:</h1>
                    {committeeDesc(committee)}
                    </div>
                </div>
                {staff()}
                <Footer color = {{ color : "white"}}/>
            </div>
    )
    
}
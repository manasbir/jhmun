import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/Committess.module.scss'
import committeeDesc from '../../texts/committees.js';
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { committee: 'hcc' } },
            { params: { committee: 'sochum' } },
            { params: { committee: 'unodc' } },
            { params: { committee: 'undp' } },
        ],
        fallback: false
    }
}

export default function Committees({currCommittee}) {
    const router = useRouter();
    const { committee } = router.query;
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false);
    }, []);

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
        for (let i = 0; i < currCommittee.numOfMembers; i++) {
            staff.push(
            <div className={styles.card}>
                <div className={styles.cardText}>
                    <h1>{currCommittee.members[i].name}</h1>
                    <h2><i>{currCommittee.members[i].position}</i></h2>
                    <p>{currCommittee.members[i].description}</p>
                </div>
                <Image src={currCommittee.members[i].image} width={500} height={400} priority={true} loading={"eager"} alt={currCommittee.members[i].name}/>
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
                <title>{currCommittee.title}</title>
                <meta name="description" content={ `JHMUN ${currCommittee.title}` } />
                <link rel="icon" href={"/design/Icons & Buttons/MUN EAGLE White.svg"} />
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
                        
                        ${isMobile ? 
                        `
                        background-image: url("${currCommittee.image}") !important;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        background-size: cover;
                        background-repeat: no-repeat;
                        -moz-appearace:none;
                        -webkit-appearace:none;
                        appearance:none;` 

                        : 

                        `background-image: url("${currCommittee.image}") !important;
                        margin-top: -1.25rem;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;`
                        }
                    }
                    h1 {
                        color: white;
                        animation: loadIn 2s ease-in-out;
                        font-family: "Main", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-weight: 700;
                        font-size: 3em;
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
                <h1>{currCommittee.title}</h1>
                <hr></hr>
                <p>{currCommittee.subTitle}</p>
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


export async function getStaticProps({params}) {
    const res = await fetch(`https://jhmun.vercel.app/jsons/${params.committee}.json`);
    const committeeInfo = await res.json();
    return {
        props: {
            currCommittee: committeeInfo
        }
    }
}
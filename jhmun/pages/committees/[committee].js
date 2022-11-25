import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Committess.module.scss'
import committeeName from '../texts/committees.js';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';

export default function committees() { 
    const router = useRouter()
    const { committee } = router.query

    let div;
    let title;
    let div2;
    let text;
    let names = [];
    let images = [];
    let descriptions = [];

    if (committee == "hcc") {
        // alert("hcc")
        div = styles.hcc;
        title = "Historical Crisis Committee";
        div2 = styles.hccText;
        text = committeeName("hcc");
        names = ["Manasbir Bagri | Director", "ma friend | CO-DIRECTOR"];
        images = ["/design/Images/people/manas.png", "/design/Images/gj.png"];
        descriptions = ["wassup guys. coolest guy here ong. i love pizza, touching grass etc", "hello madam"]
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
            <div className={div}>
                <h1>{title}</h1>
            </div>
            <div className={styles.background}>
                <div className={div2}>
                    <h1>Committee Description:</h1>
                    {text}
                    <div className={styles.buttons}>
                    <Link href={`/committess/${committee}/matrix`}><button>COUNTRY MATRIX</button></Link>
                    <Link href={`/committess/${committee}/backgrounder`}><button>BACKGROUNDER</button></Link>
                    </div>
                    <hr></hr>
                    {staff()}
                </div>

                
            </div>
        </div>
    )
    
}
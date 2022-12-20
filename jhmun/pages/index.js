import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState, useReducer } from "react";
import mainText from './texts/mainpage';
import Footer from '../components/footer';





export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.innerwidth < 800 ? setIsMobile(true) : setIsMobile(false);
    }, []);
  


  return (
    <div>
      <Head>
        <title>JHMUN</title>
        <meta name="description" content="Johnston Heights Model UN" />
        <link rel="icon" href={"/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="JHMUN" />
        <meta name="keywords" content="MUN, Model UN, Model United Nations, Johnston Heights, JH, Surrey, Surrey UN, BC, Fraser heights, Vancouver, Johntston Heights Secondary, IB Model UN"/>
      </Head> 

    
      <div className={isMobile ? styles.coverMobile : styles.cover}>
        <h1>JOHNSTON HEIGHTS MODEL UNITED NATIONS 2023</h1>
        <hr></hr>
        <p><i>February 11th, 2023</i></p>
        <Link href={"/registration"}><button>Apply</button></Link>
      </div>
      <div className={isMobile ? styles.textsMobile : styles.texts}>
        <h1>𝙃𝙚𝙡𝙥𝙞𝙣𝙜 𝙎𝙝𝙖𝙥𝙚 𝙩𝙝𝙚 𝙇𝙚𝙖𝙙𝙚𝙧𝙨 𝙤𝙛 𝙏𝙤𝙢𝙤𝙧𝙧𝙤𝙬</h1>
        <div className={isMobile ? styles.backgroundMobile : styles.background}>
          <div className={isMobile ? styles.textMobile : styles.text}>
            <h2>Dear Delegates and Faculty Advisors,</h2>
            {mainText()}
          </div>
          <img src={"/design/Images/people/krisha.png"}></img>
        </div>
      </div>
      <Footer color={{color : "green"}}/>
    </div>
  )
}

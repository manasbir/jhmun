import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState, useReducer } from "react";
import mainText from './texts/mainpage';
import Footer from '../components/footer';
import { NextSeo } from 'next-seo';





export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false);
    }, []);
  


  return (
    <div>
      <Head>
        <title>JHMUN</title>
        <meta name="description" content="Johnston Heights Model UN" />
        <meta property="og:image" content={"/design/Images/JHSS dark.png"} key="image" />
        <meta property="og:title" content="JHMUN" key="title" />
        <meta property="og:description" content="Johnston Heights Model UN" key="description" />
        <NextSeo 
          title="Johnston Heights Model UN"
          description='Inclusive Model UN experience at Johnston Heights Secondary School'
        />
        <link rel="icon" href={"/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="JHMUN" />
        <meta name="keywords" content="MUN, Model UN, Model United Nations, Johnston Heights, JH, Surrey, Surrey UN, BC, Fraser heights, Vancouver, Johntston Heights Secondary, IB Model UN"/>
      </Head> 

    
      <div className={isMobile ? styles.coverMobile : styles.cover}>
        <h1>Johnston Heights Model United Nations 2023</h1>
        <hr></hr>
        <p>February 11th, 2023</p>
        <Link href={"/registration"}><button>Apply</button></Link>
      </div>
      <div className={isMobile ? styles.textsMobile : styles.texts}>
        <h1>Developed by the leaders of today, for the leaders of tomorrow</h1>
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

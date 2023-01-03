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
        <title>Johnston Heights Model United Nations | JHMUN</title>
        <meta name="description" content="Johnston Heights Model United Nations 2023 (JHMUN) is an inclusive model UN experience taking place at Johnston Heights Secondary School on Febuary 11th, 2023" />
        <meta property="og:image" content={"/design/Images/JHSS dark.png"} key="image" />
        <meta property="og:title" content="Johnston Heights Model United Nations | JHMUN" key="title" />
        <meta property="og:description" content="Johnston Heights Model United Nations 2023 (JHMUN) is an inclusive model UN experience taking place at Johnston Heights Secondary School on Febuary 11th, 2023" key="description" />
        <NextSeo 
          title="Johnston Heights Model UN | JHMUN"
          description="Johnston Heights Model United Nations 2023 (JHMUN) is an inclusive model UN experience taking place at Johnston Heights Secondary School on Febuary 11th, 2022"
        />
        <link rel="icon" href={"//design/Icons & Buttons/MUN Eagle Green.svg"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Johnston Heights Model United Nations" />
        <meta name="description" content="Johnston Heights Model United Nations 2023 (JHMUN) is an inclusive model UN experience taking place at Johnston Heights Secondary School on Febuary 11th, 2023" />
        <meta name="keywords" content="Johnston Heights Model United Nations,Johnston Heights Model UN,Johnston Heights MUN,JHMUN,Johnston Heights MUN, MUN, Model UN, Model United Nations,Johnston Heights,JH,Surrey,Surrey UN,Johntston Heights Secondary,IB Model UN"/>
        <link rel="canonical" href="https://jhmun.org" />
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

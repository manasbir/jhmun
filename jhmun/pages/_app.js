
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState, useCallback, useReducer } from "react";
import "../styles/globals.scss";
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  const [isCommitteesHovered, setIsComHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuScroll, setIsMenuScroll] = useState(false);
    useEffect(() => {
        window.innerWidth < 800 ? setIsMobile(true) : setIsMobile(false);
    }, []);

  useEffect(() => {
    const setScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuScroll(true);
      } else {
        setIsMenuScroll(false);
      }
    }
    window.addEventListener('scroll', setScroll);
  }, [])

  const handleComHover = () => {
    if (isCommitteesHovered) {
      return (
        <div className={styles.dropdown}>
          <Link href="/committees" >COMMITTEES OVERVIEW</Link>
          <Link href="/committees/hcc" >HISTORICAL CRISIS COMMITTEE</Link>
          <Link href="/committees/sochum" >SOCIAL, HUMANITARIAN, AND CULTURAL COMMITTEE</Link>
          <Link href="/committees/unodc" >UN OFFICE ON DRUGS & CRIME COMMITTEE</Link>
          <Link href="/committees/undp">UN DEVELOPMENT PROGRAMME COMMITTEE</Link>
        </div>

      )
    }
  }

  const handleAboutHover = () => {
    if (isAboutHovered) {
      return (
        <div className={styles.dropdown}>
          <Link href="/about">ABOUT US</Link>
          <Link href="/about/secretariat">SECRETARIAT</Link>
          <Link href="/about/conference">CONFERENCE</Link>
        </div>
      )
    }
  }

  const handleMenuScroll = () => {
    if (!isMobile) {
      if (!isMenuScroll) {
        return (
          <div className={styles.header1}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <img src={"/design/Icons & Buttons/MUN Eagle White.svg"}/>
              </Link>  
            </div>    
            <div className={styles.menu1}>
              <Link
                onMouseEnter={() => setIsComHovered(true)} 
                onMouseLeave={() => setIsComHovered(false)}
                href={"/committees"}>
                  COMMITTEES
                {handleComHover()}
              </Link>

              <Link 
                onMouseEnter={() => setIsAboutHovered(true)} 
                onMouseLeave={() => setIsAboutHovered(false)}
                href={"/about"}>
                  ABOUT
                {handleAboutHover()}
              </Link>

              <Link href={"/resources"}>RESOURCES</Link>

              <Link href={"/registration"}>REGISTRATION</Link>
            </div>
          </div>
        )
      } else {
        return (
          <div className={styles.header2}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <img src={"/design/Icons & Buttons/MUN Eagle Green.svg"}/>
              </Link>  
            </div>    
            <div className={styles.menu2}>
              <Link
                onMouseEnter={() => setIsComHovered(true)} 
                onMouseLeave={() => setIsComHovered(false)}
                href={"/committees"}>
                  COMMITTEES
                {handleComHover()}
              </Link>

              <Link 
                onMouseEnter={() => setIsAboutHovered(true)} 
                onMouseLeave={() => setIsAboutHovered(false)}
                href={"/about"}>
                  ABOUT
                {handleAboutHover()}
              </Link>

              <Link href={"/resources"}>RESOURCES</Link>

              <Link href={"/registration"}>REGISTRATION</Link>
            </div>
          </div>
        )
      }
  } else {
      return (
          <div className={styles.header3}>
            <div className={styles.logo2}>
              <Link href={"/"}>
                <img src={"/design/Icons & Buttons/MUN Eagle Green.svg"}/>
              </Link>  
            </div>
            <div className={styles.menu3}>
              <Link
                onMouseEnter={() => setIsComHovered(true)} 
                onMouseLeave={() => setIsComHovered(false)}
                href={"/committees"}>
                  COMMITTEES
                {handleComHover()}
              </Link>

              <Link 
                onMouseEnter={() => setIsAboutHovered(true)} 
                onMouseLeave={() => setIsAboutHovered(false)}
                href={"/about"}>
                  ABOUT
                {handleAboutHover()}
              </Link>

              <Link href={"/resources"}>RESOURCES</Link>

              <Link href={"/registration"}>REGISTRATION</Link>
            </div>
          </div>
      )
    }
  }



  return (
    <div className={styles.container}>
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
        <link rel="icon" href={"/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Johnston Heights Model United Nations" />
        <meta name="description" content="Johnston Heights Model United Nations 2023 (JHMUN) is an inclusive model UN experience taking place at Johnston Heights Secondary School on Febuary 11th, 2023" />
        <meta name="keywords" content="Johnston Heights Model United Nations,Johnston Heights Model UN,Johnston Heights MUN,JHMUN,Johnston Heights MUN, MUN, Model UN, Model United Nations,Johnston Heights,JH,Surrey,Surrey UN,Johntston Heights Secondary,IB Model UN"/>
        <link rel="canonical" href="https://jhmun.org" />
      </Head> 
      {handleMenuScroll()}

      <main className={styles.main}> 

        <Component {...pageProps} />

      </main>
      </div>
  )

}

export default MyApp


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState, useCallback, useReducer } from "react";
import "../styles/globals.scss";

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
          <Link href="/committees" onClick={setIsComHovered(false)}>COMMITTEES OVERVIEW</Link>
          <Link href="/committees/hcc" onClick={setIsComHovered(false)}>HISTORICAL CRISIS COMMITTEE</Link>
          <Link href="/committees/sochum" onClick={setIsComHovered(false)}>SOCIAL, HUMANITARIAN, AND CULTURAL COMMITTEE</Link>
          <Link href="/committees/unodc" onClick={setIsComHovered(false)}>UN OFFICE ON DRUGS & CRIME COMMITTEE</Link>
          <Link href="/committees/undp" onClick={setIsComHovered(false)}>UN DEVELOPMENT PROGRAMME COMMITTEE</Link>
        </div>

      )
    }
  }

  const handleAboutHover = () => {
    if (isAboutHovered) {
      return (
        <div className={styles.dropdown}>
          <Link href="/about" onClick={setIsAboutHovered(false)}>ABOUT US</Link>
          <Link href="/about/secretariat" onClick={setIsAboutHovered(false)}>SECRETARIAT</Link>
          <Link href="/about/conference" onClick={setIsAboutHovered(false)}>CONFERENCE</Link>
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
        <title>JHMUN</title>
        <meta name="description" content="Johnston Heights Model UN" />
        <link rel="icon" href={"/design/Icons & Buttons/MUN Eagle White.svg"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="JHMUN" />
        <meta name="keywords" content="MUN, Model UN, Model United Nations, Johnston Heights, JH, Surrey, Surrey UN, BC, Fraser heights, Vancouver, Johntston Heights Secondary, IB Model UN"/>
      </Head>
      {handleMenuScroll()}

      <main className={styles.main}> 

        <Component {...pageProps} />

      </main>
      </div>
  )

}

export default MyApp


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [isCommitteesHovered, setIsComHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMenuScroll, setIsMenuScroll] = useState(false)

  if (typeof window !== "undefined") {
    // Client-side-only code
  function changeCss () {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("nav");
    this.scrollY > 150 ? setIsMenuScroll(true) : setIsMenuScroll(false);
  }
    window.addEventListener("scroll", changeCss , false);
  }

  const handleComHover = () => {
    if (isCommitteesHovered) {
      return (
        <div className={styles.dropdown}>
          <Link href="/committees">COMMITTEES OVERVIEW</Link>
          <Link href="/committees/hcc">HISTORICAL CRISIS COMMITTEE</Link>
          <Link href="/committees/sochum">SOCIAL, HUMANITARIAN, AND CULTURAL COMMITTEE</Link>
          <Link href="/committees/unodc">UN OFFICE ON DRUGS & CRIME COMMITTEE</Link>
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
          <Link href="/about/team">SECRETARIAT</Link>
          <Link href="/about/faq">SCHEDULE</Link>
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
        <div className={"header"}>


          <div className={styles.logo}>
            <Link href={"/"}>
              <img src={"/design/Icons & Buttons/MUN Eagle Green.svg"}/>
            </Link>  
          </div>    
          <div className={"menu"}>
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

            <Link 
              href={"/resources"}>
                RESOURCES
            </Link>

            <Link 
              href={"/registration"}>
                REGISTRATION
            </Link>
          </div>
          <style jsx>{`

            @keyframes fadeOut {
              0% { color: ${isMenuScroll ? "rgba(0, 0, 0,1)": "rgba(255, 255, 255,1)"}; }
              100% { color: ${isMenuScroll ? "rgba(0, 0, 0,.25)": "rgba(255, 255, 255,.25)"}; }
            }

            @keyframes fadeIn {
              0% { color: ${isMenuScroll ? "rgba(0, 0, 0,.25)": "rgba(255, 255, 255,.25)"}; }
              100% { color: ${isMenuScroll ? "rgba(0, 0, 0,1)": "rgba(255, 255, 255,1)"}; }
            }
            .header {
              top: 0;
              position: fixed;
              padding: 1.5rem;
              background-color: ${isMenuScroll ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0)"};
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              border-radius: 0 0 1.25rem 1.25rem;
              z-index: 10;
            }
            .menu {
                animation: fadeIn 1s;
                margin-right: 1rem;
                margin-bottom: -0.5rem;
                width: 30%;
                align-items: center;
                position: relative;
                flex-direction: row;
                display: flex;
                justify-content: space-between;
                color: white;
                z-index: 10;

              color: ${isMenuScroll ? "rgba(0,0,0,1)" : "rgba(255, 255, 255, 1)"};
              text-decoration: none;
              font-style: normal;
              font-weight: 500;
              font-size: 1.2rem;
              text-align: center;
              letter-spacing: 0.05em;
            }

            .menu:hover {
              animation: fadeOut .25s forwards;
            }

            .menu :not(:hover) {
              animation: fadeIn .5s forwards;
            }

            .menu a:hover {
              animation: fadeIn .25s forwards;
            }

            .menu:hover a:not(:hover) {
              animation: fadeOut .25s forwards;
            }

  `}</style>
        </div>

      <main className={styles.main}> 

        <Component {...pageProps} />

      </main>
      <footer className={styles.footer}>
        <p>Copyright © Johnston Heights Model United Nations 2023 </p> 
        <p> Website Created by <a href="https://github.com/manasbir">Manasbir Bagri</a>, Website & Logo Designed by Gordon Li</p>
      </footer>
      </div>
  )

}

export default MyApp

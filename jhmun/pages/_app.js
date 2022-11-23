
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {

  const [isCommitteesHovered, setIsComHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);


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
        <link rel="icon" href={"/design/Icons & Buttons/MUN EAGLE.svg"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="JHMUN" />
        <meta name="keywords" content="MUN, Model UN, Model United Nations, Johnston Heights, JH, Surrey, Surrey UN, BC, Fraser heights, Vancouver, Johntston Heights Secondary, IB Model UN"/>
      </Head>

      <div className={styles.logo}>
          <Link href={"/"}>
            <img src="/design/Icons & Buttons/MUN EAGLE.svg"/>
          </Link>  
        </div>    

        <div className={styles.menu}>
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
          href={"/about"}>ABOUT
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

      <main className={styles.main}> 

        <Component {...pageProps} />

      </main>
      <footer className={styles.footer}>
        <img src="/design/Icons & Buttons/MUN EAGLE.svg"/>
        <p>Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir">Manasbir Bagri</a>, Website & Logo Designed by Gordon Li</p>
      </footer>
      </div>
  )

}

export default MyApp

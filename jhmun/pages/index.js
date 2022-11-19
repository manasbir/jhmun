import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";
import mainText from './texts/mainpage';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>JHMUN</title>
        <meta name="description" content="Johnston Heights Model UN" />
        <link rel="icon" href="/design/MUN EAGLE.svg" />
      </Head>

      <Link href={"/registration"}>
        <div className={styles.header}>
          Delegate Registration for JHMUN 2023 is now Open!
        </div>
      </Link>

      

      <main className={styles.main}> 

      <div className={styles.logo}> 
          <Link href={"/"}>
            <Image src="/design/Icons & Buttons/MUN EAGLE.svg" width={70} height={58}/>
          </Link>
          </div>
        <div className={styles.menu}>
          <Link href={"/committees"}>Committees</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/resources"}>Resources</Link>
          <Link href={"/registration"}>Registration</Link>
        </div>

      <div className={styles.cover}>
        <img src="/design/Images/Home page background.jpg"/>
        <h1>Johnston Heights Model United Nations 2023</h1>
      </div>

      <div className={styles.background}>
        <svg>
          <rect className={styles.rects}/>
        </svg>

        <div className={styles.text}>
          <img src="/design/Images/Pagraphs Background.png" className={styles.backgroundimg}/>
          {mainText()}
        </div>

        <svg>
          <rect className={styles.rects}/>
        </svg>

      </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          JHMUN
        </a>
      </footer>
    </div>
  )
}

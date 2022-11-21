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

      <main className={styles.main}> 
        <div className={styles.logo}>
          <Link href={"/"}>
            <img src="/design/Icons & Buttons/MUN EAGLE.svg"/>
          </Link>  
        </div>    

        <div className={styles.menu}>
          <Link href={"/committees"}>COMMITTEES</Link>
          <Link href={"/about"}>ABOUT</Link>
          <Link href={"/resources"}>RESOURCES</Link>
          <Link href={"/registration"}>REGISTRATION</Link>
        </div>


      <div className={styles.cover}>
        <h1>JOHNSTON HEIGHTS MODEL UNITED NATIONS 2023</h1>
        <p>Inclusive and Accessible Model UN experience</p>
        <hr></hr>
        <p>February 11th, 2023 | The First Annual Session | Johnston Heights Secondary School</p>
        <Link href={"/registration"}><button>REGISTER NOW</button></Link>
      </div>

      <div className={styles.background}>

        <div className={styles.text}>
          <h1>Dear Delegates and Faculty Advisors,</h1>
          {mainText()}
        </div>

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

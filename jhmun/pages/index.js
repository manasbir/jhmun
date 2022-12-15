import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";
import mainText from './texts/mainpage';


export default function Home() {

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

    
      <div className={styles.cover}>
        <h1>JOHNSTON HEIGHTS MODEL UNITED NATIONS 2023</h1>
        <hr></hr>
        <p><i>February 11th, 2023</i></p>
        <Link href={"/registration"}><button>Apply</button></Link>
      </div>
      <div className={styles.texts}>
      <h1><i>&quot;¡Me gusta comer la hamburguesa con leche!&quot;</i></h1>
      <div className={styles.background}>
        <div className={styles.text}>
          <h2>Dear Delegates and Faculty Advisors,</h2>
          {mainText()}
        </div>
        <img src={"/design/Images/people/manas.png"}></img>
        </div>
      </div>
    </div>
  )
}

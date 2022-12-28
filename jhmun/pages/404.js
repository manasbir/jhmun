import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";

export default function bruh() {

    return (
      <div className={styles.container}>
        <Head>
          <title>404</title>
          <meta name="description" content="Johnston Heights Model UN" />
          <link rel="icon" href={"/design/Icons & Buttons/MUN EAGLE.svg"} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="JHMUN" />
          <meta name="keywords" content="MUN, Model UN, Model United Nations, Johnston Heights, JH, Surrey, Surrey UN, BC, Fraser heights, Vancouver, Johntston Heights Secondary, IB Model UN"/>
        </Head>
        <img src="/design/Images/idk.png"/>
        <h1>404</h1>
        <h1>404 page not found or incomplete</h1>  
        </div>
    )
  }
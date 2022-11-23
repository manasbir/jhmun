import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Suspense, useEffect, useState } from "react";
import mainText from './texts/mainpage';


export default function Home() {
  const [isCommitteesHovered, setIsComHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);




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

      <main className={styles.main}> 
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
          </Link>

          <Link 
          onMouseEnter={() => setIsAboutHovered(true)} 
          onMouseLeave={() => setIsAboutHovered(false)}
          href={"/about"}>ABOUT
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
      <img src="/design/Icons & Buttons/MUN EAGLE.svg"/>
        <p>Copyright © Johnston Heights Model United Nations 2023 | Website Created by <a href="https://github.com/manasbir">Manasbir Bagri</a>, Website & Logo Designed by Gordon Li</p>
      </footer>
    </div>
  )
}

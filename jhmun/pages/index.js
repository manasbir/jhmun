import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>JHMUN</title>
        <meta name="description" content="Johnston Heights Model UN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/registration"}>
        <div className={styles.header}>
          Delegate Registration for JHMUN 2023 is now Open!
        </div>
      </Link>

      <main className={styles.main}>
      <Link href={"/"}>
      <Image src="/logo.svg" width={400} height={100}/>
      </Link>

      <div className={styles.menu}>
        <Link href={"/committees"}>Committees</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/resources"}>Resources</Link>
        <Link href={"/registration"}>Registration</Link>
      </div>

      <div className={styles.background}>
        <Image src="" />
        {/* <svg width="400" height="110">
          <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg> */}
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

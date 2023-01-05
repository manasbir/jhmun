import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/general.module.scss'
import people from "../../../public/jsons/sec.json"
import { useEffect, useState } from "react";

export default function Secretariats() {
    const router = useRouter();
    const { secretariat } = router.query;
    let person;
    if (secretariat == "krishna-verma") {
        person = 0;
        return (
            <div className={styles.container}>
            <Head>
            <title>{people.people[person].name}</title>
            <link rel="icon" href="//design/Icons & Buttons/MUN Eagle Green.svg" />
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>
                {people.people[person].name}
            </h1>
            <div className={styles.secDesc}>
                <Image src={people.people[person].image}width={500} height={500}/>
                <div className={styles.secDescText}>
                    <h2>XYZ</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            </main>
            </div>
        )
    }
}
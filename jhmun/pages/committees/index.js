import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'
import committeeName from '../texts/committees.js';

export default function Committees() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Committees</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Committee Overview
                </h1>
                <div className={styles.text}>
                    <h2>Dear Esteemed Delegates and Faculty Advisors,</h2>
                    <p>For JHMUN 2023, our committee's team has worked diligently to provide 4 committees that offer a varied global perspective. The team has carefully selected topics that have significant global relevance and ramifications. Our diverse committees reflect our commitment to developing internal global consciousness at the high school level. <strong>Position Papers are required to be eligible for awards and must be submitted by 11:59 p.m. on February 5th.</strong>
                        <br></br>
                        <br></br>
                        Our 4 committees and corresponding topics are:
                        <br></br>
                        <ul>
                        <li>Historical Crisis Committee (HCC) | Fall of the Berlin Wall</li>
                        <li>Social, Humanitarian & Cultural Committee (SOCHUM) | Uyghur Muslims Disenfranchisement </li>
                        <li>United Nations Office on Drugs & Crime (UNODC) | Organ Trafficking</li>
                        <li> United Nations development program (UNDP) | Palestine & Israel Dispute</li>
                        </ul>
                        </p>
                </div>
            </main>
        </div>

    )
}    
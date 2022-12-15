import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/general.module.scss'

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
                    <p>For JHMUN 2023, our committee&#39;s team has worked diligently to provide 4 committees that offer a varied global perspective. The team has carefully selected topics that have significant global relevance and ramifications. Our diverse committees reflect our commitment to developing internal global consciousness at the high school level. <b>Position Papers are required to be eligible for awards and must be submitted by 11:59 p.m. on February 5th.</b>
                        <br></br>
                        <br></br>
                        Our 4 committees and corresponding topics are:
                        <br></br>
                        </p>
                        <ul>
                            <li>Historical Crisis Committee (HCC) | Fall of the Berlin Wall</li>
                            <li>Social, Humanitarian & Cultural Committee (SOCHUM) | Uyghur Muslims Disenfranchisement </li>
                            <li>United Nations Office on Drugs & Crime (UNODC) | Organ Trafficking</li>
                            <li> United Nations development program (UNDP) | Palestine & Israel Dispute</li>
                        </ul>
                </div>
                <div className={styles.committees}>
                <Link href={"/committees/hcc"}>
                    <div className={styles.committee}>
                        <img src={"design/Images/committees photos/hcc.png"}></img>
                        <div className={styles.committeeText}>
                            <h1>Historical Crisis Committee (HCC)</h1>
                            <h2>Berlin Crisis of 1961</h2>
                            <p>Difficulty: Hard</p>
                        </div>
                    </div>
                </Link>
                <Link href={"/committees/sochum"}>
                    <div className={styles.committee}>
                        <img src={"design/Images/committees photos/sochum.png"}></img>
                        <div className={styles.committeeText}>
                            <h1>Social, Humanitarian & Cultural Committee (SOCHUM)</h1>
                            <h2>Uyghur Muslims Disenfranchisement</h2>
                            <p>Difficulty: Medium</p>
                        </div>
                    </div>
                </Link>
                <Link href={"/committees/unodc"}>
                    <div className={styles.committee}>
                        <img src={"design/Images/committees photos/unodc.png"}></img>
                        <div className={styles.committeeText}>
                            <h1>United Nations Office on Drugs & Crime (UNODC)</h1>
                            <h2>Organ Trafficking</h2>
                            <p>Difficulty: Medium</p>
                        </div>
                    </div>
                </Link>
                <Link href={"/committees/undp"}>
                    <div className={styles.committee}>
                        <img src={"design/Images/committees photos/undp.png"}></img>
                        <div className={styles.committeeText}>
                            <h1>United Nations development program (UNDP)</h1>
                            <h2>Palestine, Israel Dispute</h2>
                            <p>Difficulty: Moderate</p>
                        </div>
                    </div>
                </Link>        
                </div>

            </main>
        </div>

    )
}    
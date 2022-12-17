import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/general.module.scss'
import Footer from '../../../components/footer'
import { useRouter } from 'next/router'
import hcc from '../../../public/jsons/hcc.json';
import sochum from '../../../public/jsons/sochum.json';
import unodc from '../../../public/jsons/unodc.json';
import undp from '../../../public/jsons/undp.json';

export default function Matrix() {
    const router = useRouter();
    const { committee } = router.query;

    let title = "Matrix";
    let matrix;
    let numOfDelegations;
    if (committee == "hcc") {
        title = "HCC Matrix";
        matrix = hcc;
        numOfDelegations = matrix.numOfDelegations;
    } else if (committee == "sochum") {
        title = "SOCHUM Matrix";
        matrix = sochum;
        numOfDelegations
    } else if (committee == "unodc") {
        title = "UNODC Matrix";
        matrix = unodc;
        numOfDelegations = matrix.numOfDelegations;
    } else if (committee == "undp") {
        title = "UNDP Matrix";
        matrix = undp;
        numOfDelegations = matrix.numOfDelegations;
    }

    const getMatrix = () => {
        let matrixDivs = [];
        for (let i = 0; i < numOfDelegations; i++) {
            if (matrix.delegations[i].isTaken == true) {
                matrixDivs.push(
                <div className={styles.matrixItemTaken}>
                    <div className={styles.matrixCell}>
                        <img src={matrix.delegations[i].image}></img>
                        <h1>{matrix.delegations[i].name}</h1>
                        <h2>{matrix.delegations[i].title}</h2>
                    </div>
                </div>
                )
            } else {
                matrixDivs.push(
                <div className={styles.matrixItem}>
                    <div className={styles.matrixCell}>
                        <img src={matrix.delegations[i].image}></img>
                        <h1>{matrix.delegations[i].name}</h1>
                        <h2>{matrix.delegations[i].title}</h2>
                    </div>
                </div>
                )
            }
        }
        return matrixDivs;
    }


    return (
        <div className={styles.container}>
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
            {title}
        </h1>
        <div className={styles.matrix}>
            {getMatrix()}
        </div>
        </main>
        <Footer color={{color : "green"}}/>
        </div>
    )
}
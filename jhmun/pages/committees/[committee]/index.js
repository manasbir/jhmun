import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Committess.module.scss'
import committeeDesc from '../../texts/committees.js';
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import committees from "../../../public/jsons/committees.json";

export default function Committees() {
    const router = useRouter();
    const { committee } = router.query;
    const [isMobile, setIsMobile] = useState(false);
    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        setIsMobile(check);
      };    

    let currCommittee;
    let image;
    let title;
    let subTitle;
    let numOfMembers;

    if (committee == "hcc") {
        currCommittee = committees.hcc;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "sochum") {
        currCommittee = committees.sochum;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "unodc") {
        currCommittee = committees.unodc;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }
    if (committee == "undp") {
        currCommittee = committees.undp;
        image = currCommittee.image;
        title = currCommittee.title;
        subTitle = currCommittee.subTitle;
        numOfMembers = currCommittee.numOfMembers;
    }


    const handleMobile = () => {
        if (!isMobile) {
            return (
            <div className={styles.submenu}>
                <Link href={"/committees/hcc"}>Historical Crisis Committee</Link>
                <Link href={"/committees/sochum"}>Social, Humanitarian & Cultural Committee</Link>
                <Link href={"/committees/unodc"}>United Nations Office on Drugs and Crime</Link>
                <Link href={"/committees/undp"}>United Nations Development Programme</Link>
            </div>
            )
        }
    }


    const staff = () => {
        let staff = [];
        for (let i = 0; i < numOfMembers; i++) {
            staff.push(
            <div className={isMobile ? styles.cardMobile: styles.card}>
                <div className={styles.cardText}>
                    <h1>{currCommittee.members[i].name}</h1>
                    <h2><i>{currCommittee.members[i].position}</i></h2>
                    <p>{currCommittee.members[i].description}</p>
                </div>
                <img src={currCommittee.members[i].image}/>
            </div>
            )
        }

        return (
            <div className={styles.staff}>
                {staff}
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="JHMUN HCC" />
                <link rel="icon" href={"/design/Icons & Buttons/MUN EAGLE.svg"} />
            </Head>
            <div className={"background"}>
                <style jsx>{`
                    @keyframes loadIn {
                        0% { 
                          opacity: 0; 
                          transform: translateY(-0.5em);
                        }
                        100% { 
                          opacity: 1; 
                          transform: translateY(0);
                        }
                      }

                    

                    @keyframes loadIn2 {
                        0% { 
                        background-position: 00 00;
                        }
                        100% { 
                        background-position: 100 100;
                        }
                    
                    }

                    .background {
                        animation: loadIn2 2s;
                        z-index: 0;
                        background-color: #10451D;
                        
                        position: relative;
                        width: 100vw;
                        height: 110vh;
                        
                        flex-direction: column;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        ${!isMobile ? 
                        `
                        margin-top: -1.25rem;
                        background-image: url("${image}");
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        `
                        :
                        `
                        margin-top: 2rem;
                        background-image: url("${image}");

                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        background-size: cover;

                        background-repeat: no-repeat;

                        -moz-appearace:none;
                        -webkit-appearace:none;
                        appearance:none;
                        `
                        }
                    }
                    h1 {
                        color: white;
                        animation: loadIn 2s ease-in-out;
                        font-family: 'Roboto Bold';
                        font-style: normal;
                        font-weight: 750;
                        font-size: 3rem;
                        line-height: 60px;
                        text-align: center;
                        letter-spacing: 0.05em;
                        margin: 0;
                    }
                    hr {
                        animation: loadIn 2s ease-in-out;
                        width: 60vw;
                        height: 0px;
                        border: 1px solid white;
                    }
                    p {
                        margin: 0;
                        text-align: center;
                        color: white;
                        animation: loadIn 2s ease-in-out;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 1.5rem;
                        line-height: 30px;
                        font-style: italic;
                    }
                `}</style>
                <h1>{title}</h1>
                <hr></hr>
                <p>{subTitle}</p>
                <div className={styles.button}>
                    <Link
                    href={`/committees/${committee}/backgrounder`}
                    ><button>Backgrounder</button>
                    </Link>
                    <Link
                    href={`/committees/${committee}/matrix`}
                    ><button>Delegate Matrix</button>
                    </Link>
                </div>
            </div>
                <div className={styles.description}>
                    {handleMobile()}
                <div className={styles.text}>
                    <h1>Committee Description:</h1>
                    {committeeDesc(committee)}
                    </div>
                </div>
                {staff()}
                <Footer color = {{ color : "white"}}/>
            </div>
    )
    
}
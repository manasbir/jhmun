import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
export default function mainText () {
    return (
        <p>
It is my absolute honour to welcome you to the inaugural edition of the Johnston Heights Model United Nations Conference. Johnston Heights Model United Nations is an in-person conference held at <b>Johnston Heights Secondary School, Surrey, British Columbia on February 11th</b>.​ 
<br></br><br></br>
Given the recent circumstances present in the world, JHMUN strives to create an environment with an emphasis on learning and development, as well as continuing to maintain the same quality of discussion and debates consistent with the upper-echelon Model UN conferences. As the United Nations parlayed in their recent public statement, “the world continues to face continued adversities– a health crisis, economic disaster, and human rights emergencies rolled into one unprecedented challenge.” Consequently, we continue to witness an alarming spread of hatred and discrimination all over the world. Thus, the three pillars of focus regarding the Johnston Heights Model United Nations Conference this year are international mindedness, collective action, and an inclusive environment. 
<br></br><br></br>
The conference will host 4 captivating committees: 
<ul>
    <li>SOCHUM: Uyghur Muslim Disenfranchisement</li>
    <li>UNODC: Organ Trafficking</li>
    <li>HCC: Berlin Crisis of 1961</li>
    <li>UNDP: Palestine Israel Dispute</li>
</ul>    
    We believe that the aforementioned committees offer candidates the ability to debate a wide variety of topics all the while continuing engaging discussion regarding such important problems.​
<br></br><br></br>
From my first experience as a delegate debating with others to now. I consider myself lucky to have been granted this valuable opportunity. I have gained a significantly more nuanced understanding of the world and the geopolitical circumstances that are present within the world. JHMUN is an excellent environment for all students like myself to enhance their soft skills. JHMUN firmly believes that every student should have an opportunity to engage in the enriching world of Model United Nations. Together with the executive team, we are dedicated to hosting a great and memorable event for all attendees. Thank you for joining us, we look forward to welcoming you in February. 
<br></br><br></br>
​<b>For any general inquiries, email us at: </b>
<br></br>
        <a href="mailto:
sg@jhmun.org" target="_blank" rel="noreferrer">
    <u><b>sg@jhmun.org</b></u></a>

<br></br><br></br>
        Sincerely,<br></br>
        <Image src={"/design/Icons & Buttons/sig.svg"} className={styles.sig} width={500} height={100} priority={true} loading={"eager"}/>
        <br></br>
        Krishna Verma
        <br></br>
        Secretary General
        <br></br>
        Johnston Heights Model United Nations
        <br></br>
        </p>
    )
}
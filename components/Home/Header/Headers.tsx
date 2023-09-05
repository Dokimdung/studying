import {useRouter} from "next/router";
import styles from "../../../styles/HeaderStyle.module.css"

function Headers() {
    const router = useRouter()
    return (
        <div>
            <div style={{background: '#49bbbd', width: '100%', height: '100vh'}}>
                <div className={styles.body}>
                    <div className={styles.body_left} style={{display: 'flex'}}>
                        <div>
                            <a href={""} className={styles.body_left_Stu}> Studying </a>
                            <a href={""} className={styles.body_left_on}> Online is now much easier</a>
                            <a href="" className={styles.boby_left_text}>TOTC is an interesting platform that will
                                teach <br/> you in
                                more an interactive way</a>
                            <div style={{display: "flex"}}>
                                <button className={styles.body_left_join}> Join for free</button>
                                <div className={'mt-5'}>
                                    <img src={'/icons/Group 448.png'} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.body_right} style={{marginLeft: '300px', marginTop: '-50px'}}>
                            <img src={'/icons/anhfooter.png'} alt={""} className={styles.body_right_rightt}/>
                            <img src={'/icons/Group 7.png'} alt={""} className={styles.body_right_group1}/>
                            <img src={'/icons/Group 9.png'} alt={""} className={styles.body_right_group2}/>
                            <img src={'/icons/Group 10.png'} alt={""} className={styles.body_right_group3}/>
                            <img src={'/icons/Group 13.png'} alt={""} className={styles.body_right_group4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Headers;
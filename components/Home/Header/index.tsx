import styles from '../../../styles/HeaderStyle.module.css'
import {useRouter} from "next/router";

export default function Header() {
    const router = useRouter()

    return (
        <div style={{background: '#49bbbd', width: '100%', height: '100vh'}}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <img src={'/icons/logo.png'} alt="" className={styles.header__logo}/>
                </div>
                <div className={'mr-5'} style={{fontSize: '22px', fontWeight: '400'}}>
                    <a href="" className={styles.header__text}> Home</a>
                    <a href="" className={styles.header__text}> Courses</a>
                    <a href="" className={styles.header__text}> Careers</a>
                    <a href={'/blog'} className={styles.header__text}> Blog</a>
                    <a href="" className={styles.header__text}> About Us</a>
                    <button onClick={() => router.push('/login')} className={styles.header_buttom_fist}> Login</button>
                    <button onClick={() => router.push('/signup')} className={styles.header_buttom_two}> Sign Up
                    </button>
                </div>
            </div>
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
    )
}
import styles from '../../../styles/HeaderStyle.module.css'
import {useRouter} from "next/router";

function Header() {
    const router = useRouter()

    return (
        <div style={{background: '#49bbbd', display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
                <img src={'/icons/logo.png'} alt="" className={styles.header__logo}/>
            </div>
            <div className={'mr-5'} style={{fontSize: '22px', fontWeight: '400'}}>
                <button onClick={() => router.push('/')} className={styles.header__text}> Home</button>
                <button onClick={() => router.push('/courses')} className={styles.header__text}> Courses</button>
                <button className={styles.header__text}> Careers</button>
                <button onClick={() => router.push('/blog')} className={styles.header__text}> Blog</button>
                <button onClick={() => router.push('/member')} className={styles.header__text}> About Us</button>
                <button onClick={() => router.push('/login')} className={styles.header_buttom_fist}> Login</button>
                <button onClick={() => router.push('/signup')} className={styles.header_buttom_two}> Sign Up
                </button>
            </div>
        </div>

    )
}

export default Header;
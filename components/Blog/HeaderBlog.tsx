import styles from "@/styles/HeaderStyle.module.css";

const HeaderBlog = () => {
    return (
        <div className={"bg-slate-300"}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <img src={'/icons/logo.png'} alt="" className={styles.header__logo}/>
                </div>
                <div className={'mr-5'} style={{fontSize: '22px', fontWeight: '400'}}>
                    <a href="" className={styles.header__text}> Home</a>
                    <a href="" className={styles.header__text}> Courses</a>
                    <a href="" className={styles.header__text}> Careers</a>
                    <a href="" className={styles.header__text}> Blog</a>
                    <a href="" className={styles.header__text}> About Us</a>
                </div>
            </div>
            <div className={"flex"}>
                <p className={"text-base "}> By Themadbrains in </p> <p className={"text-blue-400"}> inspiration </p>
                <h3 className={"text-blue-900 text-3xl"}> Why Swift UI Should Be on the <br/> Radar of Every Mobile
                    Developer </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempos Lorem ipsum
                    dolor sitamet, <br/> consectetur adipiscing elit, sed do eiusmod tempor </p>
                <p> Start learning now </p>
                <div><img src={'icons/Group 40.png'}/></div>
            </div>
        </div>

    )
}
export default HeaderBlog;
import styles from '../../../styles/BodyStyle.module.css'

const Extend =()=>{
    return(
        < div style={{background: '', width: '100%'}} className={styles.extend}>
            <div style={{margin:'80px', }}>
                <h3 className={styles.extend__tittle}>
                    Explore Course
                </h3>
                <p className={styles.extend__text}>
                    Ut sed eros finibus, placerat orci id, dapibus.
                </p>
            </div>
            <div className={styles.extend__img} style={{display: 'block'}}>
                <img src={'icons/Category.png'} alt={""} className={styles.extend__img}/>
                <img src={'icons/Category (1).png'} alt={""} className={styles.extend__img}/>
                <img src={'icons/Category (2).png'} alt={""} className={styles.extend__img}/>
            </div>

        </div>
    )
}
export default Extend;
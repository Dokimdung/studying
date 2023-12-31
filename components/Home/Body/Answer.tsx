import styles from '../../../styles/BodyStyle.module.css'

const Answer = () => {
    return (
        <div>
            <div className={styles.answer__all}>
                <h3 className={styles.answer__tittle}>
                    Everything you can do in a physical <br/>classroom,
                    <span className={styles.answer__tittle_you}> you can do with TOTC</span>
                </h3>
                <div className={styles.answer__text}>
                    <div>
                        <p>
                            TOTC’s school management software helps traditional and <br/>online schools manage
                            scheduling,
                            attendance, payments <br/> and virtual classrooms all in one secure cloud-based system.
                        </p>
                        <p className={styles.answer__text_read}>Learn more </p></div>
                    <div style={{margin: "30px"}}>
                        <img src={'icons/confident-teacher-explaining-lesson-pupils 1.png'} alt={""}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Answer;
import styles from '../../../styles/BodyStyle.module.css'

const Question = () => {
    return (
        <div className={styles.question}>
            <h3 className={styles.question__tittle}>
                <span> What is </span>
                <span className={styles.question__tittle_to}> TOTC </span>
            </h3>
            <div className={styles.question__text}>
                <p>
                    TOTC is a platform that allows educators to create online classes whereby they can <br/> store the
                    course materials online;
                    manage assignments, quizzes and exams; monitor <br/>due dates; grade results and provide students
                    with feedback all in one place.
                </p></div>
            <div className={styles.question__content}>
                <div className={styles.question__content__item}>
                    <img src={'/icons/Q_B_H1.png'} alt={""} className={styles.question__content__tittle_img}/>
                    <div className={styles.question__content__item__content}>
                        <h2 className={styles.question__content__tittle}>
                            FOR INSTRUCTORS
                        </h2>
                        <button className={styles.question__content__button}>
                            < p>Start a class today </p>
                        </button>
                    </div>
                </div>
                <div className={styles.question__content__item}>
                    <img src={'/icons/Q_B_H2.png'} alt={""} className={styles.question__content__tittle_img}/>
                    <div className={styles.question__content__item__content}>
                        <h2 className={styles.question__content__tittle}>
                            FOR STUDENTS
                        </h2>
                        <button className={styles.question__content__button}>
                            < p>Enter access code </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Question;
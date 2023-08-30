import styles from '../../../styles/BodyStyle.module.css'

const ContainerAll = () => {
    return (
        <>
            <div className={styles.container_all}>
                <h2 className={styles.container_all_in}>
                    <span>
                        All-In-One
                    </span>
                    <span className={styles.container_all_cl}>
                        Cloud Software
                    </span>
                </h2>
                <div className={styles.container_all_text}>
                    <p> TOTC is one powerful online software suite that combines all the <br/>
                        tools needed to run a successful school or office. </p>
                </div>
            </div>
            <div className={styles.container_button}>
                < button className={styles.container_button_line}>
                    < img src={'/icons/Group 79.png'} alt="" className={styles.container_button_line__icon}/>
                    <h3 className={styles.container_button_tittle}>
                        Online Billing, <br/> Invoicing, & Contracts
                    </h3>
                    <p className={styles.container_button_text}> Simple and secure control of your organization’s
                        financial
                        and legal transactions. Send customized invoices and contracts </p>
                </button>
                < button className={styles.container_button_line}>
                    < img src={'/icons/Group 80.png'} alt="" className={styles.container_button_line__icon}/>
                    <h3 className={styles.container_button_tittle}>
                        Easy Scheduling & <br/> Attendance Tracking
                    </h3>
                    <p className={styles.container_button_text}> Schedule and reserve classrooms at one campus or
                        multiple
                        campuses. Keep detailed records of student attendance </p>
                </button>
                < button className={styles.container_button_line}>
                    < img src={'/icons/Group 81.png'} alt="" className={styles.container_button_line__icon}/>
                    <h3 className={styles.container_button_tittle}>
                        Customer Tracking
                    </h3>
                    <p className={styles.container_button_text}> Automate and track emails to individuals or groups.
                        Skilline’s built-in system helps organize your organization </p>
                </button>
            </div>
        </>
    )
}
export default ContainerAll;
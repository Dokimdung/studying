import styles from '../../../styles/BodyStyle.module.css'


const MainContent =()=>{
    return(
        <div className={styles.content}>
            <div className={styles.content__header}>
                <h3 className={styles.content__header_tittle}>
                <span> Our </span>
                <span style={{color: '#00CBB8'}}> Features </span>
            </h3>
                <p className={styles.content__header_text}>
                This very extraordinary feature, can make learning activities more efficient
            </p>
        </div>
            <div className={styles.content__frame}>
                <img src={'icons/Group 71.png'} alt={""} className={styles.content_frame_left_img}/>
                <div style={{alignItems: 'center'}} className={styles.content_frame_left}>
                    <div className={styles.content_frame_tittle}>
                        <h3 className={styles.content_frame_tittle}>
                        <span>A  </span>
                        <span  style={{color: '#00CBB8', alignItems: 'center'}}> user interface </span>
                        <span> designed <br/>for the classroom</span>
                    </h3>
                </div>
                    <div className={styles.content_frame_text}>
                    <p> Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    <p> TA’s and presenters can be moved to the front of the class.</p>
                    <p> Teachers can easily see all students and class data at one time.</p>
                </div>
            </div>
            </div>
            <div className={styles.content_frame_nav}>
                <div className={styles.content_frame_nav_right}>
                <div >
                    <h3 className={styles.content_frame_nav_tittle}>
                        <span style={ { color:'#00CBB8'}}> Tools </span>
                        <span> For Teachers And Learners</span>
                    </h3> </div>
                    <div className={styles.content_frame_nav_text}>
                      <p> Class has a dynamic set of teaching tools built to be deployed and used during class.
                          Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                </div>
                <div className={styles.content_frame_nav_img}>
                    <img src={'icons/Group 122.png'} alt={""}/>
                   </div>
                </div>
            <div className={styles.content__frame_}>
                <img src={'icons/Group 92.png'} alt={""} className={styles.content_frame_left_img}/>
                <div style={{alignItems: 'center'}} className={styles.content_frame_left}>
                    <div className={styles.content_frame_tittle}>
                        <h3 className={styles.content_frame_tittle}>
                            <span>Assessments, </span>
                            <span  style={{color: '#00CBB8'}}> Quizzes </span>
                            <span> , Tests </span>
                        </h3>
                    </div>
                    <div className={styles.content_frame_text}>
                        <p> Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.</p>
                    </div>
                </div>
            </div>
            <div className={styles.content_frame_nav_}>
                <div className={styles.content_frame_nav_right}>
                    <div >
                        <h3 className={styles.content_frame_nav_tittle}>
                            <span style={ { color:'#00CBB8'}}> Class Management  </span>
                            <span> Tools for Educators</span>
                        </h3> </div>
                    <div className={styles.content_frame_nav_text}>
                        <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                    </div>
                </div>
                <div className={styles.content_frame_nav_img}>
                    <img src={'icons/Group 124.png'} alt={""}/>
                </div>
            </div>
            <div className={styles.content__frame_}>
                <img src={'icons/Group 106.png'} alt={""} className={styles.content_frame_left_img}/>
                <div style={{alignItems: 'center'}} className={styles.content_frame_left}>
                    <div className={styles.content_frame_tittle}>
                        <h3 className={styles.content_frame_tittle}>
                        <span>One-on-One  </span>
                        <span  style={{color: '#00CBB8'}}> Discussions </span>
                    </h3>
                </div>
                    <div className={styles.content_frame_text}>
                    <p> Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </div>

            </div>
            <div className={styles.content__button}>
                <p style={{marginTop: '25px'}} className="content-center"> See more features </p></div>
        </div>
    )
}
export default MainContent;
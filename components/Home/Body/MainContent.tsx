import calltell from '../../icons/Group 71.png'
import group122 from "../../icons/Group 122.png"
import group92 from '../../icons/Group 92.png'
import group124 from "../../icons/Group 124.png"
import group106 from "../../icons/Group 106.png"


const MainContent =()=>{
    return(
        <div className={"content"}>
        <div  className={"content__header"}>
            <h3 className={"content__header-tittle"}>
                <span> Our </span>
                <span style={{color: '#00CBB8'}}> Features </span>
            </h3>
            <p className={"content__header-text"}>
                This very extraordinary feature, can make learning activities more efficient
            </p>
        </div>
            <div  className={"content__frame"}>
                <img src={calltell} alt={""} className={"content_frame-left-img"} />
                <div  style={{ alignItems: 'center'}} className={"content_frame-left"}>
                <div className={"content_frame-tittle"}>
                    <h3 className={"content_frame-tittle"}>
                        <span>A  </span>
                        <span  style={{color: '#00CBB8', alignItems: 'center'}}> user interface </span>
                        <span> designed <br/>for the classroom</span>
                    </h3>
                </div>
                    <div className={"content_frame-text"}>
                    <p> Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    <p> TA’s and presenters can be moved to the front of the class.</p>
                    <p> Teachers can easily see all students and class data at one time.</p>
                </div>
            </div>
            </div>
            <div className={"content_frame-nav"}>
                <div className={"content_frame-nav-right"}>
                <div >
                    <h3 className={"content_frame-nav-tittle"}>
                        <span style={ { color:'#00CBB8'}}> Tools </span>
                        <span> For Teachers And Learners</span>
                    </h3> </div>
                    <div className={"content_frame-nav-text"}>
                      <p> Class has a dynamic set of teaching tools built to be deployed and used during class.
                          Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                </div>
                   <div className={"content_frame-nav-img"}>
                       <img src={group122} alt={""}/>
                   </div>
                </div>
            <div className={"content__frame-"}>
                <img src={group92} alt={""} className={"content_frame-left-img"} />
                <div  style={{ alignItems: 'center'}} className={"content_frame-left"}>
                    <div className={"content_frame-tittle"}>
                        <h3 className={"content_frame-tittle"}>
                            <span>Assessments, </span>
                            <span  style={{color: '#00CBB8'}}> Quizzes </span>
                            <span> , Tests </span>
                        </h3>
                    </div>
                    <div className={"content_frame-text"}>
                        <p> Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.</p>
                    </div>
                </div>
            </div>
            <div className={"content_frame-nav-"}>
                <div className={"content_frame-nav-right"}>
                    <div >
                        <h3 className={"content_frame-nav-tittle"}>
                            <span style={ { color:'#00CBB8'}}> Class Management  </span>
                            <span> Tools for Educators</span>
                        </h3> </div>
                    <div className={"content_frame-nav-text"}>
                        <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                    </div>
                </div>
                <div className={"content_frame-nav-img"}>
                    <img src={group124} alt={""}/>
                </div>
            </div>
            <div className={"content__frame-"}>
            <img src={group106} alt={""} className={"content_frame-left-img"} />
            <div  style={{ alignItems: 'center'}} className={"content_frame-left"}>
                <div className={"content_frame-tittle"}>
                    <h3 className={"content_frame-tittle"}>
                        <span>One-on-One  </span>
                        <span  style={{color: '#00CBB8'}}> Discussions </span>
                    </h3>
                </div>
                <div className={"content_frame-text"}>
                    <p> Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
            </div>

            </div>
            <div className={"content__button"}>
                <button> <p className={"content__button-text"}> See more features</p> </button>
            </div>
        </div>
    )
}
export default MainContent;
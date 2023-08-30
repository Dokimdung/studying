import styles from '../../../styles/BodyStyle.module.css'

const ExtendTest =()=>{
    return(
        <div className={styles.extend_test}>
            <div className={styles.extend__test}>
                <img src={'icons/Line 4.png'} alt={""} className={styles.extend__test_img}
                     style={{background: '#525596'}}/>
                <p className={styles.extend__test_text}> TESTIMONIAL</p>
                <h3 className={styles.extend__test_tittle}> What They Say?</h3>
                <div className={styles.extend__test_tittle_text}>
                    <p className={styles.extend__test_tittle_text}> TOTC has got more than 100k positive ratings from
                        our users around the world. </p>
                    <p className={styles.extend__test_tittle_text}> Some of the students and teachers were greatly
                        helped by the Skilline. </p>
                    <p className={styles.extend__test_tittle_text}> Are you too? Please give your assessment </p>
                    <div className={"relative"}>
                        <button className={styles.extend__button} style={{marginLeft: '50px'}}>
                            <p style={{
                                textAlign: 'center',
                                marginRight: '100px',
                                fontSize: '25px',
                                marginLeft: '30px'
                            }}> Write your assessment </p>
                            <img src={'icons/Group 32.png'} alt={""} style={{marginLeft: '310px',}}
                                 className={"absolute"}/>
                        </button>
                        </div>
                    </div>
                </div>
            <div className={styles.extend__test_tittle_img}>

                <div className={"relative"}>
                        <div style={{display:'flex', marginLeft:'100px'}}>
                            <img src={'icons/Mask Group.png'} alt={""} className={styles.extend__test_tittle_img}/>
                            <img src={'icons/Group 51.png'} alt={""}
                                 style={{marginLeft: '-110px', width: '100%', height: '40%', marginTop: '250px'}}/>
                        </div>


                        <div className="absolute bottom-0 right-0">
                            <div className={styles.extend__test_button}>
                                <button style={{background: '#fff'}} className={styles.extend__test_button}>
                                    <p style={{
                                        color: '#696984',
                                        fontSize: '15px',
                                        marginTop: '40px',
                                        marginLeft: '90px',
                                        textAlign: 'left'
                                    }}> " Thank you so much for your help. It's exactly what <br/> I've been looking
                                        for. You won't regret it. It really <br/> me time and effort. TOTC is exactly
                                        what our <br/> business has been lacking."</p>
                        <p style={{ color:'#696984', fontSize:'15px',fontWeight:'600', marginLeft:'-200px',marginTop:'40px' } }> Gloria Rose </p>
                                    <img src={'icons/Group 29.png'} alt={""} className={styles.extend__test_tittle_img}
                                         style={{marginLeft: '260px', width: '30%', marginTop: '-20px'}}/>
                        <p style={{ color:'#696984',fontSize:'15px',fontWeight:'400',marginLeft:'150px' }} > 12 reviews at Yelp </p>
                   </button>
                    </div>
                    </div>
                    </div>
                </div>

        </div>
    )
}
export default ExtendTest;
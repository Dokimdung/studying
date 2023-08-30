import lineed from "../../icons/Line 4.png";
import master from '../../icons/Mask Group.png'
import stared from '../../icons/Group 29.png'
import  group51 from '../../icons/Group 51.png'
import group32 from '../../icons/Group 32.png'

const ExtendTest =()=>{
    return(
        <div className={"extendtest"}>
            <div className={"extend__test"}>
                <img src={lineed} alt={""} className={"extend__test-img"} style={{background:'#525596'}}/>
                <p className={"extend__test-text"}> TESTIMONIAL</p>
                <h3 className={"extend__test-tittle"}> What They Say?</h3>
                    <div className={"extend__test-tittle-text"}>
                    <p className={"extend__test-tittle-text"}> TOTC has got more than 100k positive ratings from our users around the world. </p>
                    <p className={"extend__test-tittle-text"}> Some of the students and teachers were greatly helped by the Skilline. </p>
                    <p className={"extend__test-tittle-text"}> Are you too? Please give your assessment </p>
                        <div  >
                            <button  className={"extend__buton"} >
                           <p style={{marginTop:'20px', textAlign:'center',marginLeft:'80px',fontSize:'20px'}}> Write your assessment </p>
                            <img src={group32} alt={""} style={{marginRight:'0px'}}/>
                        </button>
                        </div>
                    </div>
                </div>
                <div className={"extend__test-tittle-img"}>

                    <div class={"relative"}>
                        <div style={{display:'flex', marginLeft:'100px'}}>
                            <img src={master} alt={""}  className={"extend__test-tittle_img"} />
                            <img src={group51} alt={""} style={{marginLeft:'-110px'}}/>
                        </div>


                        <div className="absolute bottom-0 right-0">
                    <div className={"extend__test-button"}>
                   <button style={{background:'#fff'}} className={"extend__test-button"}>
                       <p style={{color:'#696984', fontSize:'15px',marginTop:'40px',marginLeft:'90px',textAlign:'left'}}> "Thank you so much for your help. It's exactly what <br/> I've been looking for.  You won't regret it. It really  <br/> me time and effort. TOTC is exactly what  our <br/> business has been lacking."</p>
                        <p style={{ color:'#696984', fontSize:'15px',fontWeight:'600', marginLeft:'-200px',marginTop:'40px' } }> Gloria Rose </p>
                                <img src={stared} alt={""} className={"extend__test-tittle_img "} style={{marginLeft:'260px',width:'117px',marginTop:'-20px'}} />
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
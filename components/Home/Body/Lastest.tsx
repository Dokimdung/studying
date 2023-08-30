import group40 from '../../icons/Group 40.png'
import group41 from '../../icons/Group 42.png'
import group39 from '../../icons/Group 39.png'
import group42 from '../../icons/Group 43.png'
import group43 from '../../icons/Group 42.png'
import group44 from '../../icons/Group 44.png'
const Lastest =()=>{
    return(
        <div>
            <div style={{marginTop:'100px'}} >
                <h3 style={{ fontSize:'35px', color:'#2F327D', fontWeight:'600'}}> Lastest News and Resources </h3>
                <p style={{ fontSize:'20px', color:'#696984', fontWeight:'400',textAlign:'center'}} > See the developments that have occurred to TOTC in the world</p>
            </div>
            <div style={{display:'flex'}} >
            <div style={{width:'600px', marginTop:'80px'}} >
                <img src={group40} alt={""}/>
                <img src={group39} alt={""} style={{ marginTop:'30px', marginLeft:'-10px'}}/>
                <h3 style={{ fontSize:'24px', fontWeight:'600', marginTop:'30px'}} > Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                <p style={{ fontSize:'20px', fontWeight:'400', color:'#696984',lineHeight:'40px'}}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <p style={{ fontSize:'20px', fontWeight:'400', color:'#696984',textDecoration:'underline'}}> Read more </p>
            </div>
            <div style={{ marginLeft:'50px'}}>


                <div style={{  width :'800px',display:'flex' , marginTop:'80px'}} >
                    <img src={group41} alt={""} style={{ position:'relative'}} />
                    <img src={group44} alt={""} style={{ position: 'absolute',marginTop:'150px',marginLeft:'120px'}}/>
                    <div style={{ marginLeft :'40px'}}>
                    <h3 style={{ fontSize:'24px', fontWeight:'600'}} >Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand </h3>
                    <p style={{ fontSize:'20px', fontWeight:'400', color:'#696984',lineHeight:'40px'}} >Class Technologies Inc., the company that created Class,... </p>
                    </div>
                </div>
                <div style={{  width :'800px',display:'flex', marginTop:'30px'}} >
                    <img src={group42} alt={""} style={{position:'relative' }} />
                    <img src={group39} alt={""} style={{position: 'absolute',marginTop:'150px',marginLeft:'120px' }}/>
                    <div style={{ marginLeft :'40px'}}>
                        <h3 style={{ fontSize:'24px', fontWeight:'600'}}>Zoom’s earliest investors are betting millions on a better Zoom for schools </h3>
                        <p style={{ fontSize:'20px', fontWeight:'400', color:'#696984',lineHeight:'40px'}} >Zoom was never created to be a consumer product. Nonetheless, the... </p>
                    </div>
                </div>
                <div style={{  width :'800px',display:'flex' , marginTop:'30px'}} >
                    <img src={group43} alt={""} style={{position:'relative' }}  />
                    <img src={group39} alt={""} style={{ position: 'absolute',marginTop:'150px',marginLeft:'120px'}}/>
                    <div style={{ marginLeft :'40px'}}>
                        <h3 style={{ fontSize:'24px', fontWeight:'600'}} >Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h3>
                        <p style={{ fontSize:'20px', fontWeight:'400', color:'#696984',lineHeight:'40px'}} >This year, investors have reaped big financial returns from betting on Zoom... </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Lastest;
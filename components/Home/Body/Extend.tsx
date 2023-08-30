import lorem from '../../icons/Category.png'
import quisque from '../../icons/Category (1).png'
import aenean from '../../icons/Category (2).png'
import lineed from '../../icons/Line 4.png'

const Extend =()=>{
    return(
        < div style={{background:'',width:'100%'}} className={"extend"}>
            <div style={{margin:'80px', }}>
                <h3 className={"extend__tittle"}>
                    Explore Course
                </h3>
                <p className={"extend__text"}>
                    Ut sed eros finibus, placerat orci id, dapibus.
                </p>
            </div>
            <div className={"extend__img"} style={{display:'block'}}>
                <img src={lorem} alt={""} className={"extend__img"}/>
                <img src={quisque} alt={""}className={"extend__img"} />
                <img src={aenean} alt={""} className={"extend__img"}/>
            </div>

        </div>
    )
}
export default Extend;
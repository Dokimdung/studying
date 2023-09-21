import Footer from "../Home/Footer";
import Header from "../Home/Header/Header";
import BodyLC from "./BodyLC";
import HeaderLC from "./HearderLC";

function LiteratureCourse(){
    return(
        <div>
            <Header/>
            <HeaderLC/>
            <BodyLC/>
            <Footer/>
        </div>
    )
}
export default LiteratureCourse;
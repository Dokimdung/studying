import Footer from "../Home/Footer";
import Header from "../Home/Header/Header";
import BodySearch from "./BodySearch";
import CardSearch from "./CardSearch";
import ContainerSearch from "./ContainerSearch";
import FrameAllSearch from "./FrameAllSearch";
import FrameSearch from "./FrameSearch";
import HeaderSearch from "./HeaderSearch";
import LasttestSearch from "./LasttestSearch";
import QuestionSearch from "./QuestionSearch";

function Search() {
    return (
        <div>
            <Header/>
            <HeaderSearch/>
            <BodySearch/>
            <ContainerSearch/>
            <FrameSearch/>
            <CardSearch/>
            <FrameAllSearch/>
            <QuestionSearch/>
            <LasttestSearch/>
            <Footer/>
        </div>
    )
}

export default Search;
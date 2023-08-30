import './bodyStyle.css'
import ContainerFrame from "./ContainerFrame";
import ContainerAll from "./ContainerAll";
import Question from "./Question";
import Answer from "./Answer";
import MainContent from "./MainContent";
import Extend from "./Extend";
import ExtendTest from "./ExtendTest";
import Lastest from "./Lastest";


export default function Body() {
    return (
        <div class=" container">
            <ContainerFrame/>
            <ContainerAll/>
            <Question/>
            <Answer/>
            <MainContent/>
            <Extend/>
            <ExtendTest/>
            <Lastest/>
        </div>
    )
}

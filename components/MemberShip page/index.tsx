import Header from "@/components/Home/Header/Header";
import BodyMember from "@/components/MemberShip page/BodyMember";
import HeaderMember from "@/components/MemberShip page/HeaderMember";
import Container from "@/components/MemberShip page/Container";
import Lastest from "@/components/MemberShip page/Lasttest";
import Footer from "@/components/Home/Footer";
import ContainerFrame from "@/components/MemberShip page/ContainerFrame";

function MemberShipPage() {
    return (
        <div>
            <Header/>
            <HeaderMember/>
            <BodyMember/>
            <Container/>
            <ContainerFrame/>
            <Lastest/>
            <Footer/>

        </div>
    )
}

export default MemberShipPage;
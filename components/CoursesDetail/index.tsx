import Footer from "@/components//Home/Footer";
import Header from "@/components//Home/Header/Header";
import BodyDetail from "@/components/CoursesDetail/BodyDetail";
import CardDetail from "@/components/CoursesDetail/CardDetail";
import ContainerDetail from "@/components/CoursesDetail/ContainerDetail";
import HeaderDetail from "@/components/CoursesDetail/HeaderDetail";
import LasttestDetail from "@/components/CoursesDetail/LasttestDetail";

function CoursesDetail() {
    return (
        <div>
            <Header/>
            <HeaderDetail/>
            <BodyDetail/>
            <CardDetail/>
            <ContainerDetail/>
            <LasttestDetail/>
            <Footer/>

        </div>
    )
}

export default CoursesDetail;
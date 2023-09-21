import Footer from "@/components//Home/Footer";
import Header from "@/components//Home/Header/Header";
import BodyDetail from "@/components/CoursesDetail/BodyDetail";
import ContainerDetail from "@/components/CoursesDetail/ContainerDetail";
import HeaderDetail from "@/components/CoursesDetail/HeaderDetail";
import LasttestDetail from "@/components/CoursesDetail/LasttestDetail";

function CoursesDetail() {
    return (
        <div>
            <Header/>
            <HeaderDetail/>
            <BodyDetail/>

            <ContainerDetail/>
            <LasttestDetail/>
            <Footer/>

        </div>
    )
}

export default CoursesDetail;
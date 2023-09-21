import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/Footer";
import HeaderCourses from "@/components/Courses/HeaderCourses";
import BodyCourses from "@/components/Courses/BodyCourses";
import Container from "@/components/Courses/Container";
import Lasttest from "@/components/Courses/Lasttest";
import ContainerFrame from "@/components/Courses/ContainerFrame";
import ContainerAll from "@/components/Courses/ContainerAll";
import ContainerCourses from "@/components/Courses/ContainerCourses"

function Courses() {
    return (
        <div>
            <Header/>
            <HeaderCourses/>
            <BodyCourses/>
            <Container/>
            <ContainerFrame/>
            <ContainerAll/>
            <ContainerCourses/>
            <Lasttest/>
            <Footer/>
        </div>
    )

}

export default Courses;
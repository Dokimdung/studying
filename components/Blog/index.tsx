import React from 'react';
import Footer from "@/components/Home/Footer";
import HeaderBlog from "@/components/Blog/HeaderBlog";
import BodyBlog from "@/components/Blog/BodyBlog";
import Container from "@/components/Blog/Container";
import LastTests from "@/components/Blog/LastTests";
import Header from "@/components/Home/Header/Header";

function Blog() {
    return (
        <div>
            <Header/>
            <HeaderBlog/>
            <BodyBlog/>
            <Container/>
            <LastTests/>
            <Footer/>
        </div>
    );
}

export default Blog;
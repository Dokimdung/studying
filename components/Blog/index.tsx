import React from 'react';
import Footer from "@/components/Home/Footer";
import HeaderBlog from "@/components/Blog/HeaderBlog";
import BodyBlog from "@/components/Blog/BodyBlog";
import Container from "@/components/Blog/Container";
import LastTests from "@/components/Blog/LastTests";

function Blog() {
    return (
        <div>
            <HeaderBlog/>
            <BodyBlog/>
            <Container/>
            <LastTests/>
            <Footer/>
        </div>
    );
}

export default Blog;
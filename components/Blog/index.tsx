import React from 'react';
import Footer from "@/components/Home/Footer";
import HeaderBlog from "@/components/Blog/HeaderBlog";
import BodyBlog from "@/components/Blog/BodyBlog";
import Comtainer from "@/components/Blog/Comtainer";
import Lastests from "@/components/Blog/Lastests";

function Blog() {
    return (
        <div>
            <HeaderBlog/>
            <BodyBlog/>
            <Comtainer/>
            <Lastests/>
            <Footer/>
        </div>
    );
}

export default Blog;
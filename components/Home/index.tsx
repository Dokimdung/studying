import React from 'react';
import Header from "@/components/Home/Header/Header";
import Body from "@/components/Home/Body";
import Footer from "@/components/Home/Footer";
import Headers from "@/components/Home/Header/Headers";


function Home() {
    return (
        <div>
            <Header/>
            <Headers/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Home;
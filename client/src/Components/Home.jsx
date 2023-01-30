import React from 'react';
import MainHead from "./MainHead";
import Footer from "./Footer";
import SelectPc from "./PcComp/SelectPc"
import Navbar from './Navbar';
import Header from './Header';

const Home = () => {
    return (
        <>  
            <Header/>
            <Navbar/>
            <MainHead/>
            <SelectPc/>
            <Footer/> 
        </>
    )
}

export default Home

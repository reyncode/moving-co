import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { aboutObject, accommodationObject } from '../components/InfoSection/data';
import Services from '../components/Services';
import Form from '../components/Form/Form';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...aboutObject} />
            <InfoSection {...accommodationObject} />
            <Services />
            <Form />
            <Footer />
        </>
    )
}

export default Home

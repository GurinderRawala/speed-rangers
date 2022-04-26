import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import AboutScreen from '../screens/about-screen';
import CareersScreen from '../screens/careers-screen';
import ContactScreen from '../screens/contact-screen';
import HomeScreen from '../screens/home-screen';
const AppRouter = () =>{

    return(
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/career" element={<CareersScreen />} />
            <Route path="/about" element={<AboutScreen />} />
        </Routes>
    )
}

export default AppRouter
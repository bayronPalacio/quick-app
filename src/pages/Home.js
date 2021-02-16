import React from 'react';
import NavBar from '../components/NavBar';
import CarouselView from '../components/CarouselView';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <div>
            <NavBar/>
        </div>
        <div className="mainBack">
            <CarouselView/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    );
}

export default Home;
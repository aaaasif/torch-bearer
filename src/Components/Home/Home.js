import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='d-flex justify-content-start'>
                <h3 className='d-flex justify-content-start'>SERVICE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <div className=''>
                <button>CONSULTING </button>
                <button>PODIATRY </button>
                <button>NUTRITION </button>
                <button>MARKETING </button>
                <button>PHYSIOTHERAPY </button>
            </div>     
            </div>
            <Section/>
            <Footer/>
        </div>
    );
};

export default Home;
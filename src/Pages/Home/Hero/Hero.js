import React from 'react';
import bgImg from '../../../assets/banner-bg.png';

const Hero = () => {
    return (
        <section
            style={{
                background: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className=' max-w-6xl mx-auto lg:pb-40  py-20 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>

            </div>
        </section>
    );
};

export default Hero;
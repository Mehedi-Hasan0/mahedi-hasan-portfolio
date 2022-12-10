import React from 'react';
import bgImg from '../../../assets/banner-bg.png';

const Navbar = () => {
    return (
        <nav
            style={{
                background: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='max-w-6xl lg:mx-16 xl:mx-auto'>

            </div>
        </nav>
    );
};

export default Navbar;
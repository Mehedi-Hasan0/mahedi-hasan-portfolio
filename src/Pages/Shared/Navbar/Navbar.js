import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import menu from '../../../assets/icon/menu.svg';
import close from '../../../assets/icon/close.svg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toProjects = () => {
        const section = document.querySelector('#projects');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const toContact = () => {
        const section = document.querySelector('#contact');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav className='bg-[#121e27] border-b'>
            <div className='max-w-6xl md:mx-16 xl:mx-auto md:flex hidden justify-between items-center'>
                <Link to='/' className='text-white font-semibold text-2xl'>Mahedi Hasan</Link>
                <div className=' text-white nav-links'>
                    <Link to='/' className='nav-link nav-link-ltr'>Home</Link>
                    <Link to='/about' className='mx-5 nav-link nav-link-ltr'>About</Link>
                    <Link onClick={toProjects} className='mr-5 nav-link nav-link-ltr'>Projects</Link>
                    <Link onClick={toContact} className='nav-link nav-link-ltr'>Contact</Link>
                </div>
            </div>

            <div className='md:hidden flex items-center justify-between py-3 px-5 sm:px-9 md:px-12'>
                <Link className='text-xl font-semibold text-white' to='/'>Mahedi Hasan</Link>
                <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain cursor-pointer opacity-70' onClick={() => setToggle((previous) => !previous)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute bg-[#121e27] top-0 right-0 w-full flex-col items-end opacity-100 z-50`}>
                    <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} />
                    <div className='flex flex-col md:text-lg text-base z-50 w-full relative text-center justify-between'>

                        <Link to='/' className='text-white'>Home</Link>
                        <Link to='/about' className='my-5 text-white'>About</Link>
                        <Link onClick={toProjects} className='mb-5 text-white'>Projects</Link>
                        <Link onClick={toContact} className='text-white'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
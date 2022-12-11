import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImg from '../../../assets/images/Code typing-pana.svg';
import github from '../../../assets/icon/icons8-github.svg';
import linkedIn from '../../../assets/icon/icons8-linkedin.svg';
import email from '../../../assets/icon/icons8-envelope-60.png';

const Hero = () => {
    return (
        <section className='bg-[#121e27]'>
            <div className=' max-w-6xl mx-auto md:py-32 py-16 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <div className='lg:w-[60%] mb-8 lg:mb-0'>
                        <h2 className='text-white font-medium md:text-5xl sm:text-4xl text-3xl leading-snug'>Hi, I'm Mahedi Hasan <span className='md:text-3xl sm:text-2xl text-xl z-10'>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        </h2>
                        <div className='my-5'>
                            <a href="https://github.com/Mehedi-Hasan0" target='_blank' rel="noreferrer"><img src={github} alt="" className='w-10 inline' /></a>
                            <a href="https://www.linkedin.com/in/mhmahedihasan" target='_blank' rel="noreferrer"><img src={linkedIn} alt="" className='w-10 inline mx-4' /></a>
                            <a href="mailto:dev.mahedihasan@gmail.com"><img src={email} alt="" className='w-10 inline' /></a>
                        </div>
                        <p className='text-white font-light md:w-[60%] md:text-lg text-base opacity-80 mb-8'>I love exploring and creating 🚀 I'm a lifelong learner 🎓 Walking towards my dream of becoming a software engineer 👨‍💻</p>
                        <a
                            href="https://drive.google.com/file/d/1vd2rwoddX8cYxE7wQ4ILg2pqkh2NeQvF/view?usp=sharing"
                            target='_blank' rel="noreferrer"
                        >
                            <button className='btn bg-[#d06057] normal-case opacity-90'>See Resume</button>
                        </a>
                    </div>
                    <div className='lg:w-[40%] sm:w-[80%] w-full  mx-auto'>
                        <img src={heroImg} alt="" className='opacity-90' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
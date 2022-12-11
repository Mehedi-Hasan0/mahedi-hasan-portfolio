import React from 'react';
import { Link } from 'react-router-dom';
import mahedi from '../../../assets/images/mahedi-hasan-web.png';

const MySkills = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-6xl mx-auto py-24 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-10'>
                <div>
                    <div className='mb-10'>
                        <h2 className='text-[#2f2f2f] text-4xl relative z-20'>My Skills</h2>
                        <hr className='border-[#ff715b] border-[10px] w-20 relative left-16 bottom-4 z-10' />
                    </div>
                    <div className='flex md:flex-row flex-col justify-between items-center'>
                        <div className='md:w-[35%] sm:w-[60%] w-[80%] mx-auto md:mb-0 mb-8'>
                            <img src={mahedi} alt="" className='rounded-3xl' />
                        </div>
                        <aside className='md:w-[60%]'>
                            <div>
                                <div className='flex flex-wrap gap-4 md:mb-14 mb-10 justify-center md:justify-start'>
                                    <p className='p-3 bg-[#222222] text-white inline-block '>Javascript</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend'>React</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend'>HTML</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend'>CSS</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend Css Framework'>Tailwind CSS</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend Css Framework'>Bootstrap</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Backend'>Node.js</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Backend'>Express.js</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Database'>MongoDB</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block '>React Query</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Frontend'>React router</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Authentication'>Firebase</p>
                                    <p className='p-3 bg-[#222222] text-white inline-block tooltip' data-tip='Tools'>Vercel</p>
                                </div>
                                <div>
                                    <h4 className=' text-black text-2xl font-semibold md:mb-7 mb-5'>I love building stuff 📱</h4>
                                    <p className='text-black md:text-lg text-base font-light md:leading-normal md:mb-7 mb-5'>My journey with computers starts at the age of 19. Since then I have tried many things like graphic design, video editing, and so on. But what really took my attention was how a website works and its functionality. When I truly realized my passion for web development I start chasing it with complete focus</p>
                                    <Link to='/about' className='text-[#ff715b] font-semibold'>Keep reading my bio</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default MySkills;
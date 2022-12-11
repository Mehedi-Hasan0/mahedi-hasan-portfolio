import React from 'react';
import { Link } from 'react-router-dom'
import pro1 from '../../../assets/images/projects1.png';
import pro2 from '../../../assets/images/projects2.png';
import pro3 from '../../../assets/images/projects3.png';


const Projects = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-6xl mx-auto pb-24 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-10'>
                <div>
                    <div className='mb-6'>
                        <h2 className='text-[#2f2f2f] text-4xl relative z-20'>Projects</h2>
                        <hr className='border-[#ff715b] border-[10px] w-32 relative left-1 bottom-4 z-10' />
                    </div>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <div className='md:w-[55%]'>
                            <h4 className=' text-black font-light text-xl tracking-widest mb-4'>Full stack project</h4>
                            <h2 className='text-black font-medium text-5xl mb-4'>Alex</h2>
                            <div className='flex flex-wrap gap-4 md:mb-14 mb-10'>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Frontend'>React</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Frontend'>HTML</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Frontend'>CSS</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Frontend Css Framework'>Tailwind CSS</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Backend'>Node.js</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Backend'>Express.js</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Database'>MongoDB</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block '>React Query</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Frontend'>React router</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Authentication'>Firebase</p>
                                <p className='p-2 bg-[#121E27] text-white inline-block tooltip' data-tip='Tools'>Vercel</p>
                            </div>
                            <div className='border-2 border-black inline-block md:mb-16 mb-7'>
                                <Link>
                                    <div className='bg-[#ff715b] py-5 px-8 relative right-2 bottom-2 hover:right-0 hover:bottom-0 transition-all'>
                                        <p className='text-white text-xl font-semibold'>View Project</p>
                                    </div>
                                </Link>
                            </div>
                            <p className='text-black md:text-2xl text-base md:leading-normal md:mb-7 opacity-80 text-justify'>Alex is a photography service based website. User can review services and user can also add services. But to add services user has to login.</p>
                        </div>
                        <div className='md:w-[35%] sm:w-[70%] w-[80%] mx-auto md:mx-0'>
                            <img src={pro1} alt="" className=' border rounded-2xl hover:shadow-2xl  mt-16 hover:mt-14 transition-all cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
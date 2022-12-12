import React from 'react';
import github from '../../assets/icon/icons8-github.svg';
import linkedIn from '../../assets/icon/icons8-linkedin.svg';
import email from '../../assets/icon/icons8-envelope-60.png';

const About = () => {
    return (
        <section className='bg-white'>
            <div className=' max-w-6xl mx-auto md:py-14 py-7 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className='text-[#121e27]'>
                    <h2 className='md:text-6xl text-3xl md:tracking-wide mb-6'>I have always loved tech</h2>
                    <p className=' text-xl font-medium'>Looking for my <span className='text-[#ff715b]'><a
                        href="https://drive.google.com/file/d/1vd2rwoddX8cYxE7wQ4ILg2pqkh2NeQvF/view?usp=sharing"
                        target='_blank' rel="noreferrer"
                    >Resume</a>?</span></p>
                    <div className='mt-12'>
                        <h4 className='md:text-3xl text-2xl font-semibold mb-6'>My quick story</h4>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'><strong>I have been building web stuff since I was 19 years-old.</strong> Back in the day I was fascinated by wordpress. I was in a imagination that website is all about drag and drop. Later, I lost interest and drop the idea of web development.</p>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'><strong>Since then I haven’t stopped learning and creating.</strong> I have been involved in music, photography.</p>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>After that I tried graphic design and video editing. Tried to do some freelance work in fiverr but that didn't work for me. I found myself lack of focus on one thing. All I could think that why the hell web development is drag and drop only. Then I realized that I didn't do enough research on web development. I tried to learn everything but didn't master anything. Finally <strong>I'm focused and found my way in becoming a software developer</strong></p>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>In the last one year, I have been increasingly working on web development. I've been actively learning frontend along with backend.</p>
                    </div>
                    <div className='mt-12'>
                        <h4 className='md:text-3xl text-2xl font-semibold mb-6'>As a Developer</h4>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>I pay close attention to my code’s readability. Sure, I’ll put together something as quickly as possible to make it work. <strong>I make sure to write clean, consistent, readable and maintainable code.</strong>  It’s great when features work, but it’s even greater whenever they can stay that way, regardless of who’s working on them.</p>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>I’m always excited to work on new projects, because I learn something new every time. I’m excited for the next challenge!</p>
                    </div>
                    <div className='mt-12'>
                        <h4 className='md:text-3xl text-2xl font-semibold mb-6'>As a Person</h4>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>If I have to describe myself in one word, it would focused. I'll take a problem break it into smaller parts and solve them one by one. Being focused helped me sail around through obstacles.</p>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>I always try to learn new things. I love reading books, and playing cricket.</p>
                    </div>
                    <div className='mt-12'>
                        <h4 className='md:text-3xl text-2xl font-semibold mb-6'>Let's have a chat</h4>
                        <p className='mb-5 md:text-xl text-base leading-normal font-light'>i would love to hear from you.</p>
                        <div className='my-5'>
                            <a href="https://github.com/Mehedi-Hasan0" target='_blank' rel="noreferrer"><img src={github} alt="" className='w-10 inline' /></a>
                            <a href="https://www.linkedin.com/in/mhmahedihasan" target='_blank' rel="noreferrer"><img src={linkedIn} alt="" className='w-10 inline mx-4' /></a>
                            <a href="mailto:dev.mahedihasan@gmail.com"><img src={email} alt="" className='w-10 inline' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
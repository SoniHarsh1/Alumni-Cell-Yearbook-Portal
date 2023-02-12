import React from 'react'
// import "@fontsource/quantico";
import Insta from "../Homepage/images/insta.png";
import Twitter from "../Homepage/images/twitter.png";
import Linkedin from "../Homepage/images/linkedin.png";
import Facebook from "../Homepage/images/Facebook.png";
import "@fontsource/quantico";
// import Insta from "../Homepage/images/insta.png";
// import Twitter from "../Homepage/images/twitter.png";
// import Linkedin from "../Homepage/images/linkedin.png";
// import Facebook from "../Homepage/images/Facebook.png";
function Homepage() {
    return (
        <div className="overflow-x-hidden w-screen">
            <div className='flex lg:h-screen bg-[#160923] overflow-x-hidden'>
                <div className='flex flex-col lg:flex-row w-full justify-around items-center'>
                    <div className='w-4/5 lg:w-2/5 lg:mt-0 mt-8 border-2 lg:h-3/4 h-4/5 rounded-xl flex flex-col'>
                        <div className='lg:h-1/3 text-white font-bold uppercase text-4xl lg:text-5xl lg:text-left lg:pl-4 mt-8 text-center'>WELCOME TO THE YEARBOOK PORTAL '23 OF IIT INDORE ...</div>
                        <div className='lg:h-1/2 lg:mb-0 mb-2 text-white uppercase text-3xl text-left pl-4 mt-8 lg:mt-2 w-full flex-wrap overscroll-contain'>ALUMNI CELL, IIT INDORE <br></br><br></br><span className='lowercase'>Welcome to the Yearbook Portal – A one-stop hub to curate your Yearbook profile and help others do the same! The Portal is simple to operate. Log in using your institute ID, and upon the first login, you will be asked to complete your information details. Following this, you will have created your profile for the Yearbook! Now for the fun part: Using the Search Bar, you can look up other batchmates who have registered on the Portal and can comment on their page! Likewise, others can comment on your page, and you will have the power to approve those comments. At the end of the year, your profile will be complete and printed in the Yearbook! So, register now and join in on the nostalgic trips of your time at IIT Indore! Regards The Web Development Division The Alumni Cell Indian Institute of Technology, Indore</span></div>
                    </div>
                    <div className='w-full lg:w-1/3 lg:h-3/4 mt-8 lg:mt-0 flex flex-col items-center lg:items-start'>
                        <div className='text-4xl uppercase text-white text-center lg:text-left w-4/5 lg:w-3/4'>Welcome to your new memories page!</div>
                        <div className='bg-[#3E185C] h-96 w-96 rounded-full mt-12 lg:mb-0 mb-12'></div>
                    </div>
                </div>
            </div>
            <div className='flex w-screen lg:h-screen flex-col bg-[#160923]'>
                <div className='flex flex-col lg:flex-row items-center justify-around lg:h-3/5 w-full bg-gradient-to-tr from-purple-800'>
                    <div className='flex w-48 lg:mt-0 mt-8 lg:mb-0 mb-8 h-64 bg-white justify-center items-center rounded-xl'><h1 className='text-black text-center'>Class Of 2020</h1></div>
                    <div className='w-4/5 lg:w-1/3 flex flex-col lg:h-64'>
                        <div className='w-full h-1/2 flex flex-col lg:flex-row justify-start lg:justify-between items-center'>
                            <div className='flex-col w-1/2'>
                                <h1 className='uppercase p-0 text-5xl'>2.75K+</h1>
                                <p className='bg-transparent capitalize text-white'>captions in 2021</p>
                            </div>
                            <div className='flex-col w-1/2'>
                                <h1 className='uppercase p-0 text-5xl'>2.75K+</h1>
                                <p className='bg-transparent capitalize text-white'>captions in 2021</p>
                            </div>
                        </div>
                        <div className='w-full h-1/2 flex flex-col lg:flex-row justify-start lg:justify-between items-center'>
                            <div className='flex-col w-1/2'>
                                <h1 className='uppercase p-0 text-5xl'>2.75K+</h1>
                                <p className='bg-transparent capitalize text-white'>captions in 2021</p>
                            </div>
                            <div className='flex-col w-1/2'>
                                <h1 className='uppercase p-0 text-5xl'>2.75K+</h1>
                                <p className='bg-transparent capitalize text-white'>captions in 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                {/* <div className='w-full mx-8 flex flex-row justify-around items-start'>
                    <div className='flex flex-col w-1/3'>
                        <h1 className='uppercase px-0 py-4'>ALUMNI cell iit indore</h1>
                        <p className='bg-transparent text-white'>...................... ..................... ......................... .................................. ......................................... ...................................... ............................... .........</p>
                    </div>
                    <div className='w-1/3 ml-4'>
                        <h1 className='uppercase px-0 text-4xl py-6'>important links</h1>
                        <p className='bg-transparent text-white uppercase'>alumni portal</p>
                        <p className='bg-transparent text-white uppercase'>iiti official website</p>
                    </div>
                    <div className='w-1/3'>
                        <h1 className='uppercase px-0 text-4xl py-6'>find us on</h1>
                        <div className='flex flex-row justify-start space-x-4'>
                            <img className='w-12' src={Insta}></img>
                            <img className='w-8' src={Twitter}></img>
                            <img className='w-8' src={Linkedin}></img>
                            <img className='w-8' src={Facebook}></img>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Homepage
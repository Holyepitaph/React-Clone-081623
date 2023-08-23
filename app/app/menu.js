'use client'
import Image from 'next/image'
import {motion,useScroll,useMotionValueEvent} from 'framer-motion'
import { useRef } from 'react'
import React from 'react'

export function Menu(){
    const [isClick, toggleClick] = React.useState(false);
    const toggleClickMenu = () => {
      toggleClick(!isClick);
    };
    const subMenuAnimate = {
      enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: 0.5
        },
        display: "flex"
      },
      exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
          duration: 0.5,
          delay: 0.3
        },
        transitionEnd: {
          display: "none"
        }
      }
    };
    return(
        <motion.div 
        className={isClick ? "h-full flex w-full flex-col items-center justify-between text-white shadow-xl fixed top-2 left-0 right-0 bg-[#C9B79C] pt-5 z-10" 
        : "h-20 flex w-full flex-col items-center justify-between text-white shadow-xl fixed top-2 left-0 right-0 bg-[#C9B79C] pt-5 z-10"}>
          <div className="flex gap-28 justify-evenly w-full">
              <div className='mt-1 cursor-pointer lg:text-3xl lg:-mt-1' onClick={toggleClickMenu}>=</div>
              <Image
                  src="/logo.svg"
                  alt="Vercel Logo"
                  className="-mt-2 pb-2 ml-8 h-[4rem] w-[4rem]"
                  width={50}
                  height={50}
                  priority
                  />
              <div className='border mb-4 p-1.5'>EN</div>
          </div>
        <motion.div className="w-full h-[100vh]  flex-col justify-around text-center" id="test"              
               initial="exit"
              animate={isClick ? "enter" : "exit"}
              variants={subMenuAnimate}>
            <div>START</div>
            <div>BEDROOMS</div>
            <div>PACKAGES</div>
            <div>TO DO</div>
            <div>US</div>
            <div>CONTACT US</div>
        </motion.div>
        {/* missing in responsive */}
        {/* <div>669 176 7010</div>
        <div>SPANISH</div> */}
    </motion.div>
    )
}

// has carousel but isn't used

export function Hero(){
    return(
        <div className='z-0 -mt-14'>
              <Image
              src="/hero.jpg"
              alt="Vercel Logo"
              className="top-0 w-full h-[15rem] sm:h-[25.2rem]"
              width={1000}
              height={240}
              priority
            />
                        <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="absolute top-0 left-[47vw] h-[3rem] w-[3rem] z-0"
            width={50}
            height={50}
            priority
            />
            <div className='absolute bg-[#C9B79C] text-[#402B0C]  shadow-xl  absolute top-[12.5rem]
             -right-1 rounded-md h-[3.2rem] w-[4.05rem] flex justify-center items-center'> 
                          <Image
              src="/phone.png"
              alt="Vercel Logo"
              className="w-3/4 h-3/4"
              width={10}
              height={10}
              priority
            /></div>
        </div>
    )
}

export function Booking(){
    return(
        <div className="flex flex-col justify-center  shadow-xl 
         items-center sticky top-[17rem] text-[#402B0C] h-[3.2rem] w-[4.05rem] left-full right-0 text-xs rounded-md bg-[#D3C3AC] z-20">
              <Image
              src="/calender.png"
              alt="Vercel Logo"
              className="h-3/5 w-3/5"
              width={10}
              height={10}
              priority
            />
            <div>BOOKING</div>
        </div>
    )
}

// Create Grid for this
export function Footer(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2 }} className='h-[55rem] flex flex-col justify-evenly items-center bg-[#D9CDBF]'>
                <Image
                src="/logo.svg"
                alt="Vercel Logo"
                className="mt-2 ml-8"
                width={100}
                height={100}
                priority
                />
            <div className='flex flex-row justify-between items-evenly w-4/5 mx-6  h-[18rem]'>
                <div className='flex flex-col justify-between'>
                    <div>ABOUT US</div>
                    <div>Bedrooms</div>
                    <div>Packages</div>
                    <div>Locations</div>
                    <div>Us</div>
                    <div>Contact Us</div>
                </div>
                <div className='flex flex-col gap-[1.75rem]'>
                    <div>FOLLOW US</div>
                    <div>Facebook</div>
                </div>
            </div>
            <div>CONTACT US</div>
            <div>MEX 669 176 7010</div>
            <div>USA 011 52 669 176 7010</div>
            <div>CAN 52 669 176 7010</div>
            <div>dwanahotel@gmail.com</div>
            <div  className='text-xs text-center'>
                <div>ENGLISH</div>
                <div className='border border-black h-0.5 w-screen my-2'></div>
                <div className='flex  gap-4 justify-center'>
                    <div>DWWANA Hotel 2019</div>
                    <div className='border border-black h-4'></div>
                    <div>Notice of Privacy</div>
                </div>
            </div>
        </motion.div>
    )
}
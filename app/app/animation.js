'use client'
import Image from 'next/image'
import { useState } from "react";
import { motion,AnimatePresence } from 'framer-motion'

export function AnimA(){
    return(
        <div className="flex flex-col items-center justify-center ml-8 mr-8 h-[18.58rem]">
            <div className="text-2xl text-center mb-12">RELAX AND ENJOY LIFE IN THE HISTORIC DOWNTOWN AND NUEVO MAZATLAN</div>
            <button className="bg-red-800 text-white rounded w-[8.5rem] py-1">BOOK NOW</button>
        </div>
    )
}

export function AnimB(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "tween", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };
  
    const images = [
      "/a.jpg",
      "/b.jpg",
      "/c.jpg",
      "/d.jpg",
      "/e.jpg",
    ];
    return(
        <div className=' h-[39.5rem]'>
            <div className="carousel">
                <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    &#60;
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    &gt;
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
            </div>
            <div className=' bg-[#ffffff] h-[25rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center'>
                <div className='text-xl pt-11 font-medium'>MAY YOUR BUSINESS BE A PLEASURE</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 "
              width={100}
              height={20}
              priority
            />
                <div className='text-sm px-5'>Relax and enjoy life in Old Mazatian at our Dwana  Hotel. Located in the heart of the Historic Center, a few steps
                from Olas Atlas Beach, our charming Hotel offers you an atmosphere of serenity whether you come for business or pleasure.</div>
                <button className="bg-red-900 text-sm text-white py-1 px-6 rounded mt-[1.9rem]">BOOK NOW</button>
            </div>
        </div>
    )
}

export function AnimC(){
    return(
        <div className='text-xl text-center font-medium mt-[2.25rem]'>
            <div>BEDROOMS</div>
        </div>
    )
}

export function AnimD(){
    return(
        <div className=''>
             <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 mx-auto"
              width={100}
              height={20}
              priority
            />
        </div>
    )
}


// Needs adjustment
export function AnimE(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "tween", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };
  
    const images = [
      "/a.jpg",
      "/b.jpg",
      "/c.jpg",
      "/d.jpg",
      "/e.jpg",
    ];
    return(
        <div className='border border-black h-[39.5rem]'>
            <div className="carousel">
                <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    &#60;
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    &gt;
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
            </div>
        </div>
    )
}


// Fake Carousel????
export function AnimF(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "tween", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };
  
    const images = [
      "/a.jpg",
    ];
    return(
        <div className='h-[35.4rem]'>
            <div className="carousel">
                <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    &#60;
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    &gt;
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
            </div>
            <div className=' bg-[#ffffff] h-[20.8rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center'>
                <div className='text-xl pt-11 font-medium'>Personalized Service</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 "
              width={100}
              height={20}
              priority
            />
                <div className='text-sm px-5'>Let us serve you with kindness and courtesy from your first call. Our collaborators
                 are ready to assist you with your different needs. It is a pleasure to help you.</div>
                <button className="bg-red-900 text-sm text-white py-1 px-6 rounded mt-[1.7rem]">BOOK NOW</button>
            </div>
        </div>
    )
}

export function AnimG(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "tween", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };
  
    const images = [
      "/a.jpg",
    ];
    return(
        <div className='h-[38rem]'>
            <div className="carousel">
                <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    &#60;
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    &gt;
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
            </div>
            <div className=' bg-[#ffffff] h-[23.5rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center'>
                <div className='text-xl pt-11 font-medium'>EXCELLENT LOCATION</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 "
              width={100}
              height={20}
              priority
            />
                <div className='text-[.8rem] px-5'>Dwana Hotel is located in the Historic Center of Mazatian, one block from the beach
                 and Malecon de Olas Atlas. We are privileged to be a gew steps from Plazuela Machado, restaurants and other
                  icons of the city such as the Angela Peralta Theater and the Cathedaral.</div>
                <button className="bg-red-900 text-sm text-white py-1 px-6 rounded mt-[2.6rem]">BOOK NOW</button>
            </div>
        </div>
    )
}

export function AnimH(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "tween", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };
  
    const images = [
      "/a.jpg",
    ];
    return(
        <div className='h-[35rem]'>
            <div className="carousel">
                <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    &#60;
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    &gt;
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
            </div>
            <div className=' bg-[#ffffff] h-[20.5rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center'>
                <div className='text-xl pt-11 font-medium'>BUSSINESS CENTER</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 "
              width={100}
              height={20}
              priority
            />
                <div className='text-[.8rem] px-5'>The right space to organize yourself before a meeting, from having a meeting to wrking on the last
details of your project. Your forgot to pring something you can also do it here.</div>
                <button className="bg-red-900 text-[.8rem] text-white font-bold py-1 px-8 rounded mt-[2rem]">MORE ABOUT US</button>
            </div>
        </div>
    )
}

export function AnimI(){
    return(
        <div className='border border-black flex flex-col justify-center items-center h-[28.35rem] text-sm text-center px-12'>
            <div>EXCELLENT LOCATION IN THE HISTORICAL CENTER</div>
            <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 "
              width={100}
              height={20}
              priority
            />
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>TOURIST ATTRACTION</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>CULTURAL</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>BANK</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>BAR</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>RESTAURANT/CAFE</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 "
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>PHARMACY</div>
            </div>
        </div>
    )
}

// GOOGLE MAP API
export function AnimJ(){
    return(
        <div className=' h-[20.5rem]'>
            <div>GOOGLE MAP API</div>
        </div>
    )
}


// Create an image Grid Gallery
export function AnimK(){
    return(
        <div className='border border-black grid grid-cols-2 gap-2.5 mx-4 my-8 h-[32rem]'>
            <div className='col-span-2  mx-6'>
                <div className='text-sm italic'>“Friends lived in this building as a child, it's great that they revived it, it enhances the area”</div>
                <div className='text-xs pt-6 pb-4 font-bold'>-Jesus Linn. mazatlan</div>
            </div>
            <Image
                src="/a.jpg"
                alt="Vercel Logo"
                className="row-span-2 h-full"
                width={400}
                height={400}
                priority
                />
             <Image
                src="/b.jpg"
                alt="Vercel Logo"
                className=""
                width={400}
                height={400}
                priority
                />
            <Image
                src="/c.jpg"
                alt="Vercel Logo"
                className=""
                width={400}
                height={400}
                priority
                />
            <Image
                src="/d.jpg"
                alt="Vercel Logo"
                className="col-span-2 row-span-1"
                width={400}
                height={200}
                priority
                />
        </div>
    )
}

// Create an image Grid Gallery
export function AnimL(){
    return(
        <div>
            <div>GRID IMAGE 1</div>
            <div>GRID IMAGE 2</div>
            <div>GRID IMAGE 3</div>
            <div>GRID IMAGE 4</div>
        </div>
    )
}

export function Promo(){
    return(
        <div>
            <div>RECEIVE THE BEST PROMOTIONS</div>
            <div>Get in touch with us to send you our promotions befor eveyone else. Ask about our midweek packages.</div>
            <div>
                <div>YOUR E-MAIL</div>
                <div>EMAIL FORM INPUT</div>
                <button>KNOW US</button>
            </div>
        </div>
    )
}
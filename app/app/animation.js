'use client'
import Image from 'next/image'
import { useState,useRef } from "react";
import { motion,AnimatePresence,useScroll } from 'framer-motion'

export function AnimA(){
    return(
        <div className="flex flex-col items-center justify-center ml-8 mr-8 sm:mx-12 h-[18.58rem]">
            <div className="text-2xl sm:text-[2.5rem] text-center mb-12 lg:text-5xl">RELAX AND ENJOY LIFE IN THE HISTORIC LUMINA CAVERNS ON AETHERIUS PLANET</div>
            <button className="bg-red-800 text-white  drop-shadow-2xl  rounded w-[8.5rem] py-1">BOOK NOW</button>
        </div>
    )
}

// Spa Carousel
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
      "/bg.jpg",
      "/bb.jpg",
      "/bc.jpg",
      "/bd.jpg",
      "/be.jpg",
      "/bf.jpg",
      "/ba.jpg",
    ];

    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} 
        viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='lg:flex  shadow-xl  lg:mx-12 lg:h-[35.4rem] lg:mb-12'>
            <div className="carousel ">
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
            <div className=' bg-[#ffffff] h-[21rem] sm:h-[26rem] relative -top-[4rem]  shadow-xl 
            flex flex-col items-center px-2 mx-6 sm:mx-12 text-center lg:top-0 lg:h-full lg:w-1/2 lg:mx-0'>
                <div className='text-xl pt-11 font-medium sm:text-[3rem] lg:text-4xl'>Recover in Elegence</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 h-auto w-auto sm:h-[4rem]"
              width={100}
              height={20}
              priority
            />
                <div className='text-xs sm:text-xl px-5'>Indulge in the rejuvenating benefits of our Crystal Spa, where the 
                soothing properties of crystals enhance your relaxation. Immerse yourself in meditation and yoga 
                sessions at our Aetherius Energy Center. Take a refreshing dip in our pristine, crystal-infused water 
                and underground springs, ensuring a truly revitalizing experience.</div>
                <button className="bg-red-900 text-sm sm:text-lg  shadow-xl  text-white py-1 px-6 rounded mt-[1.9rem]">BOOK NOW</button>
            </div>
        </motion.div>
    )
}

export function AnimC(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='text-xl text-center font-medium mt-[2.25rem] sm:text-[3rem] sm:mb-12'>
            <div>BEDROOMS</div>
        </motion.div>
    )
}

export function AnimD(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className=''>
             <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 mx-auto  h-auto w-auto sm:h-[4rem] sm:mb-6"
              width={100}
              height={20}
              priority
            />
        </motion.div>
    )
}


// Garden Carousel
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
      "/cf.jpg",
      "/cb.jpg",
      "/cd.webp",
      "/ce.jpg",
      "/ca.jpg",
    ];
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[35.4rem]  shadow-xl  -mt-8 mb-6 sm:mb-[29rem] lg:flex lg:mx-12 lg:mb-0'>
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
            <div className=' bg-[#ffffff] h-[20.8rem] relative -top-[4rem] lg:top-0  shadow-xl 
             lg:h-full lg:w-1/2 lg:mx-0 flex flex-col items-center px-2 mx-6 text-center sm:mx-12 sm:h-[25rem]'>
                <div className='text-xl sm:text-[3rem] pt-11 font-medium lg:text-4xl'>Enjoy Nature's Wonders</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2  h-auto w-auto sm:h-[4rem]"
              width={100}
              height={20}
              priority
            />
                <div className='text-xs sm:text-xl px-5'>Gaze upon the stars from our Stargazing Deck, or 
                for an even more mesmerizing perspective, peer through our cutting-edge telescopes 
                in the Celestial Observatory. Alternatively, immerse yourself in the captivating beauty
                 of our Hidden Enchanted Garden, where exotic luminescent plants create a magical ambiance.</div>
                <button className="bg-red-900 text-sm  shadow-xl  sm:text-lg text-white py-1 px-6 rounded mt-[1.7rem]">BOOK NOW</button>
            </div>
        </motion.div>
    )
}

// potion Carousel
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
      "/ab.jpg",
      "/aa.jpg",
      "/ac.jpg",
      "/ad.jpg",
    ];
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[38rem]  shadow-xl 
         -mb-4 sm:mb-[25rem] lg:h-[35.4rem] lg:mx-12 lg:mt-6 lg:mb-0 lg:flex'>
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
            <div className=' bg-[#ffffff] h-[23.5rem] relative -top-[4rem] flex  shadow-xl 
            flex-col items-center lg:top-0 lg:h-full lg:w-1/2 lg:mx-0 px-2 mx-6 sm:mx-12 text-center'>
                <div className='text-xl pt-11 font-medium sm:text-[3rem] lg:text-4xl'>Sophistication at its finest</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2  h-auto w-auto sm:h-[4rem]"
              width={100}
              height={20}
              priority
            />
                <div className='text-[.8rem] px-5 sm:text-xl'>Explore our collection of rare magical crystal exhibits 
                and immerse yourself in the art of potion-making at our dedicated Brewing Station. Alternatively,
                 delve into your tasks at our sophisticated Workstation zones, designed to cater to your professional needs.</div>
                <button className="bg-red-900 text-sm  shadow-xl  sm:text-lg text-white py-1 px-6 rounded mt-[2.6rem]">BOOK NOW</button>
            </div>
        </motion.div>
    )
}

// suite carousel
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
      "/db.jpg",
      "/da.webp",
      "/dc.jpg",
      "/dd.jpg",
      "/de.jpg",
      "/df.webp",
    ];
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[35rem] mt-6  shadow-xl 
          -mb-[4.5rem] sm:mb-[33rem] lg:flex lg:h-[35.4rem] lg:mb-4 lg:mx-12'>
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
            <div className=' bg-[#ffffff] h-[20.5rem] relative -top-[4rem] flex flex-col lg:top-0 lg:h-full lg:w-1/2 lg:mx-0 items-center px-2 mx-6 text-center sm:mx-12 sm:h-[27rem] '>
                <div className='text-xl sm:text-[3rem] pt-11 font-medium lg:text-4xl'>Beautiful Suites</div>
                <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2  h-auto w-auto sm:h-[4rem]"
              width={100}
              height={20}
              priority
            />
                <div className='text-[.6rem] sm:text-xl px-5'>Indulge in the delectable local cuisine prepared by our 
                esteemed head chef, Finn, at our naturally illuminated Restaurant. Revel in the comfort of our
                 luxurious suites, thoughtfully carved into the cavern walls for an unforgettable experience.
                  Alternatively, embark on a guided tour through the enchanting Lumina Caverns, where you can
                   immerse yourself in the captivating stories of our planet's rich history.</div>
                <button className="bg-red-900 text-[.8rem] sm:text-lg  shadow-xl  text-white font-bold py-1 px-8 rounded mt-[2rem]">MORE ABOUT US</button>
            </div>
        </motion.div>
    )
}

// List
export function AnimI(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} 
        viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} 
        className=' flex flex-col justify-center ml-4 h-[28.35rem] text-sm lg:w-1/2 lg:bg-white shadow-xl  lg:h-full
         sm:text-[2rem] sm:ml-12 sm:mb-12 sm:h-[34rem] lg:text-lg sm:gap-8 text-center px-12 -mb-16 lg:gap-0.5 lg:justify-start lg:pt-6'>
            <div className='sm:text-[2.5rem] lg:text-xl'>PLENTY FOR EVERYONE</div>
            <Image
              src="/icon.png"
              alt="Vercel Logo"
              className="mt-2 mx-auto  h-auto w-auto sm:h-[4rem]"
              width={100}
              height={20}
              priority
            />
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>ENCHANTED GARDEN</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>ARTIFACT EXCHANGE</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>NAVIGATIONAL ASSISTANCE</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>LARGE BAR</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>MERCANTILE</div>
            </div>
            <div className='flex'>
                <Image
                src="/icona.png"
                alt="Vercel Logo"
                className="mt-2 ml-8  h-auto w-auto"
                width={25}
                height={20}
                priority
                />
                <div className='pt-2.5'>LUMINA LOUNGE</div>
            </div>
        </motion.div>
    )
}

// MAP
export function AnimJ(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='sm:h-[36rem] h-[20.5rem] lg:h-96 lg:mr-12 lg:mb-0 lg:w-1/2 lg:bg-white 
        lg:h-[26rem] lg:flex  shadow-xl  lg:items-center'>
                <Image
                src="/map.jpg"
                alt="Vercel Logo"
                className="mt-2 lg:m-auto  h-[70%] w-[70%]"
                width={1000}
                height={1000}
                priority
                />
        </motion.div>
    )
}


// Create an image Grid Gallery
export function AnimK(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} 
         className='grid grid-cols-2  grid-rows-4 gap-2.5 mx-4 mt-8 
         mb-3 h-[32rem] sm:mx-12 sm:h-fit lg:mt-0 lg:h-[50rem] lg:grid-rows-3 lg:mt-0 lg:w-1/2 lg:mr-0'>
            <div className=' col-span-2  mx-6  sm:px-12 sm:flex sm:flex-col sm:justify-center lg:col-span-1'>
                <div className='text-xs sm:text-2xl lg:text-sm italic'>“I had an incredible experience at the Crystal Haven Inn.
                 The staff was wonderful, the sky was breathtaking and the Spa was a true oasis of relaxation. 
                 I hope to be able to return sometime during my travels.”</div>
                <div className='text-xs pt-6 pb-4 font-bold sm:text-3xl lg:text-xs'>-Enigma Travler</div>
            </div>
            <Image
                src="/ga.jpg"
                alt="Vercel Logo"
                className="row-span-2 h-full md:w-full"
                width={400}
                height={400}
                priority
                />
             <Image
                src="/gb.webp"
                alt="Vercel Logo"
                className="h-full md:w-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gc.jpg"
                alt="Vercel Logo"
                className="h-full md:w-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gd.webp"
                alt="Vercel Logo"
                className=" h-full w-full"
                width={400}
                height={400}
                priority
                />
        </motion.div>
    )
}

// Create an image Grid Gallery
export function AnimL(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='sm:mx-12 sm:h-[100rem] grid grid-cols-2 grid-rows-4 
         gap-2 mx-4 h-[40rem] lg:h-[50rem] lg:w-1/2 lg:ml-0 '>
            <Image
                src="/gf.jpg"
                alt="Vercel Logo"
                className="col-span-2 row-span-2 h-full w-full"
                width={400}
                height={400}
                priority
                />
             <Image
                src="/gg.jpg"
                alt="Vercel Logo"
                className=" col-span-2 h-full w-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gh.webp"
                alt="Vercel Logo"
                className="h-full md:w-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gi.jpg"
                alt="Vercel Logo"
                className=" h-full w-full "
                width={400}
                height={400}
                priority
                />
        </motion.div>
    )
}

export function Promo(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='bg-black text-white mt-2 h-[27.8rem] px-8 text-center flex flex-col justify-center'>
            <div className='text-xl'>RECEIVE THE BEST PROMOTIONS</div>
            <div className='text-xs my-10'>Get in touch with us to send you our promotions before eveyone else. Ask about our midweek packages.</div>
            <form className='flex justify-center flex-col text-center'>
                <div>YOUR E-MAIL</div>
                <input type="email" placeholder='  mail@email.com' className='py-1 mb-12'></input>
                <button className='text-xs p-2 font-bold border border-2 border-white w-[9.6rem] rounded mx-auto'>KNOW US</button>
            </form>
        </motion.div>
    )
}
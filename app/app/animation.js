'use client'
import Image from 'next/image'
import { useState,useRef } from "react";
import { motion,AnimatePresence,useScroll } from 'framer-motion'

export function AnimA(){
    return(
        <div className="flex flex-col items-center justify-center ml-8 mr-8 sm:mx-12 h-[18.58rem]">
            <div className="text-2xl sm:text-[2.5rem] text-center mb-12">RELAX AND ENJOY LIFE IN THE HISTORIC LUMINA CAVERNS ON AETHERIUS PLANET</div>
            <button className="bg-red-800 text-white rounded w-[8.5rem] py-1">BOOK NOW</button>
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
        viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className=''>
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
            <div className=' bg-[#ffffff] h-[25rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 sm:mx-12 text-center'>
                <div className='text-xl pt-11 font-medium sm:text-[3rem]'>Recover in Elegence</div>
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
                <button className="bg-red-900 text-sm sm:text-lg text-white py-1 px-6 rounded mt-[1.9rem]">BOOK NOW</button>
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
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[35.4rem] sm:mb-[30rem] '>
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
            <div className=' bg-[#ffffff] h-[20.8rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center sm:mx-12 sm:h-[25rem]'>
                <div className='text-xl sm:text-[3rem] pt-11 font-medium'>Enjoy Nature's Wonders</div>
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
                <button className="bg-red-900 text-sm sm:text-lg text-white py-1 px-6 rounded mt-[1.7rem]">BOOK NOW</button>
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
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[38rem] sm:mb-[25rem]'>
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
            <div className=' bg-[#ffffff] h-[23.5rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 sm:mx-12 text-center'>
                <div className='text-xl pt-11 font-medium sm:text-[3rem]'>Sophistication at its finest</div>
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
                <button className="bg-red-900 text-sm sm:text-lg text-white py-1 px-6 rounded mt-[2.6rem]">BOOK NOW</button>
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
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='h-[35rem] sm:mb-[33rem]'>
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
            <div className=' bg-[#ffffff] h-[20.5rem] relative -top-[4rem] flex flex-col items-center px-2 mx-6 text-center sm:mx-12 sm:h-[27rem] '>
                <div className='text-xl sm:text-[3rem] pt-11 font-medium'>Beautiful Suites</div>
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
                <button className="bg-red-900 text-[.8rem] sm:text-lg text-white font-bold py-1 px-8 rounded mt-[2rem]">MORE ABOUT US</button>
            </div>
        </motion.div>
    )
}

// List
export function AnimI(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} 
        viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} 
        className=' flex flex-col justify-center ml-4 h-[28.35rem] text-sm
         sm:text-[2.5rem] sm:h-[34rem] sm:gap-8 text-center px-12'>
            <div>PLENTY FOR EVERYONE</div>
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

// GOOGLE MAP API
export function AnimJ(){
 const keys= '${process.env.REACT_APP_API_KEY}'
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='border border-black h-[20.5rem]'>
                {/* <script async src="https://maps.googleapis.com/maps/api/js?key={keys}&callback=console.debug&libraries=maps,marker&v=beta">
    </script>
                <gmp-map center="36.22531509399414,-115.26019287109375" zoom="14" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="36.22531509399414,-115.26019287109375" title="My location">
      </gmp-advanced-marker>
    </gmp-map> */}
        </motion.div>
    )
}


// Create an image Grid Gallery
export function AnimK(){
    return(
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}}
         viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} 
         className='grid grid-cols-2 grid-rows-4 gap-2.5 mx-4 mt-8 mb-3 h-[32rem] sm:h-[80rem]'>
            <div className='border border-black col-span-2  mx-6 sm:h-[30rem]'>
                <div className='text-xs sm:text-[2rem]  italic'>“I had an incredible experience at the Crystal Haven Inn.
                 The staff was wonderful, the sky was breathtaking and the Spa was a true oasis of relaxation. 
                 I hope to be able to return sometime during my travels.”</div>
                <div className='text-xs pt-6 pb-4 font-bold'>-Enigma Travler</div>
            </div>
            <Image
                src="/ga.jpg"
                alt="Vercel Logo"
                className="row-span-2 h-full"
                width={400}
                height={400}
                priority
                />
             <Image
                src="/gb.webp"
                alt="Vercel Logo"
                className="h-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gc.jpg"
                alt="Vercel Logo"
                className="h-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gd.webp"
                alt="Vercel Logo"
                className="col-span-2 row-span-1 h-full w-full"
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
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ amount: 0.2, margin: "500px 0px 0px 0px" }} className='grid grid-cols-2 grid-rows-4 gap-2 mx-4 h-[40rem]'>
            <Image
                src="/gf.jpg"
                alt="Vercel Logo"
                className="col-span-2 row-span-2 h-full"
                width={400}
                height={400}
                priority
                />
             <Image
                src="/gg.jpg"
                alt="Vercel Logo"
                className=" col-span-2 h-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gh.webp"
                alt="Vercel Logo"
                className="h-full"
                width={400}
                height={400}
                priority
                />
            <Image
                src="/gi.jpg"
                alt="Vercel Logo"
                className=" h-full w-full"
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
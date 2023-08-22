'use client'
import { Menu, Booking,Footer,Hero } from './menu'
import { AnimA,AnimB,AnimC,AnimD,AnimF,AnimG,AnimH,AnimI,AnimJ,AnimK,AnimL,Promo } from './animation'
import { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0px", "100px"]
  })
  return (
    <main ref={ref}>
      <motion.div initial={{opacity:0}} style={{opacity:scrollYProgress}} className='z-40'>
        <Menu />
      </motion.div>
      <Booking/>
      <Hero/>
      <AnimA/>
      <AnimB/>
      <AnimF/>
      <AnimG/>
      <AnimC/>
      <AnimD/>
      <AnimH/>
      <AnimI/>
      <AnimJ/>
      <AnimK/>
      <AnimL/>
      <Promo/>
      <Footer/>
      <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta">
    </script>
    </main>
  )
}

'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function AnimA(){
    return(
        <div className="flex flex-col items-center justify-center ml-8 mr-8 h-[18.58rem]">
            <div className="text-2xl text-center mb-12">RELAX AND ENJOY LIFE IN THE HISTORIC DOWNTOWN AND NUEVO MAZATLAN</div>
            <button className="bg-red-800 text-white rounded w-[8.5rem] py-1">BOOK NOW</button>
        </div>
    )
}

export function AnimB(){
    return(
        <div>
            <motion.div className='flex'>
                <Image
                  src="/b.jpg"
                  alt="Vercel Logo"
                  className="w-full h-[24.8rem]"
                  width={100}
                  height={24}
                  priority
                />
                 <Image
                  src="/c.jpg"
                  alt="Vercel Logo"
                  className=" w-full h-[24.8rem]"
                  width={100}
                  height={24}
                  priority
                />
                  <Image
                  src="/d.jpg"
                  alt="Vercel Logo"
                  className="w-full h-[24.8rem]"
                  width={100}
                  height={24}
                  priority
                />
                 <Image
                  src="/e.jpg"
                  alt="Vercel Logo"
                  className="w-full h-[24.8rem]"
                  width={100}
                  height={24}
                  priority
                />
                 <Image
                  src="/f.jpg"
                  alt="Vercel Logo"
                  className=" w-full h-[24.8rem]"
                  width={100}
                  height={24}
                  priority
                />
            </motion.div>
            <div>
                <div>MAY YOUR BUSINESS BE A PLEASURE</div>
                <div>Relax and enjoy life in Old Mazatian at our Dwana  Hotel. Located in the heart of the Historic Center, a few steps
                from Olas Atlas Beach, our charming Hotel offers you an atmosphere of serenity whether you come for business or pleasure.</div>
                <button className="bg-red-800 text-white">BOOK NOW</button>
            </div>
        </div>
    )
}

export function AnimC(){
    return(
        <div>
            <div>BEDROOMS</div>
        </div>
    )
}

export function AnimD(){
    return(
        <div>
            <div>Symbol</div>
        </div>
    )
}


// Special Annoying Carousel with links on images that do stuff
export function AnimE(){
    return(
        <div>
            <div className="AnimEContainerA">
                <div>Image A</div>
                <div>
                    <div>Top Text</div>
                    <div>Bottom Text</div>
                </div>
            </div>
            <div className="AnimEContainerB">
                <div>Image B</div>
                <div>
                    <div>Top Text</div>
                    <div>Bottom Text</div>
                </div>
            </div>
            <div className="AnimEContainerC">
                <div>Image C</div>
                <div>
                    <div>Top Text</div>
                    <div>Bottom Text</div>
                </div>
            </div>
            <div className="AnimEContainerD">
                <div>Image D</div>
                <div>
                    <div>Top Text</div>
                    <div>Bottom Text</div>
                </div>
            </div>
            <div className="AnimEContainerE">
                <div>Image E</div>
                <div>
                    <div>Top Text</div>
                    <div>Bottom Text</div>
                </div>
            </div>
            <div>IDK I assume buttons are needed to be linked</div>
        </div>
    )
}


// Fake Carousel????
export function AnimF(){
    return(
        <div>
            <div>Image</div>
            <div>
                <div>Top Text</div>
                <div>Symbol</div>
                <div>Bottom Text</div>
            </div>
        </div>
    )
}

// Carousel but only pictures this time
export function AnimG(){
    return(
        <div>
            <div>
                <div>Image One</div>
                <div>Image Two</div>
            </div>
            <div>EXCELLENT LOCATION</div>
            <div>Symbol</div>
            <div>Dwana Hotel is located in the Historic Center of Mazatian, one block from the beach and Malecon de Olas Atlas. We
            are privileged to be a gew steps from Plazuela Machado, restaurants and other icons of the city such as the Angela 
            Peralta Theater and the Cathedaral.</div>
            <button>SEE LOCATION</button>
        </div>
    )
}


// Two Image Carousel again
export function AnimH(){
    return(
        <div>
            <div>
                <div>Image One</div>
                <div>Image Two</div>
            </div>
            <div>BUSSINESS CENTER</div>
            <div>SYMBOL</div>
            <div>The right space to organize yourself before a meeting, from having a meeting to wrking on the last
            details of your project. Your forgot to pring something you can also do it here.</div>
            <button>MORE ABOUT US</button>
        </div>
    )
}

export function AnimI(){
    return(
        <div>
            <div>EXCELLENT LOCATION IN THE HISTORICAL CENTER</div>
            <div>SYMBOL</div>
            <div>
                <div>SYMBOL</div>
                <div>TOURIST ATTRACTION</div>
            </div>
            <div>
                <div>SYMBOL</div>
                <div>CULTURAL</div>
            </div>
            <div>
                <div>SYMBOL</div>
                <div>BANK</div>
            </div>
            <div>
                <div>SYMBOL</div>
                <div>BAR</div>
            </div>
            <div>
                <div>SYMBOL</div>
                <div>RESTAURANT/CAFE</div>
            </div>
            <div>
                <div>SYMBOL</div>
                <div>PHARMACY</div>
            </div>
        </div>
    )
}

// GOOGLE MAP API
export function AnimJ(){
    return(
        <div>
            <div>GOOGLE MAP API</div>
        </div>
    )
}


// Create an image Grid Gallery
export function AnimK(){
    return(
        <div>
            <div>GRID IMAGE 1</div>
            <div>GRID IMAGE 2</div>
            <div>GRID IMAGE 3</div>
            <div>GRID IMAGE 4</div>
            <div>GRID IMAGE 5</div>
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
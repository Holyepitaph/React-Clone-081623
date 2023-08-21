import Image from 'next/image'

export function Menu(){
    return(
        <div className="flex w-full flex-col items-center justify-between absolute text-white sticky top-6 bg-[#C9B79C] h-20 pt-5 z-10">
            <div className="flex gap-28 justify-evenly w-full">
                <div>X</div>
                <div>Image</div>
                <div className='border p-1.5'>EN</div>
            </div>
            <div className='hidden'>
                <div>START</div>
                <div>BEDROOMS</div>
                <div>PACKAGES</div>
                <div>TO DO</div>
                <div>US</div>
                <div>CONTACT US</div>
            </div>
            {/* missing in responsive */}
            {/* <div>669 176 7010</div>
            <div>SPANISH</div> */}
        </div>
    )
}

// has carousel but isn't used

export function Hero(){
    return(
        <div className='z-0 mt-0'>
              <Image
              src="/a.jpg"
              alt="Vercel Logo"
              className="top-0 w-full h-[24.8rem]"
              width={100}
              height={24}
              priority
            />
            <div className='absolute bg-[#C9B79C] text-[#402B0C] absolute top-[12.5rem] -right-1 rounded-md h-[3.2rem] w-[4.05rem]'>Phone</div>
        </div>
    )
}

export function Booking(){
    return(
        <div className="flex flex-col sticky top-[17rem] text-[#402B0C] h-[3.2rem] w-[4.05rem] ml-[19.6rem] rounded-md bg-[#D3C3AC] z-20">
            <div>D</div>
            <div>BOOKING</div>
        </div>
    )
}

// Create Grid for this
export function Footer(){
    return(
        <div>
            <div>LOGO</div>
            <div>
                <div>ABOUT US</div>
                <div>Bedrooms</div>
                <div>Packages</div>
                <div>Locations</div>
                <div>Us</div>
                <div>Contact Us</div>
                <div>FOLLOW US</div>
                <div>Facebook</div>
            </div>
            <div>CONTACT US</div>
            <div>MEX 669 176 7010</div>
            <div>USA 011 52 669 176 7010</div>
            <div>CAN 52 669 176 7010</div>
            <div>dwanahotel@gmail.com</div>
            <div>
                <div>ENGLISH</div>
                <div>LINE BREAK THINGY MA BOB</div>
                <div>
                    <div>DWWANA Hotel 2019</div>
                    <div>Vertical Line Break</div>
                    <div>Notice of Privacy</div>
                </div>
            </div>
        </div>
    )
}
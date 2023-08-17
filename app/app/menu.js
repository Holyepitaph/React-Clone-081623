import Image from 'next/image'

export function Menu(){
    return(
        <div className="flex w-full flex-col items-center justify-between">
            <div className="flex gap-4 justify-between w-full">
                <div>X</div>
                <div>Image</div>
                <div>EN</div>
            </div>
            <div>START</div>
            <div>BEDROOMS</div>
            <div>PACKAGES</div>
            <div>TO DO</div>
            <div>US</div>
            <div>CONTACT US</div>
            {/* missing in responsive */}
            {/* <div>669 176 7010</div>
            <div>SPANISH</div> */}
        </div>
    )
}

// has carousel but isn't used

export function Hero(){
    return(
        <div>
              <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="absolute top-0 w-full h-96"
              width={100}
              height={24}
              priority
            />
            <div className='absolute'>Phone</div>
        </div>
    )
}

export function Booking(){
    return(
        <div className="flex flex-col sticky top-44">
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
import React from "react";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent text-white flex justify-center">
            <div className="container p-12 flex justify-between">
                <Image 
                    src='/images/water_logo.png'
                    alt='water logo'
                    width={50}
                    height={50}
                />
                <p className="text-slate-600 ">All rights resevered.</p>
            </div>
        </footer>
    )
}

export default Footer
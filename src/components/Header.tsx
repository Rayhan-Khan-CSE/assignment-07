import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo-icon.png"

const Header = () => {
    return (
        <nav className='bg-[#F3FBF4]'>
        <div className='max-w-300 mx-auto px-4 w-full flex justify-between py-5'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#05893E] p-2 rounded-xl'>
                    <Image src={logo} height={30} width={30} alt='Image'></Image>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-[#1D271F]'>বাজার দর</h2>
                    <p>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <button className='p-3 font-bold text-[#1D271F]'>সাইন ইন</button>
                <button className='bg-[#05893E] text-[#F3FBF4] rounded-lg p-3 font-bold'>সাইন আপ</button>
            </div>
        </div>
        </nav>
    );
};

export default Header;
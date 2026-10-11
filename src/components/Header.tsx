import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo-icon.png"
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = () => {
    return (
        <nav className='bg-[#F3FBF4]'>
        <div className='max-w-300 mx-auto px-4 w-full flex justify-between py-5'>
            <Link href={"/"}>
            <div className='flex items-center gap-3'>
                <div className='bg-[#05893E] p-2 rounded-xl'>
                    <Image src={logo} height={30} width={30} alt='Image'></Image>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-[#1D271F]'>বাজার দর</h2>
                    <p>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
                </div>
            </div>
            </Link>
            <UserInfo/>
        </div>
        <div className='border border-[#F0F5F0]'>
        <NavLinks/>
        </div>
        </nav>
    );
};

export default Header;
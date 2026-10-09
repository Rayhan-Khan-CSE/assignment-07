import Image from 'next/image';
import React from 'react';
import logo from "@/assets/bazar-hero.png"

const Banner = () => {
    return (
        <div className='max-w-300 mx-auto bg-[#FAFCFA] my-5 rounded-2xl'>
            <div className='flex justify-between items-center px-4'>
                <div>
                    <div className='bg-[#E1E8E1] w-46 rounded-full'><p className='text-[#05893E] p-2'>মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p></div>
                    <h2 className='text-[#1D271F] font-extrabold text-3xl py-3'>আজকের বাজারের দাম এক নজরে</h2>
                    <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br/>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <button className='btn mt-4 p-3 bg-[#05893E] text-[#F3FBF4] rounded-2xl'>সব পণ্য দেখুন</button>
                </div>
                <div>
                    <Image src={logo} height={250} width={300} alt='Image'></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;
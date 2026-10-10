import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import IBajarDor from '@/types/type';
import Link from 'next/link';
const Marquee = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div className='bg-[#FAFCFA] py-3'>
             <MarqueeText direction='right' duration={12}>
            {
                data.map((h:IBajarDor) => 
                <Link key={h.id} href={`/details/${h.id}`} className='block'>
                    <span>
                       {h.categoryIcon} {h.nameBn} {h.today} {h.unit} {h.change.dir} {h.change.pct} <span> %</span>
                        <span className='mx-5'></span>
                    </span>
                </Link>
                )
            }
             </MarqueeText>
        </div>
    );
};

export default Marquee;
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import IBajarDor from '@/types/type';
const Marquee = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await res.json();
    console.log(data);
    return (
        <div className='bg-[#FAFCFA] py-3'>
             <MarqueeText direction='right' duration={12}>
            {
                data.map((h:IBajarDor) => <span key={h.id}>
                    <span>
                       {h.categoryIcon} {h.nameBn} {h.today} {h.unit} {h.change.dir} {h.change.pct} <span> %</span>
                        <span className='mx-5'></span>
                    </span>
                </span>
                )
            }
             </MarqueeText>
        </div>
    );
};

export default Marquee;
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import IBajarDor from '@/types/type';
import Link from 'next/link';
const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();
    return (
        <div className='bg-[#FAFCFA] py-3'>
            <MarqueeText direction='right' duration={12}>
                {
                    data.map((h: IBajarDor) =>
                        <Link key={h.id} href={`/details/${h.id}`} className='block items-center'>
                            <span>
                                {h.categoryIcon} {h.nameBn} 
                                {Number(h.today).toLocaleString("bn-BD")} টাকা/{h.unit === "kg" ? "কেজি" : h.unit === "litre" ? "লিটার" : h.unit === "piece" ? "টি" : h.unit === "dozen" ? "ডজন" : h.unit}{" "}
                                <span className={
                                    h.change.dir === "flat"
                                        ? "text-gray-700"
                                        : h.change.dir === "up"
                                            ? "text-red-500"
                                            : "text-green-600"
                                }>
                                    {h.change.dir === "flat"
                                        ? "—"
                                        : h.change.dir === "up"
                                            ? "▲"
                                            : "▼"
                                    }{" "}
                                    {Math.abs(Number(h.change.pct)).toLocaleString("bn-BD")}%
                                </span>
                                <span className="mx-5"></span>
                            </span>
                        </Link>
                    )
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;
import React from 'react';
import { AllProductsProps } from './AllProducts';
import Image from 'next/image';
import logo from "@/assets/up.png"

const PriceDecrease = ({ data }: AllProductsProps) => {
    const decrease = [...data].sort((a, b) => Number(a.change.pct) - Number(b.change.pct)).slice(0, 6);
    return (
        <div className='max-w-300 mx-auto px-4 mt-5'>
            <div className='flex items-center gap-3'>
                <Image src={logo} height={20} width={20} alt='logo'></Image>
                <p className='font-extrabold text-3xl'>আজ দাম কমেছে</p>
            </div>
            <div className='grid grid-cols-3 gap-3 rounded-2xl mt-4'>
                {
                    decrease.map((m) =>
                        <div key={m.id} className=''>
                            <div className="card card-border bg-base-200 ">
                                <div className="card-body">
                                    <div className='flex justify-left items-center gap-4'>
                                        <div className='w-10 h-10 rounded-lg bg-base-300 flex items-center justify-center text-3xl'>{m.image}</div>
                                        <div>
                                            <h2 className="card-title font-extrabold">{m.nameBn}</h2>
                                            <p>{m.unit}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-bold'>আজকের দাম</p>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <p className='font-extrabold text-2xl'>{m.today}</p>
                                                <p>টাকা</p>
                                            </div>
                                            <div className='flex items-center gap-2 bg-[#EEF5EF]'>
                                            <p className="text-green-500"> {m.change.dir} </p>
                                            <p>{m.change.pct} %</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
            )
                }
        </div>
        </div >
    );
};

export default PriceDecrease;
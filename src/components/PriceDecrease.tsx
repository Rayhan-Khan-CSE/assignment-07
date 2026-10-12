import React from 'react';
import { AllProductsProps } from './AllProducts';
import Image from 'next/image';
import logo from "@/assets/up.png"
import Link from 'next/link';

const PriceDecrease = ({ data }: AllProductsProps) => {
    const decrease = [...data].sort((a, b) => Number(a.change.pct) - Number(b.change.pct)).slice(0, 6);
    return (
        <div className='max-w-300 mx-auto px-4 mt-5'>
            <div className='flex items-center gap-3'>
                <Image src={logo} height={20} width={20} alt='logo'></Image>
                <p className='font-extrabold text-3xl'>আজ দাম কমেছে</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-2xl mt-4'>
                {
                    decrease.map((m) =>
                        <Link key={m.id} href={`/details/${m.id}`} className='block'>
                            <div className="card card-border bg-base-200 ">
                                <div className="card-body">
                                    <div className='flex justify-left items-center gap-4'>
                                        <div className='w-10 h-10 rounded-lg bg-base-300 flex items-center justify-center text-3xl'>{m.image}</div>
                                        <div>
                                            <h2 className="card-title font-extrabold">{m.nameBn}</h2>
                                            <p>প্রতি/{m.unit === "kg" ? "কেজি" : m.unit === "litre" ? "লিটার" : m.unit === "piece" ? "পিস" : m.unit === "dozen" ? "ডজন" : m.unit}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-bold'>আজকের দাম</p>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <p className='font-extrabold text-2xl'>{Number(m.today).toLocaleString("bn-BD")}</p>
                                                <p>টাকা</p>
                                            </div>
                                            <div className='flex items-center bg-base-300 gap-2 p-2 rounded-full'>
                                                <span className={
                                                    m.change.dir === "flat"
                                                        ? "text-gray-700"
                                                        : m.change.dir === "up"
                                                            ? "text-red-500"
                                                            : "text-green-600"
                                                }>
                                                    {m.change.dir === "flat"
                                                        ? "—"
                                                        : m.change.dir === "up"
                                                            ? "▲"
                                                            : "▼"
                                                    }{" "}
                                                    {Math.abs(Number(m.change.pct)).toLocaleString("bn-BD")}%
                                                </span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
            )
                }
        </div>
        </div >
    );
};

export default PriceDecrease;
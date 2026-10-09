import React from 'react';
import IBajarDor from '@/types/type';
interface AllProductsProps{
    data:IBajarDor[];
}

const AllProducts = ({ data }:AllProductsProps) => {
    return (
        <div className='max-w-300 mx-auto px-4'>
            <p className='font-extrabold text-3xl'>সব পণ্য</p>
            <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid grid-cols-3 gap-3 rounded-2xl mt-4'>
                {
                    data.map((m) =>
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
                                        <div className='flex items-center gap-2'>
                                            <p>{m.change.dir}</p>
                                            <p>{m.change.pct}</p>
                                            <p>%</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;
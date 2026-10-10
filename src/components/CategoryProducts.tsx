"use client";
import Link from 'next/link';
import { useState } from 'react';
import IBajarDor from '@/types/type';

interface CategoryProductsProps {
    data: IBajarDor[];
}

interface ICategory {
    id:number;
    categoryNameBn: string;
    image: string;
    nameBn: string;
    unit: string;
    today: number;
    change:{
        dir: string;
        pct: number;
    }
}

const CategoryProducts = ({data}:CategoryProductsProps) => {
    const [sort, setSort] = useState("default");
    const sortProducts = [...data].sort((a,b) => {
        if(sort === "high-to-low"){
            return b.today - a.today;
        }
        if(sort === "low-to-high"){
            return a.today - b.today;
        }
        return 0;
    });
    return (
        <div>
            <div className="bg-base-200 my-5 rounded-2xl p-4 items-center">{
                sortProducts.slice(0,1).map((t:ICategory) =>
                    <div key={t.id} className="flex items-center gap-3">
                        <div className='w-10 h-10 rounded-lg bg-base-300 flex items-center justify-center text-3xl'>{t.image}</div>
                        <div>
                        <p className="text-3xl font-extrabold">{t.categoryNameBn}</p>
                        <p>{sortProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                        </div>
                    </div>
                )
                }   
            </div>
            <div className=" flex gap-3 justify-end bg-base-200 my-5 rounded-2xl p-4 items-center">
                <p>সাজান</p>
                <div className="bg-base-300 p-3 rounded-xl">
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className='outline-none bg-transparent'>
                        <option value="default">ডিফল্ট</option>
                        <option value="low-to-high">দাম: কম থেকে বেশি</option>
                        <option value="high-to-low">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <p>মোট {sortProducts.length}টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid grid-cols-3 gap-3 rounded-2xl mt-4'>
                {
                    sortProducts.map((m:ICategory) =>
                        <Link key={m.id} href={`/details/${m.id}`} className='block'>
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
                        </Link>
            )
                }
        </div>
        </div>
    );
};

export default CategoryProducts;

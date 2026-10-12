
import React from 'react';
import CategoryLink from './CategoryLink';
interface ILink {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();
    return (
        <div className='w-full max-w-300 mx-auto px-3 py-2'>
            <div className='flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3'>
            {
                data.map((n:ILink,i:number) => 
                <CategoryLink key={i} n={n}/>
            )
            }
            </div>
        </div>
    );
};

export default NavLinks;

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
        <div className='max-w-300 mx-auto w-full min-w-150 sm:text-base px-6 flex justify-left gap-6 p-4 '>
            {
                data.map((n:ILink,i:number) => 
                <CategoryLink key={i} n={n}/>
            )
            }
        </div>
    );
};

export default NavLinks;
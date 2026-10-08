import Link from 'next/link';
import React from 'react';
interface ILink {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data = await res.json();
    console.log(data);
    return (
        <div className='max-w-300 mx-auto px-6 flex justify-left gap-6 p-4  '>
            {
                data.map((n:ILink,i:number) => <Link key={i} href={n.slug}> {n.icon} {n.nameBn} </Link>)
            }
        </div>
    );
};

export default NavLinks;
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryLink = ({n}:{n:{slug: string, nameBn: string, icon: string}}) => {
    const pathName = usePathname();
    return (
            <Link 
            href={`/category/${n.slug}`} 
            className={pathName === `/category/${n.slug}` ? "bg-green-700 text-white p-2 rounded" : "hover:bg-green-400 p-2 rounded"}>
            {n.icon} {n.nameBn}
            </Link>
    );
};

export default CategoryLink;
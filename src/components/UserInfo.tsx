"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md';

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false); 
    const handleSignOut = async () => {
         await authClient.signOut(); setOpen(false); 
        };

    return (
        <div className='flex gap-3'>
            {
                user ?
                    <div>
                        <button onClick={() => setOpen(!open)} className="flex items-center gap-2" >
                            {/* <span>{user.image ? <Image width={20} height={20} src={user.image} alt="Profile" className="w-8 h-8 rounded-full object-cover"></Image> : <CgProfile />}</span> */}
                            <span className="text-sm font-medium text-[#1D271F]"> {user.name} </span>
                            <span className="text-xs"><MdArrowDropDown /></span> 
                        </button>
                        {open && (<div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                            <h3 className="font-semibold text-[#1D271F]"> {user.name} </h3>
                            <p className="mb-4 text-xs text-gray-500"> {user.email} </p> 
                            <Link href="/profile" onClick={() => setOpen(false)} className="mb-3 flex items-center gap-2 text-sm text-gray-700 hover:text-green-700" > 👤 আমার প্রোফাইল </Link>
                            <button onClick={handleSignOut} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700" > ↩  সাইন আউট </button>
                        </div>)}
                    </div>
                    :
                    <div>
                        <Link href={"/signin"}><button className='p-3 font-bold text-[#1D271F]'>সাইন ইন</button></Link>
                        <Link href={"/signup"}><button className='bg-[#05893E] text-[#F3FBF4] rounded-lg p-3 font-bold'>সাইন আপ</button></Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo;
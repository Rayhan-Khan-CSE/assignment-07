"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const handleUpdateUser = async (e: React.SubmitEvent<HTMLElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newUser = Object.fromEntries(formData.entries()) as {name: string,image:string};
            await authClient.updateUser({
    name: newUser.name,
    image: newUser?.image
})
    if(newUser){
            toast.success('প্রোফাইল আপডেট সফল হয়েছে!');
        }
        if(!newUser){
            toast.error('প্রোফাইল আপডেট ব্যর্থ হয়েছে!');
        }
    }
    const { data: session } = authClient.useSession();
        const user = session?.user;
        if (!user) return redirect("/");
    const handleSignOut = async () => {
         await authClient.signOut(); 
         toast.success("সফলভাবে সাইন আউট করেছেন!");
        };
    return (
        <div className="bg-[#F0F5F0]">
        <div className="flex flex-col justify-center items-center my-5 max-w-150 mx-auto">
            <div>
                <h2 className="text-2xl font-extrabold">আমার প্রোফাইল</h2>
                <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            <div className="flex justify-between items-center px-5 w-full bg-white my-4 py-3 rounded-2xl">
                <div className="py-4 flex gap-3 items-center">
                    <div className="h-15 w-15 bg-base-200 rounded-2xl">
                        {user?.image ? <Image width={90} height={90} src={user.image} alt="Profile" className="h-full w-full object-cover rounded-2xl"></Image> : <div className="text-6xl items-center"><CgProfile size={60} /></div>}
                    </div>
                    <div>
                    <p className="text-xl font-extrabold">{user?.name}</p>
                    <p>{user?.email}</p>
                    </div>
                </div>
                <button onClick={handleSignOut} className="p-4 border border-red-500 bg-base-100 rounded-2xl text-red-500">↩ সাইন আউট</button>
            </div>
            <div className=" px-5 w-full bg-white my-4 py-3 rounded-2xl">
                <h2 className="text-2xl font-extrabold">তথ্য</h2>
                <h2 className="label text-lg text-[#1D271F] ml-20">নাম</h2>
                <div className="flex justify-center items-center">
            <form onSubmit={handleUpdateUser}>
                <fieldset className="flex flex-col items-center w-100">
                    <input name="name" type="text" className="input  w-full text-lg text-[#1D271F]"/>
                    <Link href={"/profile/update"}><button type="submit" className="btn w-full bg-[#05893E] text-white mt-4 text-lg ">আপডেট </button></Link>
                    </fieldset>
            </form>
            </div>
               
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;
"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Update = () => {
return (
            <div className="min-h-[70vh] flex items-center justify-center px-4 py-10 bg-[#F0F5F0]">
            <div className="w-full max-w-lg rounded-3xl bg-white px-6 py-12 text-center shadow-lg sm:px-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <FaCheck className="text-4xl text-[#05893E]" />
            </div>
            <h1 className="text-2xl font-extrabold text-[#1D271F] sm:text-3xl">
                প্রোফাইল আপডেট সফল হয়েছে!
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-gray-500">
                আপনার প্রোফাইলের তথ্য সফলভাবে আপডেট করা হয়েছে।
                এখন আপনি BazarDor-এর সেবা উপভোগ করতে পারবেন।
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3.5 text-lg font-semibold text-white transition hover:bg-[#047532] focus:outline-none focus:ring-2 focus:ring-[#05893E] focus:ring-offset-2"
            >
                হোম পেজে ফিরে যান
                <span aria-hidden="true">←</span>
            </Link>
            <p className="mt-5 text-sm text-gray-400">
                BazarDor — প্রতিদিনের বাজারদর, আপনার হাতেই।
            </p>
        </div>
    </div>
);

};

export default Update;
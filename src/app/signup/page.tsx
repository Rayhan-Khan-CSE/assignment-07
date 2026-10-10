import Image from "next/image";
import logo1 from "@/assets/Google.png"
import logo2 from "@/assets/Github.png"

const SignUpPage = () => {
    return (
        <div className="max-w-300 mx-auto w-full flex flex-col justify-center items-center my-5">
            <h2 className="font-extrabold text-3xl">অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="pb-6">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
           <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">

                    <label className="label text-lg text-[#1D271F]">নাম</label>
                    <input type="email" className="input text-lg text-[#1D271F]" placeholder="যেমন: রহিম উদ্দিন" />

                    <label className="label text-lg text-[#1D271F]">ইমেইল</label>
                    <input type="email" className="input text-lg text-[#1D271F]" placeholder="you@example.com" />

                    <label className="label text-lg text-[#1D271F]">পাসওয়ার্ড</label>
                    <input type="password" className="input text-lg text-[#1D271F]" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <label className="label text-lg text-[#1D271F]">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" className="input text-lg text-[#1D271F]" placeholder="আবার লিখুন" />

                    <button className="btn bg-[#05893E] text-white mt-4 text-lg text-[#1D271F]">অ্যাকাউন্ট তৈরি করুন</button>

                    <div className="flex w-full flex-col">
                        <div className="divider text-lg text-[#1D271F]">অথবা</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                        
                        <button className="btn btn-active"><Image src={logo1} height={20} width={20} alt="logo1"></Image> Google দিয়ে চালিয়ে যান</button>
                        </div>
                        <div className="flex items-center gap-1">
                        
                        <button className="btn btn-active"><Image src={logo2} height={20} width={20} alt="logo2"></Image> GitHub দিয়ে চালিয়ে যান</button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center my-4">
                        <p className="text-lg">অ্যাকাউন্ট আছে? <span className="text-[#05893E]">সাইন ইন করুন</span></p>
                    </div>
                </fieldset>
            </form>
            <div className="flex justify-center items-center w-md pt-6">
                <p className="text-sm text-[#1D271F]">← হোম পেজে ফিরে যান</p>
            </div>
        </div>
    );
};

export default SignUpPage;
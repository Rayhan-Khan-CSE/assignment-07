"use client"
import Image from "next/image";
import logo1 from "@/assets/Google.png"
import logo2 from "@/assets/Github.png"
import { authClient, signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
const SignInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const user = Object.fromEntries(formData.entries()) as {email: string, password: string};
            console.log(user);
            const {data, error} = await signIn.email({
                email: user.email,
                password: user.password
            });
            if(data){
                console.log(data);
                redirect("/");
                toast.success("Sign up successfully completed");
            }
            if(error){
                console.log(error);
                toast.error(error.message);
            }
        }
        const handleGoogleSignIn = async () => {
             const data = await authClient.signIn.social({
    provider: "google",
  });
        }
        const handleGithubSignIn = async () => {
             const data = await authClient.signIn.social({
    provider: "github",
  });
        }
    return (
        <div className="max-w-300 mx-auto w-full flex flex-col justify-center items-center my-5">
            <h2 className="font-extrabold text-3xl">সাইন ইন</h2>
            <p className="pb-6">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
           <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">


                    <label className="label text-lg text-[#1D271F]">ইমেইল</label>
                    <input name="email" type="email" className="input text-lg text-[#1D271F]" placeholder="you@example.com" />

                    <label className="label text-lg text-[#1D271F]">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input text-lg text-[#1D271F]" placeholder="কমপক্ষে ৮ অক্ষর" />


                    <button type="submit" className="btn bg-[#05893E] text-white mt-4 text-lg text-[#1D271F]">সাইন ইন</button>

                    <div className="flex w-full flex-col">
                        <div className="divider text-lg text-[#1D271F]">অথবা</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                        
                        <button onClick={handleGoogleSignIn} className="btn btn-active"><Image src={logo1} height={20} width={20} alt="logo1"></Image> Google দিয়ে চালিয়ে যান</button>
                        </div>
                        <div className="flex items-center gap-1">
                        
                        <button onClick={handleGithubSignIn} className="btn btn-active"><Image src={logo2} height={20} width={20} alt="logo2"></Image> GitHub দিয়ে চালিয়ে যান</button>
                        </div>
                    </div>
                    <Link href={"/signup"}>
                    <div className="flex justify-center items-center my-4">
                        <p className="text-lg">অ্যাকাউন্ট নেই? <span className="text-[#05893E]">সাইন আপ করুন</span></p>
                    </div>
                    </Link>
                </fieldset>
            </form>
            <Link href={"/"}>
            <div className="flex justify-center items-center w-md pt-6">
                <p className="text-sm text-[#1D271F]">← হোম পেজে ফিরে যান</p>
            </div>
            </Link>
        </div>
    );
};

export default SignInPage;

import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGreaterThan } from "react-icons/fa";
interface IDetails {
    params: Promise<{ id: string }>;
}
interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface IProduct {
    categoryNameBn: string;
    nameBn: string;
    image: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    change: {
        dir: string;
        pct: number;
    };
    markets: IMarket[];
}

const DetailsPage = async ({ params }: IDetails) => {
    const { id } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
    const data: IProduct = await res.json();
    console.log(data);
    if(!data){
        notFound()
    }
    const lowestPrice = Math.min(...data.markets.map((m) => m.min));

    const highestPrice = Math.max(...data.markets.map((m) => m.max));

    const avgPrice = (lowestPrice + highestPrice)/2;
    return (
        <div className=" bg-[#F0F5F0] text-[#26332A]">
        <div className="max-w-300 mx-auto w-full px-4 py-5">
            <div className="text-sm mb-5 flex gap-2 flex-wrap items-center text-[#59665D]">
                <Link href="/">হোম</Link>
                <span className="text-[10px] items-center"><FaGreaterThan /></span>
                <span>{data.categoryNameBn}</span>
                <span className="text-[10px] items-center"><FaGreaterThan /></span>
                <span>{data.nameBn}</span>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-xl p-4 flex justify-between gap-4 items-center">
                <div className="flex items-center gap-4 w-full">
                    <div className="bg-[#F0F5F0] rounded-xl p-4 text-4xl">{data.image}</div>
                    <div>
                        <h2 className="text-3xl font-extrabold">{data.nameBn}</h2>
                        <p>প্রতি {data.unit === "kg" ? "কেজি" : data.unit === "litre" ? "লিটার" : data.unit === "piece" ? "পিস" : data.unit === "dozen" ? "ডজন" : data.unit} · {data.categoryNameBn}</p>
                        <p>গতকালের তুলনায় আজ দাম বেড়েছে · {Number((data.today) - (data.yesterday)).toLocaleString("bn-BD")} টাকা</p>
                    </div>
                </div>
                <div className="bg-[#F0F5F0] rounded-2xl p-4 text-center min-w-30">
                    <p className="text-sm">আজকের দাম</p>
                    <p className="text-3xl font-extrabold">{Number(data.today).toLocaleString("bn-BD")}</p>
                    <p className="text-sm">টাকা/{data.unit === "kg" ? "কেজি" : data.unit === "litre" ? "লিটার" : data.unit === "piece" ? "পিস" : data.unit === "dozen" ? "ডজন" : data.unit}</p>
                </div>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-5 mt-5">
                <h2 className="text-2xl font-bold px-4">দামের সারসংক্ষেপ</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">সর্বনিম্ন দাম</p>
                        <p className="text-2xl font-extrabold text-green-500">{Number(lowestPrice).toLocaleString("bn-BD")} টাকা</p>
                        <p className="text-sm">সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">সর্বাধিক দাম</p>
                        <p className="text-2xl font-extrabold text-red-500">{Number(highestPrice).toLocaleString("bn-BD")} টাকা</p>
                        <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">গড় দাম</p>
                        <p className="text-2xl font-extrabold text-green-500">{Number(avgPrice.toFixed(2).replace(/\.00$/, "")).toLocaleString("bn-BD")} টাকা</p>
                        <p className="text-sm">প্রতি {data.unit === "kg" ? "কেজি" : data.unit === "litre" ? "লিটার" : data.unit === "piece" ? "পিস" : data.unit === "dozen" ? "ডজন" : data.unit}-এর হিসাবে</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-xl p-3 mt-4">
                <h2 className="font-bold text-lg mb-3">বাজারভিত্তিক আজকের দাম</h2>
                <div className="overflow-x-auto rounded-xl border border-[#E1E8E1]">
                    <table className="table w-full min-w-150 text-sm sm:text-base">
                        <thead className="bg-[#FAFCFA] text-[#69756C]">
                            <tr>
                                <th className="font-medium whitespace-nowrap p-2 text-left">বাজার</th>
                                <th className="font-medium whitespace-nowrap p-2 text-center">বিভাগ</th>
                                <th className="font-medium whitespace-nowrap p-2 text-center">সর্বনিম্ন</th>
                                <th className="font-medium whitespace-nowrap p-2 text-center">সর্বাধিক</th>
                                <th className="font-medium whitespace-nowrap p-2 text-right">গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.markets.map((m, i) => (
                                    <tr key={`${m.market}-${i}`} className="border-b border-[#1D271F] last:border-b-0 odd:bg-[#FAFCFA] even:bg-[#F0F5F0]">
                                        <td className="whitespace-nowrap p-2 text-left">{m.market}</td>
                                        <td className="whitespace-nowrap p-2 text-center">{m.division}</td>
                                        <td className="whitespace-nowrap p-2 text-center">{Number(m.min).toLocaleString("bn-BD")} টাকা</td>
                                        <td className="whitespace-nowrap p-2 text-center">{Number(m.max).toLocaleString("bn-BD")} টাকা</td>
                                        <td className="whitespace-nowrap p-2 text-right font-semibold">{Number(((m.min+m.max)/2).toFixed(2).replace(/\.00$/, "")).toLocaleString("bn-BD")} টাকা</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        </div>
    );
};

export default DetailsPage;
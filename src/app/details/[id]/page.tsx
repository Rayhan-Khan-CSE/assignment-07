
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
interface IDetails {
    params: Promise<{ id: string }>;
}

const DetailsPage = async ({ params }: IDetails) => {
    const { id } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);
    const data = await res.json();
    console.log(data);
    const avgPrice = (data.today + data.yesterday + data.lastWeek + data.lastMonth) / 4;
    return (
        <div className="max-w-300 mx-auto w-full px-4 py-5">
            <div className="text-sm mb-5 flex gap-2 flex-wrap items-center">
                <Link href="/">হোম</Link>
                <span className="text-[10px] items-center"><FaGreaterThan /></span>
                <span>{data.categoryNameBn}</span>
                <span className="text-[10px] items-center"><FaGreaterThan /></span>
                <span>{data.nameBn}</span>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-5 flex justify-between gap-4 items-center">
                <div className="flex items-center gap-4 w-full">
                    <div className="bg-[#F0F5F0] rounded-xl p-4 text-4xl">{data.image}</div>
                    <div>
                        <h2 className="text-3xl font-extrabold">{data.nameBn}</h2>
                        <p>{data.categoryNameBn} . {data.unit}</p>
                        <p>{data.change.dir}{data.change.pct}% { }দামের পরিবর্তন</p>
                    </div>
                </div>
                <div className="bg-[#F0F5F0] rounded-2xl p-4 text-center min-w-30">
                    <p className="text-sm">আজকের দাম</p>
                    <p className="text-3xl font-extrabold">{data.today}</p>
                    <p className="text-sm">টাকা/{data.unit}</p>
                </div>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-5 mt-5">
                <h2 className="text-2xl font-bold px-4">দামের সারসংক্ষেপ</h2>
                <div className="grid grid-cols-3 gap-3">
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">সর্বনিম্ন দাম</p>
                        <p className="text-2xl font-extrabold text-green-500">{data.yesterday} টাকা</p>
                        <p className="text-sm">সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">সর্বাধিক দাম</p>
                        <p className="text-2xl font-extrabold text-red-500">{data.lastWeek} টাকা</p>
                        <p className="text-sm">সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className="border border-[#E1E8E1] rounded-xl p-4">
                        <p className="text-sm">গড় দাম</p>
                        <p className="text-2xl font-extrabold text-green-500">{avgPrice.toFixed(2)} টাকা</p>
                        <p className="text-sm">প্রতি কেজি-এর হিসাবে</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAFCFA] border border-[#E1E8E1] rounded-2xl p-5 mt-5">
                <h2 className="font-bold text-xl mb-5">বাজারভিত্তিক আজকের দাম</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>বাজার</th>
                                <th>বিভাগ</th>
                                <th>সর্বনিম্ন</th>
                                <th>সর্বাধিক</th>
                                <th>গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.markets.map((m, i) => (
                                    <tr key={`${m.market}-${i}`}>
                                        <td>{m.market}</td>
                                        <td>{m.division}</td>
                                        <td>{m.min} টাকা</td>
                                        <td>{m.max} টাকা</td>
                                        <td>{(((m.min) + (m.max)) / 2)?.toFixed(2)} টাকা</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import PriceDecrease from "@/components/PriceDecrease";
import PriceIncrease from "@/components/PriceIncrease";

export default async function Home() {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await res.json();
  console.log(data);
  return (
    <div>
        <Marquee/>
        <Banner/>
        <PriceIncrease data={data} />
        <PriceDecrease data={data} />
        <AllProducts data={data} />
    </div>
  );
}

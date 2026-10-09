import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await res.json();
  console.log(data);
  return (
    <div>
        <Marquee/>
        <Banner/>
        <AllProducts data={data} />
    </div>
  );
}

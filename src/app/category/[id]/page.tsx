
import CategoryProducts from "@/components/CategoryProducts";
import { notFound } from "next/navigation";
interface ICategoryProps {
    params: Promise<{ id: string;}>;
};


const Category = async ({params}:ICategoryProps) => {
    const {id} = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`);
    const data = await res.json();
    if(!data || data.length === 0){
            notFound()
        }

    return (
        <div className="max-w-300 mx-auto w-full mb-5 ">
            <CategoryProducts data={data}/>
        </div>
    );
};

export default Category;
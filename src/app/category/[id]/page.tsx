
import CategoryProducts from "@/components/CategoryProducts";
interface ICategoryProps {
    params: Promise<{ id: string;}>;
};


const Category = async ({params}:ICategoryProps) => {
    const {id} = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${id}`);
    const data = await res.json();
    return (
        <div className="max-w-300 mx-auto w-full ">
            <CategoryProducts data={data}/>
        </div>
    );
};

export default Category;
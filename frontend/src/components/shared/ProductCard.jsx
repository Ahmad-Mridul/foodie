import useMenus from "../../hooks/useMenus";

const ProductCard = () => {
    const items = useMenus({ recommended: true });
    console.log(items);

    return (
        <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
            {items.map((item, idx) => (
                <div className="card bg-[#F3F3F3]  shadow-sm" key={idx}>
                    <figure>
                        <img src={item.image} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="btn border-0 hover:bg-[#1F2937] hover:border-0 uppercase border-b-2 border-[#BB8506] text-[#BB8506] rounded-xl">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;

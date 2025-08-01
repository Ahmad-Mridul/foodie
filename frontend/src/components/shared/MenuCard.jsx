import useMenus from "../../hooks/useMenus";

const MenuCard = ({ btn, category, limit }) => {
    const items = useMenus({ category });

    const displayItems = limit ? items.slice(0, limit) : items;

    return (
        <div className="w-3/4 mx-auto space-y-10">
            <div className="grid grid-cols-2 gap-10">
                {displayItems.map((item, idx) => (
                    <div className="flex gap-3" key={idx}>
                        <div>
                            <img
                                src={item.image}
                                alt=""
                                className="rounded-r-[50%] rounded-b-[50%]"
                            />
                        </div>
                        <div>
                            <h2 className="font-cinzel">
                                {item.name}------------
                            </h2>
                            <p className="text-[#737373]">{item.recipe}</p>
                        </div>
                        <div>
                            <p className="text-[#BB8506]">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="btn border-0 uppercase border-b-2 border-gray-900 rounded-xl">
                    {btn}
                </button>
            </div>
        </div>
    );
};

export default MenuCard;

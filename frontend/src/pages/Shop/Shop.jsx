import Cover from "../../components/shared/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import TabManagement from "../../components/Shop/TabManagement";
const Shop = () => {
    return (
        <div className="space-y-20">
            <Cover
                bg={coverImg}
                title="OUR SHOP"
                desc="WOULD YOU LIKE TO TRY A DISH?"
            />
            <TabManagement/>
        </div>
    );
};

export default Shop;
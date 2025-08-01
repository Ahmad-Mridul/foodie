import Cover from "../../components/shared/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import desertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzasBg from "../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../assets/menu/salad-bg.jpg";
import soupsBg from "../../assets/menu/soup-bg.jpg";
import MenuCard from "../../components/shared/MenuCard";
import SectionHeading from "../../components/shared/SectionHeading";
const Menu = () => {
    return (
        <div className="space-y-20">
            <Cover
                bg={coverImg}
                title="OUR MENU"
                desc="WOULD YOU LIKE TO TRY A DISH?"
            />
            <SectionHeading title="Don't miss" heading="TODAY'S OFFER"/>
            <MenuCard category="offered" btn="ORDER YOUR FAVORITE FOOD" limit={6}/>
            <Cover
                bg={desertBg}
                title="DESSERTS"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCard category="dessert" btn="ORDER YOUR FAVORITE FOOD" limit={6}/>
            <Cover
                bg={pizzasBg}
                title="PIZZAS"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCard category="pizza" btn="ORDER YOUR FAVORITE FOOD" limit={6}/>
            <Cover
                bg={saladsBg}
                title="SALADS"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCard category="salad" btn="ORDER YOUR FAVORITE FOOD" limit={6}/>
            <Cover
                bg={soupsBg}
                title="SOUPS"
                desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCard category="soup" btn="ORDER YOUR FAVORITE FOOD" limit={6}/>
        </div>
    );
};

export default Menu;

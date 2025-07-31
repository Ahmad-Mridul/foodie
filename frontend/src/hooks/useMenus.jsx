import menus from "../data/menu.json";

const useMenus = ({ category = null, recommended = false }) => {
    const filteredMenu = menus.filter((menu) => {
        const matchCategory = category ? menu.category === category : true;
        const matchRecommended = recommended ? menu.recommended === true : true;
        return matchCategory && matchRecommended;
    });

    return filteredMenu;
};

export default useMenus;

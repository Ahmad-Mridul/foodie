import { useState } from "react";
// import menus from "../data/menu.json";
import axios from "axios";
import { useEffect } from "react";

const useMenus = ({ category = null, recommended = false }) => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/menus")
            .then((result) => setMenus(result.data));
    }, [category,recommended]);
    console.log(menus);

    const filteredMenu = menus.filter((menu) => {
        const matchCategory = category ? menu.category === category : true;
        const matchRecommended = recommended ? menu.recommended === true : true;
        return matchCategory && matchRecommended;
    });

    return filteredMenu;
};

export default useMenus;

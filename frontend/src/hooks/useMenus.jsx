
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const useMenus = ({ category = null, recommended = false }) => {
    const [menus, setMenus] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/menus")
        .then(res=>setMenus(res.data))
        .catch(err=>console.log(err.message))
    },[])

    const filteredMenu = menus.filter((menu) => {
        const matchCategory = category ? menu.category === category : true;
        const matchRecommended = recommended ? menu.recommended === true : true;
        return matchCategory && matchRecommended;
    });

    return filteredMenu;
};

export default useMenus;

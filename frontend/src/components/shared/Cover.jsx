import { useLocation } from "react-router-dom";
const Cover = ({ bg, title, desc }) => {
    const location = useLocation();

    return (
        <div
            className={`bg-center p-30 bg-cover bg-no-repeat h-[500px] ${location.pathname=="/" ? "w-3/4 mx-auto" : "w-full"} flex justify-center items-center`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className={`${location.pathname=="/" ? "bg-white" : "bg-black/50"} w-full h-full flex items-center justify-center`}>
                <div className={`text-center ${location.pathname=="/"?"text-black":"text-white"} px-20 `}>
                    <h2 className="uppercase text-4xl font-bold font-cinzel">
                        {title}
                    </h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;

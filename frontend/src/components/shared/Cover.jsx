const Cover = ({ bg, title, desc }) => {
    return (
        <div
            className="bg-center p-30 bg-cover bg-no-repeat h-[500px] w-3/4 mx-auto flex justify-center items-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="bg-white w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <h2 className="uppercase text-4xl font-bold font-cinzel">{title}</h2>
                    <p className="w-3/4 mx-auto">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;

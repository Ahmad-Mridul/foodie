import SectionHeading from "../shared/SectionHeading";
import bg from "../../assets/home/featured.jpg";

const SingleBlog = () => {
    return (
        <div
            className="relative h-150 w-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content on top of overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white  px-4">
                <div className="">
                    <SectionHeading
                        title="Check it out"
                        heading="FROM OUR MENU"
                    />
                    <div className="flex justify-center items-center gap-10">
                        <img src={bg} className="w-1/4" alt="" />
                        <div className="w-1/3">
                            <p>March 20, 2023</p>
                            <h2>WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn border-0 bg-transparent text-white hover:bg-white hover:text-black transition duration-500 uppercase border-b-2 border-white  rounded-xl">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;

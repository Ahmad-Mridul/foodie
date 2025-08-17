import { useForm } from "react-hook-form";
import SectionHeading from "../../shared/SectionHeading";
import "./AddItem.css";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_SECRETE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_api, imgFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
            };
            const menuRes = await axios
                .post("http://localhost:3000/menus", menuItem)
                .then((res) => console.log(res.data));
            if (menuRes.data.insertedId) {
                alert("item added");
            }
            
        }
    };
    return (
        <div className="">
            <SectionHeading title="What's new?" heading="ADD AN ITEM" />
            <div className="p-10 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name">Recipe Name*</label>
                        <input
                            {...register("name", { required: true })}
                            placeholder="Recipe name"
                        />
                    </div>
                    <div className="w-full flex">
                        <div className="flex flex-col w-1/2 justify-between">
                            <label htmlFor="category">Category*</label>
                            <select
                                name="category"
                                className="select"
                                {...register("category", { required: true })}
                                defaultValue="default"
                            >
                                <option disabled value="default">
                                    Choose category
                                </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="drink">drink</option>
                                <option value="dessert">dessert</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-1/2 justify-between">
                            <label htmlFor="price">Price*</label>
                            <input
                                placeholder="price"
                                name="price"
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <label htmlFor="details">Recipe Details*</label>
                        <textarea
                            placeholder="Recipe details"
                            rows={5}
                            cols={25}
                            name="details"
                            {...register("details", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full my-6">
                        <input
                            type="file"
                            name="image"
                            className="file-input file-input-warning img-in"
                            {...register("image", { required: true })}
                        />
                    </div>
                    <button className="btn bg-orange-400 rounded text-white">
                        Add Item
                        <ImSpoonKnife />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;

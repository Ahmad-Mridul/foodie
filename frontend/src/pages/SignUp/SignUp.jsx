import { FcGoogle } from "react-icons/fc";
import bg from "../../assets/others/authentication.png";
import login from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import HelmetTitlle from "../../hooks/HelmetTitlle";
const SignUp = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const { createUserWithGooglePopUp, setUser, createUserWithEmailPass } =
        useAuth();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleGoogleSignUp = () => {
        createUserWithGooglePopUp()
            .then((user) => {
                alert("user created succesfully");
                setUser(user.user);
                navigate("/");
            })
            .catch((err) => console.log(err.message));
    };
    const handleCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please complete the reCAPTCHA");
            return;
        }

        // Continue submitting the form
        console.log("Form submitted with captcha:", captchaValue);
        createUserWithEmailPass(userInfo.email, userInfo.password)
            .then((user) => {
                setUser(user.user);
                navigate("/");
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <>
            <HelmetTitlle title="Register to FOODIE" />
            <div
                className="flex justify-center items-center bg-cover bg-center p-10 "
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="flex shadow-2xl w-full px-20 py-10">
                    <div className="w-1/2 order-2">
                        <img src={login} alt="" />
                    </div>
                    <div className="w-1/2">
                        <div className="text-black">
                            <h2 className="text-center text-2xl font-bold">
                                Register
                            </h2>
                            <form action="" className="space-y-5">
                                <div className="">
                                    <label htmlFor="">Name*</label>
                                    <br />
                                    <input
                                        placeholder="enter your name"
                                        name="name"
                                        type="text"
                                        className="border w-full"
                                        required
                                        value={userInfo.name}
                                        onChange={(e) =>
                                            setUserInfo({
                                                ...userInfo,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="">Email*</label>
                                    <br />
                                    <input
                                        placeholder="enter your email"
                                        name="email"
                                        type="email"
                                        className="border w-full"
                                        required
                                        value={userInfo.email}
                                        onChange={(e) =>
                                            setUserInfo({
                                                ...userInfo,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="">Password*</label>
                                    <br />
                                    <input
                                        placeholder="enter your password"
                                        name="password"
                                        type="password"
                                        className="border w-full"
                                        required
                                        value={userInfo.password}
                                        onChange={(e) =>
                                            setUserInfo({
                                                ...userInfo,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LdOmJYrAAAAAK2IpM8YmPOqlJWo0U4m8B4IYjNp"
                                    onChange={handleCaptchaChange}
                                />
                                <div className="flex justify-center items-center flex-col space-y-2 ">
                                    <button
                                        onClick={handleSignUp}
                                        type="submit"
                                        className="btn px-10 bg-gradient-to-r from-[#835D23] to-[#B58130] hover:bg-transparent hover:border-orange-300 border transition duration-500 text-white w-full"
                                    >
                                        Sign Up
                                    </button>
                                    <p className="text-[#B58130]">
                                        Already have an account?{" "}
                                        <Link to="/login" className="link">
                                            Login here
                                        </Link>
                                    </p>
                                    <div className="divider">OR</div>
                                    <div className="flex gap-5 w-full">
                                        <button
                                            onClick={handleGoogleSignUp}
                                            className="btn w-full"
                                        >
                                            <FcGoogle className="text-2xl" />
                                            SignUp with Google
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { HiLockClosed, HiUserCircle, HiXCircle } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { useMoralis } from "react-moralis";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const { signup, authError } = useMoralis();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegisterForm>();
    const handleSignUp: SubmitHandler<RegisterForm> = ({
        username,
        email,
        password,
    }) => {
        signup(username, password, email);

        setAcceptTerms(false);
        !authError && reset();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(handleSignUp)}
                className="my-10 flex flex-col space-y-6"
            >
                <div>
                    <div className="bg-input p-2 rounded-lg w-full flex items-center ">
                        <HiUserCircle className="text-2xl text-gray-400 mr-2" />
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            placeholder="Username"
                            className="bg-transparent outline-none w-full p-1"
                        />
                    </div>
                    {errors.username && (
                        <div className="flex items-center text-red-500 py-1 text-sm absolute">
                            <HiXCircle className="text-lg mr-1" />
                            <span>Username is required</span>
                        </div>
                    )}
                </div>
                <div>
                    <div className="bg-input p-2 rounded-lg w-full flex items-center  ">
                        <MdAlternateEmail className="text-2xl text-gray-400 mr-2" />
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="bg-transparent outline-none w-full p-1"
                        />
                    </div>
                    {errors.email && (
                        <div className="flex items-center text-red-500 py-1 text-sm absolute">
                            <HiXCircle className="text-lg mr-1" />
                            <span>Email is required</span>
                        </div>
                    )}
                </div>
                <div>
                    <div className="bg-input p-2 rounded-lg w-full flex items-center ">
                        <HiLockClosed className="text-2xl text-gray-400 mr-2" />
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder="Password"
                            className="bg-transparent outline-none w-full p-1"
                        />
                    </div>
                    {errors.password && (
                        <div className="flex items-center text-red-500 py-1 text-sm absolute">
                            <HiXCircle className="text-lg mr-1" />
                            <span>Password is required</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <label
                        htmlFor="terms"
                        className="cursor-pointer flex items-center my-5"
                    >
                        <input
                            type="checkbox"
                            id="terms"
                            className="accent-meta-violet-100
                    mr-2 cursor-pointer"
                            checked={acceptTerms}
                            onChange={() => setAcceptTerms((prev) => !prev)}
                        />
                        <span>
                            I agree to Metasquid World Terms of Services
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn-meta self-center my-5 py-3 px-8 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={!acceptTerms}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;

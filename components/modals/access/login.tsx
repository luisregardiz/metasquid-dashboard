import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiLockClosed, HiUserCircle, HiXCircle } from "react-icons/hi";
import { useMoralis } from "react-moralis";
import Wallets from "./wallets";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const [wallets, setWallets] = useState(false);
    const { login, authError, isAuthenticating } = useMoralis();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginForm>();

    const handleLogin: SubmitHandler<LoginForm> = ({ username, password }) => {
        login(username, password);

        !authError && reset();
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="my-10 flex flex-col space-y-6"
            >
                <div>
                    <div className="bg-input p-2 rounded-lg w-full flex items-center ">
                        <HiUserCircle className="text-2xl text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Username"
                            {...register("username", { required: true })}
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
                    <div className="bg-input p-2 rounded-lg w-full flex items-center ">
                        <HiLockClosed className="text-2xl text-gray-400 mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
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
                <a href="#">Forgot password?</a>
                <button
                    id="login-button"
                    type="submit"
                    disabled={isAuthenticating}
                    className="btn-meta self-center my-5 py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isAuthenticating ? "Login..." : "Login"}
                </button>
                <div className="flex items-center gap-5 my-2">
                    <div className="h-0.5 bg-white w-full"></div>
                    <span>or</span>

                    <div className="h-0.5 bg-white w-full"></div>
                </div>
                <button
                    onClick={() => setWallets(true)}
                    type="button"
                    className="btn-meta bg-button-secondary shadow-button-wallet self-center mt-5 py-3 px-8"
                >
                    Connect with Wallet
                </button>
            </form>
            <Wallets wallets={wallets} setWallets={setWallets} />
        </div>
    );
};

export default Login;

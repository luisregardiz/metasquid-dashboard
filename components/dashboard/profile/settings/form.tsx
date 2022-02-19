import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiUserCircle, HiXCircle } from "react-icons/hi";
import { useMoralis } from "react-moralis";

interface SettingsFormProps {}

const SettingsForm: FC<SettingsFormProps> = () => {
    const { setUserData, isUserUpdating, userError } = useMoralis();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UpdateUser>();
    const handleUpdate: SubmitHandler<UpdateUser> = ({ username }) => {
        setUserData({ username });
        if (userError) {
            return toast.error(userError.message, {
                style: {
                    background:
                        "linear-gradient(270deg, #D124EB 0%, #DC2626 100%)",
                    color: "white",
                    fontWeight: "500",
                    padding: "1rem",
                },
                duration: 5000,
            });
        }
        reset();
    };
    return (
        <div className="bg-card p-8 w-1/3 flex flex-col">
            <h4 className="text-xl font-bold">My Account</h4>
            <form
                onSubmit={handleSubmit(handleUpdate)}
                className="my-8 flex flex-col"
            >
                <label htmlFor="username" className="font-medium ">
                    Username
                </label>
                <div className="bg-input p-2 rounded-lg w-full flex items-center mt-2">
                    <HiUserCircle className="text-2xl text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        {...register("username", { required: true })}
                        className="bg-transparent outline-none w-full p-1"
                    />
                </div>
                {errors.username && (
                    <div className="flex items-center text-red-500 py-1 text-sm ">
                        <HiXCircle className="text-lg mr-1" />
                        <span>Username is required</span>
                    </div>
                )}
                <button
                    id="update-button"
                    disabled={isUserUpdating}
                    className="btn-meta self-center mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isUserUpdating ? "Updating..." : "Update"}
                </button>
            </form>
        </div>
    );
};

export default SettingsForm;

import Image from "next/image";
import { FC } from "react";
import { useMoralis } from "react-moralis";
import GuestAvatar from "../../public/assets/images/guest-avatar.svg";
import { parseEthAddress } from "../../helpers/parseEthAddress";
import { IoNotifications } from "react-icons/io5";
interface AvatarProps {}

const Avatar: FC<AvatarProps> = () => {
    const { user } = useMoralis();

    return (
        <>
            {user && (
                <div className="flex flex-row-reverse items-center ">
                    <div>
                        <Image
                            src={GuestAvatar}
                            alt="Guest Avatar"
                            height={50}
                            width={50}
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex flex-col text-right mx-5">
                        <span data-testid="username">
                            {user.get("username")}
                        </span>
                        <span>
                            {user?.get("ethAddress") &&
                                parseEthAddress(user?.get("ethAddress"))}
                        </span>
                    </div>
                    <div>
                        <button>
                            <IoNotifications className="text-2xl icon-gradient-primary" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Avatar;

import Image from "next/image";
import { FC } from "react";
import { useMoralis } from "react-moralis";
import GuestAvatar from "../../../public/assets/images/guest-avatar.svg";
interface UserInformationProps {}

const UserInformation: FC<UserInformationProps> = () => {
    const { user } = useMoralis();
    return (
        <div className="bg-card p-8 ">
            <h4 id="profile-title" className="text-xl font-semibold mb-5">
                Profile
            </h4>
            <div className="flex items-center gap-10 ">
                <div className="flex-1">
                    <div className="space-y-5 ">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Username</span>
                                <span className="font-medium">
                                    {user?.get("username")}
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Token Holding</span>
                                <span className="font-medium">50,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Tokens Staked</span>
                                <span className="font-medium">100,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={GuestAvatar}
                        alt="Guest avatar"
                        height={230}
                        width={230}
                        objectFit="contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default UserInformation;

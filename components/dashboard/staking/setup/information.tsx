import Image from "next/image";
import { FC } from "react";
import Squid from "../../../../public/assets/images/squid.svg";

interface InformationProps {}

const Information: FC<InformationProps> = () => {
    return (
        <div className="bg-card p-8 ">
            <div className="my-5">
                <h4 className="font-bold text-3xl uppercase">Squid Man</h4>
                <div className="flex relative">
                    <div className="space-y-5 my-5 w-2/5">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10 ">
                                <span className="text-sm">Atlantic Rank</span>
                                <span className="font-medium uppercase">
                                    Fish
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10 ">
                                <span className="text-sm">Staked Power</span>
                                <span className="font-medium">500,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10 ">
                                <span className="text-sm">Total Power</span>
                                <span className="font-medium">
                                    1,000,000.00
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-16 h-auto -right-[80px] z-20">
                        <Image
                            src={Squid}
                            alt="Squid"
                            height={450}
                            width={400}
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <div className="absolute h-60 w-40 bg-squid right-12 -z-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Information;

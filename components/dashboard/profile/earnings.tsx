import { FC } from "react";

interface EarningsProps {}

const Earnings: FC<EarningsProps> = () => {
    return (
        <div className="bg-card p-8 ">
            <h4 id="earnings-title" className="text-xl font-semibold mb-5">
                Earnings
            </h4>
            <div className="flex items-center gap-10">
                <div className="basis-1/2">
                    <div className="space-y-5">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10 ">
                                <span className="text-sm">
                                    Total BUSD Rewards
                                </span>
                                <span className="font-medium">50,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">
                                    Total SQDS Rewards
                                </span>
                                <span className="font-medium">50,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">
                                    Total NFT Rewards
                                </span>
                                <span className="font-medium">3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="space-y-5">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">
                                    Total BTCB Rewards
                                </span>
                                <span className="font-medium">50,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">
                                    Total HYPER Rewards
                                </span>
                                <span className="font-medium">50,000.00</span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Pearls</span>
                                <span className="font-medium">40</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earnings;

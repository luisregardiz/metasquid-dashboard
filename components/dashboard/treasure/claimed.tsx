import { FC } from "react";

interface ClaimedTreasureProps {}

const ClaimedTreasure: FC<ClaimedTreasureProps> = () => {
    return (
        <div className="bg-card p-8 space-y-10 my-10">
            <div>
                <h4 className="text-xl font-semibold">Claimed Treasure</h4>
                <div className="flex justify-between">
                    <div className="m-8">
                        <h4 className="text-xl font-semibold mb-5">
                            Claimed Token Rewards
                        </h4>
                        <div className="space-y-5">
                            <div className="flex space-x-1 bg-detail-card-profile w-96">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">BUSD</span>
                                    <span className="font-medium">102.25</span>
                                </div>
                            </div>

                            <div className="flex space-x-1 bg-detail-card-profile w-96">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">BTCB</span>
                                    <span className="font-medium">0.00357</span>
                                </div>
                            </div>

                            <div className="flex space-x-1 bg-detail-card-profile w-96">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">HYPER</span>
                                    <span className="font-medium">50,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-8">
                        <h4 className="text-xl font-semibold mb-5">
                            Claimed Squid Rewards
                        </h4>
                        <div className="space-y-5">
                            <div className="flex space-x-1 bg-detail-card-profile w-96">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">SQDS</span>
                                    <span className="font-medium">
                                        1,000.22
                                    </span>
                                </div>
                            </div>

                            <div className="flex space-x-1 bg-detail-card-profile w-96 ">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">NFTS</span>
                                    <span className="font-medium">3 New</span>
                                </div>
                            </div>

                            <div className="flex space-x-1 bg-detail-card-profile w-96">
                                <div className="w-2 bg-divide-l"></div>
                                <div className="flex flex-col p-2 z-10 ">
                                    <span className="text-sm">PEARLS</span>
                                    <span className="font-medium">40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimedTreasure;

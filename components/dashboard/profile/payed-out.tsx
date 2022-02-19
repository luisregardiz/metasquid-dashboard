import { useRouter } from "next/router";
import { FC } from "react";

interface PayedOutProps {}

const PayedOut: FC<PayedOutProps> = () => {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between bg-card py-5 px-10 ">
                    <span className="text-xl ">
                        “You have earned new treasure”
                    </span>
                    <button
                        id="claim-button-profile"
                        onClick={() => router.push("/dashboard/treasure")}
                        className="btn-meta pulse-animation px-8 z-10"
                    >
                        Claim
                    </button>
                </div>
                <div className="bg-card p-10">
                    <h4
                        id="total-payed-title"
                        className="text-xl font-semibold mb-5"
                    >
                        Total Payed Out
                    </h4>
                    <div className="flex items-center gap-10">
                        <div className="basis-1/2">
                            <div className="space-y-5">
                                <div className="flex space-x-1 bg-detail-card-profile ">
                                    <div className="w-2 bg-divide-l"></div>
                                    <div className="flex flex-col p-2 z-10">
                                        <span className="text-sm">BUSD</span>
                                        <span className="font-medium">
                                            600,000,000.00
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-1 bg-detail-card-profile ">
                                    <div className="w-2 bg-divide-l"></div>
                                    <div className="flex flex-col p-2 z-10">
                                        <span className="text-sm">BTCB</span>
                                        <span className="font-medium">
                                            600,000,000.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <div className="space-y-5">
                                <div className="flex space-x-1 bg-detail-card-profile ">
                                    <div className="w-2 bg-divide-l"></div>
                                    <div className="flex flex-col p-2 z-10">
                                        <span className="text-sm">SQDS</span>
                                        <span className="font-medium">
                                            600,000,000.00
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-1 bg-detail-card-profile ">
                                    <div className="w-2 bg-divide-l"></div>
                                    <div className="flex flex-col p-2 z-10">
                                        <span className="text-sm">HYPER</span>
                                        <span className="font-medium">
                                            600,000,000.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayedOut;

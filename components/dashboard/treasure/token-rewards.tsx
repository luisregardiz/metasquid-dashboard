import { FC, useEffect, useState } from "react";
import { useScrollBlock } from "../../../hooks/useScrollBlock";
import AlertDialog from "../../modals/alert-dialog";

interface TokenRewardsProps {}

const TokenRewards: FC<TokenRewardsProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        isOpen ? blockScroll() : allowScroll();
    }, [allowScroll, blockScroll, isOpen]);

    const tokenRewards = [
        { name: "BUSD", value: 102.25 },
        { name: "BTCB", value: 0.00357 },
        { name: "BUSD", value: 50000 },
    ];
    const squidRewards = [
        { name: "SQDS", value: 1000.22 },
        { name: "NFTS", value: 3 },
        { name: "PEARLS", value: 40 },
    ];
    return (
        <>
            <div className="bg-card p-8 space-y-10 ">
                <div className="flex justify-between">
                    <div className="m-8">
                        <h4 className="text-xl font-semibold mb-5">
                            Token Rewards
                        </h4>
                        <div className="space-y-5">
                            {tokenRewards.map((token, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-10"
                                >
                                    <div className="flex space-x-1 bg-detail-card-profile w-52">
                                        <div className="w-2 bg-divide-l"></div>
                                        <div className="flex flex-col p-2 z-10 ">
                                            <span className="text-sm">
                                                {token.name}
                                            </span>
                                            <span className="font-medium">
                                                {token.value}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="btn-meta pulse-animation px-10"
                                    >
                                        Claim
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="m-8">
                        <h4 className="text-xl font-semibold mb-5">
                            SQUID Rewards
                        </h4>
                        <div className="space-y-5">
                            {squidRewards.map((token, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-10"
                                >
                                    <div className="flex space-x-1 bg-detail-card-profile w-52">
                                        <div className="w-2 bg-divide-l"></div>
                                        <div className="flex flex-col p-2 z-10 ">
                                            <span className="text-sm">
                                                {token.name}
                                            </span>
                                            <span className="font-medium">
                                                {token.value}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="btn-meta pulse-animation px-10"
                                    >
                                        Claim
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AlertDialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                message="Are you sure you want to claim this reward?"
                type="Claim"
            />
        </>
    );
};

export default TokenRewards;

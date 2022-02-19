import { FC, useEffect, useState } from "react";
import { useScrollBlock } from "../../../../hooks/useScrollBlock";
import AlertDialog from "../../../modals/alert-dialog";
interface SquidStakeProps {}

const SquidStake: FC<SquidStakeProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        isOpen ? blockScroll() : allowScroll();
    }, [allowScroll, blockScroll, isOpen]);

    return (
        <>
            <div className="bg-card p-8 space-y-10">
                <h4 className="text-2xl font-semibold">Squid Stake</h4>
                <div className="flex space-x-1 bg-detail-card-profile w-1/2">
                    <div className="w-2 bg-divide-l"></div>
                    <div className="flex flex-col p-2 z-10 ">
                        <span className="text-sm">Amount you can stake</span>
                        <span className="font-medium">127.00 SQDS</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <input
                        type="number"
                        placeholder="Enter an amount"
                        className="bg-input p-3 rounded-lg w-1/2 outline-none"
                    />
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn-meta pulse-animation px-9"
                    >
                        Stake
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex space-x-1 bg-detail-card-profile  w-1/2">
                        <div className="w-2 bg-divide-l"></div>
                        <div className="flex flex-col p-2 z-10 ">
                            <span className="text-sm">Total Staked</span>
                            <span className="font-medium">50,000.00 SQDS</span>
                        </div>
                    </div>
                    <button className="btn-meta bg-button-secondary shadow-button-wallet">
                        Unstake
                    </button>
                </div>
            </div>
            <AlertDialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                message="Are you sure you want to stake?"
                type="Stake"
            />
        </>
    );
};

export default SquidStake;

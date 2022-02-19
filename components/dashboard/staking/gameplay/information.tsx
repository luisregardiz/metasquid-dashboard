import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { useTimer } from "react-timer-hook";
import TokenIcon from "../../../../public/assets/icons/token-rewards-icon.svg";
interface GameplayInformationProps {}

const GameplayInformation: FC<GameplayInformationProps> = () => {
    const time = 604800;
    const [secondsLeft, setSecondsLeft] = useState(0);
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + time);
    const { seconds, minutes, hours, start, days, restart, isRunning } =
        useTimer({
            expiryTimestamp,
            autoStart: false,
        });

    const percentage = Math.round(100 - (secondsLeft / time) * 100);

    useEffect(() => {
        if (isRunning) {
            const restSeconds = setTimeout(() => {
                setSecondsLeft((prev) => prev + 1);
            });
            return () => {
                clearTimeout(restSeconds);
            };
        }
    }, [isRunning, seconds]);
    return (
        <div className="bg-gameplay-title flex items-center justify-evenly p-5">
            <div className="flex flex-col">
                <span className="text-lg font-bold uppercase">
                    SQUID Rewards
                </span>
                <div className="border-2 border-purple-900/40 px-4 py-1 rounded-lg my-2">
                    <span className="text-lg font-bold">SQDS: 0.00</span>
                </div>
            </div>
            <div className="absolute -top-6">
                <div className="border-4 h-14 w-80 rounded-xl border-purple-800/40 bg-gameplay-loader">
                    <div className="w-full h-full">
                        <div
                            style={{
                                width: `${percentage}%`,
                            }}
                            className={`bg-button-primary h-full rounded-xl transition-all duration-200 ease-in-out`}
                        >
                            <div>
                                <MdOutlineWatchLater className="text-2xl absolute left-5 top-4" />
                            </div>
                            <div className="w-full h-full flex justify-center items-center space-x-3 text-xl font-bold absolute bottom-0">
                                <span>{days}D</span>
                                <span>{hours}H</span>
                                <span>{minutes}M</span>
                                <span>{seconds}S</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-x-5 mt-5">
                <button onClick={() => start()} className="btn-meta px-10">
                    Set
                </button>
                <button className="btn-meta bg-button-secondary px-8 shadow-button-wallet">
                    Unset
                </button>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold uppercase">
                    Token Rewards
                </span>
                <div className="border-2 border-purple-900/40 px-4 py-1 rounded-lg my-2">
                    <div className="flex items-center space-x-3">
                        <Image
                            src={TokenIcon}
                            alt="Token icon"
                            height={20}
                            width={20}
                            objectFit="contain"
                        />
                        <span className="text-lg font-bold">0.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameplayInformation;

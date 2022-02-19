import { FC } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface TokenomicsProps {}

const Tokenomics: FC<TokenomicsProps> = () => {
    return (
        <div className="bg-card p-8">
            <h4 id="tokenomics-title" className="text-xl font-semibold mb-5">
                Tokenomics
            </h4>
            <div>
                <div className="flex items-center  gap-5">
                    <div className="w-28 font-semibold ">
                        <CircularProgressbar
                            value={90}
                            text={`90%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "transparent",
                                textColor: "#fff",
                                textSize: "1.3rem",
                                strokeLinecap: "butt",
                                pathTransitionDuration: 0.5,
                                pathColor: "rgba(209, 36, 235, 1)",
                                trailColor: "#F9FAFB20",
                            })}
                        />
                    </div>

                    <div className="flex space-x-1 bg-detail-card-profile ">
                        <div className="w-2 bg-divide-l"></div>
                        <div className="flex flex-col p-2 z-10">
                            <span className="text-sm">Burnt</span>
                            <span className="font-medium">600,000,000.00</span>
                        </div>
                    </div>
                    <div className="flex space-x-1 bg-detail-card-profile ">
                        <div className="w-2 bg-divide-l"></div>
                        <div className="flex flex-col p-2 z-10">
                            <span className="text-sm">Circulating Supply</span>
                            <span className="font-medium">400,000,000.00</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-5 my-5">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Price USD</span>
                                <span className="font-medium">
                                    600,000,000.00
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Marketcap</span>
                                <span className="font-medium">
                                    600,000,000.00
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Liquidty USD</span>
                                <span className="font-medium">
                                    600,000,000.00
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 my-5">
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Price BNB</span>
                                <span className="font-medium">
                                    400,000,000.00
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Volume 24H</span>
                                <span className="font-medium">
                                    400,000,000.00
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-1 bg-detail-card-profile ">
                            <div className="w-2 bg-divide-l"></div>
                            <div className="flex flex-col p-2 z-10">
                                <span className="text-sm">Holders</span>
                                <span className="font-medium">
                                    400,000,000.00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;

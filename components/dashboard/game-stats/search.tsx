import { useRouter } from "next/router";
import { FC } from "react";
import { GiPerspectiveDiceSixFacesOne, GiRank3 } from "react-icons/gi";
import { HiChartBar } from "react-icons/hi";

interface SearchGameStatsProps {}

const SearchGameStats: FC<SearchGameStatsProps> = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                {router.pathname === "/dashboard/game-stats" && (
                    <GiRank3 className="text-7xl icon-gradient-secondary" />
                )}
                {router.pathname === "/dashboard/game-stats/results" && (
                    <HiChartBar className="text-7xl icon-gradient-secondary" />
                )}
                {router.pathname === "/dashboard/game-stats/games" && (
                    <GiPerspectiveDiceSixFacesOne className="text-7xl icon-gradient-secondary" />
                )}

                <h3 className="text-2xl font-semibold">
                    {router.pathname === "/dashboard/game-stats" &&
                        "Leaderboard"}
                    {router.pathname === "/dashboard/game-stats/results" &&
                        "Results"}
                    {router.pathname === "/dashboard/game-stats/games" &&
                        "My Games"}
                </h3>
            </div>
            <div>
                <form className="space-x-5">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="bg-input p-3 rounded-lg  outline-none"
                    />
                    <button type="button" className="btn-meta">
                        Search
                    </button>
                    <button
                        type="button"
                        className="btn-meta px-8 bg-button-secondary shadow-button-wallet"
                    >
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchGameStats;

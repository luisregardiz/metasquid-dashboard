import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { HiChartBar, HiCog, HiUser } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesOne, GiRank3 } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import Avatar from "./avatar";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const router = useRouter();

    return (
        <>
            <header
                className={`flex items-center  ${
                    router.pathname === "/dashboard" ||
                    router.pathname === "/dashboard/treasure"
                        ? "justify-end"
                        : "justify-between"
                } my-5`}
            >
                {(router.pathname === "/dashboard/profile" ||
                    router.pathname === "/dashboard/profile/settings") && (
                    <div>
                        <ul className="flex items-center space-x-5 ">
                            <li className="header-item">
                                <Link href="/dashboard/profile">
                                    <a
                                        className={`flex items-center  ${
                                            router.pathname ===
                                                "/dashboard/profile" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <HiUser
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/profile" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Profile
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="header-item">
                                <Link href="/dashboard/profile/settings">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/profile/settings" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <HiCog
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/profile/settings" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Settings
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                {(router.pathname === "/dashboard/staking" ||
                    router.pathname === "/dashboard/staking/gameplay") && (
                    <div>
                        <ul className="flex items-center space-x-5 ">
                            <li className="header-item">
                                <Link href="/dashboard/staking">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/staking" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <MdDashboard
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/staking" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Setup
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="header-item">
                                <Link href="/dashboard/staking/gameplay">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/staking/gameplay" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <IoGameController
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/staking/gameplay" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Gameplay
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                {(router.pathname === "/dashboard/game-stats" ||
                    router.pathname === "/dashboard/game-stats/results" ||
                    router.pathname === "/dashboard/game-stats/games") && (
                    <div>
                        <ul className="flex items-center space-x-5 ">
                            <li className="header-item">
                                <Link href="/dashboard/game-stats">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/game-stats" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <GiRank3
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/game-stats" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Leaderboard
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="header-item">
                                <Link href="/dashboard/game-stats/results">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/game-stats/results" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <HiChartBar
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/game-stats/results" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            Results
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="header-item">
                                <Link href="/dashboard/game-stats/games">
                                    <a
                                        className={`flex items-center ${
                                            router.pathname ===
                                                "/dashboard/game-stats/games" &&
                                            "header-item-gradient"
                                        }`}
                                    >
                                        <GiPerspectiveDiceSixFacesOne
                                            className={`text-2xl mr-2  ${
                                                router.pathname ===
                                                    "/dashboard/game-stats/games" &&
                                                "icon-gradient-secondary"
                                            }`}
                                        />
                                        <span className="font-semibold">
                                            My Games
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                <Avatar />
            </header>
            {/* Icon Gradient */}
            <svg width="0" height="0">
                <linearGradient
                    id="secondary-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                >
                    <stop stopColor="#D124EB" offset="0%" />
                    <stop stopColor="#DC2626" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
};

export default Header;

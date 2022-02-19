import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { HiHome, HiLogout, HiUserCircle } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { useMoralis } from "react-moralis";
import LogoMetasquid from "../../public/assets/images/logo-metasquid.svg";
import LogoTypeMetasquid from "../../public/assets/images/logotype-meta.png";
import Icon from "@mdi/react";
import { mdiTreasureChest, mdiScoreboard } from "@mdi/js";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const { isAuthenticated, logout } = useMoralis();
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.push("/");
    };
    return (
        <>
            <aside className="sticky top-0 max-h-screen h-screen  bg-sidebar shadow-sidebar ">
                <div className=" p-4 h-full flex flex-col items-center py-5">
                    <div className="flex flex-col items-center relative ">
                        <Image
                            src={LogoMetasquid}
                            alt="Logo Metasquid"
                            height={50}
                            width={50}
                            objectFit="contain"
                            priority
                        />
                        <Image
                            src={LogoTypeMetasquid}
                            alt="Logotype Metasquid"
                            height={20}
                            width={50}
                            objectFit="contain"
                            priority
                        />
                    </div>
                    {isAuthenticated && (
                        <nav className="my-20 ">
                            <ul className="flex flex-col   h-full space-y-10">
                                <li>
                                    <Link href="/dashboard">
                                        <a
                                            className={`sidebar-item ${
                                                router.pathname ===
                                                    "/dashboard" &&
                                                "bg-black/30"
                                            }`}
                                        >
                                            <HiHome
                                                className={`text-2xl ${
                                                    router.pathname ===
                                                        "/dashboard" &&
                                                    "icon-gradient-primary"
                                                }`}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/profile">
                                        <a
                                            className={`sidebar-item ${
                                                (router.pathname ===
                                                    "/dashboard/profile" ||
                                                    router.pathname ===
                                                        "/dashboard/profile/settings") &&
                                                "bg-black/30"
                                            }`}
                                        >
                                            <HiUserCircle
                                                className={`text-2xl ${
                                                    (router.pathname ===
                                                        "/dashboard/profile" ||
                                                        router.pathname ===
                                                            "/dashboard/profile/settings") &&
                                                    "icon-gradient-primary"
                                                }`}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/staking">
                                        <a
                                            className={`sidebar-item ${
                                                router.pathname ===
                                                    "/dashboard/staking" &&
                                                "bg-black/30"
                                            }`}
                                        >
                                            <IoGameController
                                                className={`text-2xl ${
                                                    (router.pathname ===
                                                        "/dashboard/staking" ||
                                                        router.pathname ===
                                                            "/dashboard/staking/gameplay") &&
                                                    "icon-gradient-primary"
                                                }`}
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/treasure">
                                        <a
                                            className={`sidebar-item ${
                                                router.pathname ===
                                                    "/dashboard/treasure" &&
                                                " bg-black/30 "
                                            }`}
                                        >
                                            <Icon
                                                path={mdiTreasureChest}
                                                size={1}
                                                color={
                                                    router.pathname ===
                                                    "/dashboard/treasure"
                                                        ? "url(#primary-gradient)"
                                                        : "white"
                                                }
                                            />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/game-stats">
                                        <a
                                            className={`sidebar-item ${
                                                (router.pathname ===
                                                    "/dashboard/game-stats" ||
                                                    router.pathname ===
                                                        "/dashboard/game-stats/results" ||
                                                    router.pathname ===
                                                        "/dashboard/game-stats/games") &&
                                                " bg-black/30"
                                            }`}
                                        >
                                            <Icon
                                                path={mdiScoreboard}
                                                size={1}
                                                color={
                                                    router.pathname ===
                                                        "/dashboard/game-stats" ||
                                                    router.pathname ===
                                                        "/dashboard/game-stats/results" ||
                                                    router.pathname ===
                                                        "/dashboard/game-stats/games"
                                                        ? "url(#primary-gradient)"
                                                        : "white"
                                                }
                                            />
                                        </a>
                                    </Link>
                                </li>

                                <li
                                    onClick={handleLogout}
                                    className="absolute bottom-10 cursor-pointer h-10 w-10 hover:bg-black/30 flex items-center justify-center rounded-lg"
                                >
                                    <HiLogout className="text-2xl" />
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </aside>
            {/* Icon Gradient */}
            <svg width="0" height="0">
                <linearGradient
                    id="primary-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                >
                    <stop stopColor="#00EFF8" offset="0%" />
                    <stop stopColor="#2CA2E9" offset="40%" />
                    <stop stopColor="#5C4DD9" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
};

export default Sidebar;

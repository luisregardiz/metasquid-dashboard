import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

import DashboardSwiper from "../../components/dashboard/swiper";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
    const router = useRouter();
    const { isAuthenticated } = useMoralis();
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);
    return (
        <>
            <Head>
                <title>Metasquid | Dasboard</title>
                <meta
                    name="description"
                    content="100% RUG PROOF AND COMMUNITY DRIVEN METAVERSE GAMES!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                <div>
                    <DashboardSwiper />
                </div>
            </section>
        </>
    );
};

export default Dashboard;

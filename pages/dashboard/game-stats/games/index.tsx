import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import MyGamesTable from "../../../../components/dashboard/game-stats/my-games/table";
import SearchGameStats from "../../../../components/dashboard/game-stats/search";
import { variantsPage } from "../../../../helpers/motion/variants";

interface GamesMyGamesProps {}

const GamesMyGames: NextPage<GamesMyGamesProps> = () => {
    return (
        <AnimatePresence>
            <Head>
                <title>Metasquid | Game Stats - My Games </title>
                <meta
                    name="description"
                    content="100% RUG PROOF AND COMMUNITY DRIVEN METAVERSE GAMES!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.section
                key="page"
                variants={variantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "tween", duration: 0.3 }}
                className="my-5"
            >
                <div className="bg-card p-10 min-h-screen">
                    <SearchGameStats />
                    <MyGamesTable />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default GamesMyGames;

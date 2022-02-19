import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import ResultsTable from "../../../../components/dashboard/game-stats/results/table";

import SearchGameStats from "../../../../components/dashboard/game-stats/search";

import { variantsPage } from "../../../../helpers/motion/variants";

interface GameResultsProps {}

const GameResults: NextPage<GameResultsProps> = () => {
    return (
        <AnimatePresence>
            <Head>
                <title>Metasquid | Game Stats - Results</title>
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
                <div className="bg-card p-10">
                    <SearchGameStats />
                    <ResultsTable />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default GameResults;

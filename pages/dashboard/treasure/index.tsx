import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import ClaimedTreasure from "../../../components/dashboard/treasure/claimed";
import TokenRewards from "../../../components/dashboard/treasure/token-rewards";
import { variantsPage } from "../../../helpers/motion/variants";

interface TreasureProps {}

const Treasure: NextPage<TreasureProps> = () => {
    return (
        <AnimatePresence>
            <Head>
                <title>Metasquid | Treasure</title>
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
                <TokenRewards />
                <ClaimedTreasure />
            </motion.section>
        </AnimatePresence>
    );
};

export default Treasure;

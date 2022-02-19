import type { NextPage } from "next";
import Head from "next/head";
import Items from "../../../components/dashboard/staking/setup/items/items";
import Information from "../../../components/dashboard/staking/setup/information";
import SquidStake from "../../../components/dashboard/staking/setup/stake";
import { AnimatePresence, motion } from "framer-motion";
import { variantsPage } from "../../../helpers/motion/variants";
import Announcement from "../../../components/dashboard/staking/setup/announcement";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowRight from "../../../public/assets/icons/arrow-right.svg";
import "swiper/css";
import "swiper/css/pagination";

interface StakingProps {}

const Staking: NextPage<StakingProps> = () => {
    const router = useRouter();
    return (
        <AnimatePresence>
            <Head>
                <title>Metasquid | Staking</title>
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
                className="my-10 relative min-h-screen"
            >
                <div className="grid-profile">
                    <Information />
                    <SquidStake />
                    <Items />
                    <Announcement />
                </div>
                <div
                    onClick={() => router.push("staking/gameplay")}
                    className="absolute top-96 -right-14 cursor-pointer hover:scale-110 transition"
                >
                    <Image src={ArrowRight} alt="Arrow Right" />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default Staking;

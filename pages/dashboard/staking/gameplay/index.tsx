import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { variantsPageReverse } from "../../../../helpers/motion/variants";
import BorderLeft from "../../../../public/assets/images/gameplay/border-left.svg";
import BorderRight from "../../../../public/assets/images/gameplay/border-right.svg";
import Border from "../../../../components/dashboard/staking/gameplay/border";
import GameplayInformation from "../../../../components/dashboard/staking/gameplay/information";
import Slots from "../../../../components/dashboard/staking/gameplay/slots";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowLeft from "../../../../public/assets/icons/arrow-left.svg";

interface StakingGameplayProps {}

const StakingGameplay: NextPage<StakingGameplayProps> = () => {
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
                variants={variantsPageReverse}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "tween", duration: 0.3 }}
                className="my-10 min-h-screen relative max-w-6xl mx-auto"
            >
                <div className="bg-gameplay-title p-2">
                    <div className="bg-card px-6 py-3 w-1/3 mx-auto text-center">
                        <h4 className="text-xl font-bold">
                            BUSD SUPER SQUID N°1
                        </h4>
                    </div>
                </div>
                <div className="h-[500px] flex bg-gameplay">
                    <Border src={BorderLeft} height={500} width={10} />
                    <Slots />
                    <Border src={BorderRight} height={500} width={10} />
                </div>
                <GameplayInformation />
                <div
                    onClick={() => router.push("/dashboard/staking")}
                    className="absolute top-96 -left-14 cursor-pointer hover:scale-110 transition"
                >
                    <Image src={ArrowLeft} alt="Arrow Left" />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default StakingGameplay;

import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Earnings from "../../../components/dashboard/profile/earnings";
import PayedOut from "../../../components/dashboard/profile/payed-out";
import Tokenomics from "../../../components/dashboard/profile/tokenomics";
import UserInformation from "../../../components/dashboard/profile/user-info";
import { variantsPage } from "../../../helpers/motion/variants";
import ArrowRight from "../../../public/assets/icons/arrow-right.svg";

interface ProfileProps {}

const Profile: NextPage<ProfileProps> = () => {
    const router = useRouter();

    return (
        <AnimatePresence exitBeforeEnter>
            <Head>
                <title>Metasquid | Profile</title>
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
                    <UserInformation />
                    <Earnings />
                    <Tokenomics />
                    <PayedOut />
                </div>
                <div
                    onClick={() => router.push("profile/settings")}
                    className="absolute top-96 -right-14 cursor-pointer hover:scale-110 transition"
                >
                    <Image src={ArrowRight} alt="Arrow Right" />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default Profile;

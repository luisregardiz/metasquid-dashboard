import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import SettingsForm from "../../../../components/dashboard/profile/settings/form";
import { variantsPageReverse } from "../../../../helpers/motion/variants";
import ArrowLeft from "../../../../public/assets/icons/arrow-left.svg";

interface ProfileSettingsProps {}

const ProfileSettings: NextPage<ProfileSettingsProps> = () => {
    const router = useRouter();

    return (
        <AnimatePresence exitBeforeEnter>
            <Head>
                <title>Metasquid | Profile - Settings</title>
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
                className="my-10 relative"
            >
                <SettingsForm />
                <div
                    onClick={() => router.push("/dashboard/profile")}
                    className="absolute top-96 -left-10 cursor-pointer hover:scale-110 transition"
                >
                    <Image src={ArrowLeft} alt="Arrow Left" />
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

export default ProfileSettings;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import AccessModal from "../components/modals/access/access";
import { useScrollBlock } from "../hooks/useScrollBlock";
import TokenCards from "../public/assets/images/token-cards.svg";

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const { isAuthenticated } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/dashboard");
        }
    }, [isAuthenticated, router]);

    useEffect(() => {
        isOpen ? blockScroll() : allowScroll();
    }, [allowScroll, blockScroll, isOpen]);
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
            <section className="p-10  relative min-h-screen flex flex-col items-center justify-center">
                <div className="flex gap-10 ">
                    <div className="flex flex-col w-1/2 ml-10">
                        <h2 className="text-5xl font-semibold text-shadow-meta">
                            100% RUG PROOF AND COMMUNITY DRIVEN METAVERSE GAMES!
                        </h2>
                        <span className="text-lg my-10">
                            Connect your wallet to login to your profile
                        </span>
                        <div className="self-center my-10">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="btn-meta"
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                    <div className="relative -right-10">
                        <Image
                            src={TokenCards}
                            alt="Token Cards"
                            height={600}
                            width={600}
                            objectFit="contain"
                            priority
                        />
                    </div>
                </div>
                <AccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </section>
        </>
    );
};

export default Home;

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { useMoralis } from "react-moralis";
import { modalContentVariants } from "../../../helpers/motion/variants";
import MetamaskIcon from "../../../public/assets/icons/metamask.svg";
import TrustWalletIcon from "../../../public/assets/icons/trust-wallet.svg";
import WalletConnectIcon from "../../../public/assets/icons/wallet-connect.svg";
interface WalletsProps {
    wallets: boolean;
    setWallets: Dispatch<SetStateAction<boolean>>;
}

const Wallets: FC<WalletsProps> = ({ wallets, setWallets }) => {
    const { authenticate, isAuthenticating } = useMoralis();
    return (
        <AnimatePresence>
            {wallets && (
                <motion.div
                    variants={modalContentVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="modal"
                >
                    <div
                        onClick={(ev) => ev.stopPropagation()}
                        className="bg-meta-violet-dark w-[500px] p-10 rounded-lg shadow-lg  flex flex-col"
                    >
                        <h4 className="text-lg font-medium ">
                            Connect with one of our availible wallet providers
                            or create a new one.
                        </h4>
                        {isAuthenticating ? (
                            <div className="my-5 text-center">
                                <span>Authenticating...</span>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-5 my-5">
                                <div
                                    onClick={() =>
                                        authenticate({
                                            signingMessage:
                                                "Metasquid Dashboard",
                                        })
                                    }
                                    className="btn-meta flex justify-between items-center"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src={MetamaskIcon}
                                            alt="Metamask Icon"
                                            height={24}
                                            width={24}
                                            objectFit="contain"
                                            priority
                                        />
                                        <span className="ml-2">Metamask</span>
                                    </div>
                                    <span className="font-normal">Popular</span>
                                </div>
                                <div className="btn-meta bg-button-wallet flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Image
                                            src={TrustWalletIcon}
                                            alt="Trust Wallet Icon"
                                            height={24}
                                            width={24}
                                            objectFit="contain"
                                            priority
                                        />
                                        <span className="ml-2">
                                            Trust Wallet
                                        </span>
                                    </div>
                                </div>
                                <div className="btn-meta bg-button-wallet flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Image
                                            src={WalletConnectIcon}
                                            alt="Wallet Connect Icon"
                                            height={24}
                                            width={24}
                                            objectFit="contain"
                                            priority
                                        />
                                        <span className="ml-2">
                                            Wallet Connect
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="self-center my-5">
                            <button
                                onClick={() => setWallets(false)}
                                className="btn-meta bg-button-secondary shadow-button-wallet"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Wallets;

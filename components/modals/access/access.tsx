import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import {
    modalContentVariants,
    modalVariants,
} from "../../../helpers/motion/variants";

import Login from "./login";
import SignUp from "./register";

interface AccessModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AccessModal: FC<AccessModalProps> = ({ isOpen, setIsOpen }) => {
    const { authError } = useMoralis();
    const [isLogin, setLogin] = useState(true);

    useEffect(() => {
        if (authError) {
            toast.error(authError.message, {
                style: {
                    background:
                        "linear-gradient(270deg, #D124EB 0%, #DC2626 100%)",
                    color: "white",
                    fontWeight: "500",
                    padding: "1rem",
                },
                duration: 6000,
            });
        }
    }, [authError]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="modal"
                    variants={modalVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => setIsOpen(false)}
                    className="modal"
                >
                    <motion.div
                        variants={modalContentVariants}
                        onClick={(ev) => ev.stopPropagation()}
                        className="modal-content"
                    >
                        <div className="bg-meta-violet-100/50 flex items-center p-2 rounded-lg">
                            <button
                                onClick={() => setLogin(true)}
                                className={`${
                                    isLogin
                                        ? "bg-button-primary"
                                        : "bg-transparent"
                                } w-full py-2 rounded-lg font-semibold transition-all`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setLogin(false)}
                                className={`${
                                    !isLogin
                                        ? "bg-button-primary"
                                        : "bg-transparent"
                                } w-full py-2 rounded-lg font-semibold transition-all`}
                            >
                                Register
                            </button>
                        </div>
                        {isLogin ? <Login /> : <SignUp />}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AccessModal;

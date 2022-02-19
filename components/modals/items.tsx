import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";
import {
    modalContentVariants,
    modalVariants,
} from "../../helpers/motion/variants";

interface ModalItemsProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalItems: FC<ModalItemsProps> = ({ isOpen, setIsOpen }) => {
    const [isMarketplace, setIsMarketplace] = useState<boolean>(false);
    const items = Array.from(Array(12).keys());
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
                        className="modal-content cursor-default"
                    >
                        <div className="w-full flex justify-between mx-auto bg-meta-violet-100 rounded-lg space-x-2">
                            <button
                                onClick={() => setIsMarketplace(false)}
                                className={`w-full ${
                                    !isMarketplace && "bg-meta-violet-200"
                                }  rounded-lg py-2 transition-all`}
                            >
                                My items
                            </button>
                            <button
                                onClick={() => setIsMarketplace(true)}
                                className={`w-full ${
                                    isMarketplace && "bg-meta-violet-200"
                                }  rounded-lg py-2 transition-all`}
                            >
                                Marketplace
                            </button>
                        </div>
                        <div className="w-full my-10">
                            <div className="grid grid-cols-3 gap-5 place-items-center overflow-y-auto h-[400px] scroll-items">
                                {items.map((item) => (
                                    <div
                                        key={item}
                                        className="h-28 w-28 bg-gray-500/50 rounded-lg"
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center w-3/4 mx-auto space-x-8 ">
                            <button
                                disabled
                                className="btn-meta w-full disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                Select
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="btn-meta bg-button-secondary shadow-button-wallet w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalItems;

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";
import {
    modalContentVariants,
    modalVariants,
} from "../../helpers/motion/variants";

interface AlertDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    message: string;
    type: string;
}

const AlertDialog: FC<AlertDialogProps> = ({
    isOpen,
    setIsOpen,
    message,
    type,
}) => {
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
                        className="modal-content min-h-0 cursor-default"
                        id="alert-dialog"
                    >
                        <h4 className="text-center text-lg font-semibold mb-5">
                            {message}
                        </h4>
                        <div className="w-1/2 mx-auto flex items-center  space-x-5">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="btn-meta bg-button-secondary shadow-button-wallet w-full"
                            >
                                Cancel
                            </button>
                            <button className="btn-meta w-full ">{type}</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AlertDialog;

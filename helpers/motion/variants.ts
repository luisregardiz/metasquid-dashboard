export const variantsPage = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -100,
    },
};

export const variantsPageReverse = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 100,
    },
};

export const modalVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export const modalContentVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: "spring", stiffness: 200, damping: 15 },
            duration: 0.15,
        },
    },
    closed: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.15,
        },
    },
};
